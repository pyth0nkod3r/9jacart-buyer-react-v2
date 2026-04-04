import { config } from '../lib/config';

// API Error class
export class ApiError extends Error {
  status: number;
  data?: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// Basic Auth credentials
const getBasicAuthHeader = (): string => {
  const { username, password } = config.api.basicAuth;
  return 'Basic ' + btoa(`${username}:${password}`);
};

// Bearer Auth from stored token
const getBearerToken = (): string | null => {
  try {
    // Try to get from localStorage directly
    const token = localStorage.getItem(config.auth.tokenKey);
    if (token) return token;

    // Try to get from auth storage
    const authStorage = localStorage.getItem(config.auth.storageKey);
    if (authStorage) {
      const parsed = JSON.parse(authStorage);
      if (parsed?.state?.token) {
        return parsed.state.token;
      }
    }
    return null;
  } catch {
    return null;
  }
};

// Request options type
interface RequestOptions extends RequestInit {
  params?: Record<string, string | number | boolean | undefined>;
  useAuth?: boolean; // true = Bearer, false = Basic
}

// Base API client
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private buildUrl(endpoint: string, params?: Record<string, string | number | boolean | undefined>): string {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          url.searchParams.append(key, String(value));
        }
      });
    }
    
    return url.toString();
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<T> {
    const { params, useAuth = false, ...fetchOptions } = options;
    const url = this.buildUrl(endpoint, params);

    // Use Record type to allow index access
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    // Add existing headers from options
    if (fetchOptions.headers) {
      const existingHeaders = fetchOptions.headers as Record<string, string>;
      Object.entries(existingHeaders).forEach(([key, value]) => {
        headers[key] = value;
      });
    }

    // Add authentication
    if (useAuth) {
      const token = getBearerToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      } else {
        // Fallback to Basic auth if no bearer token
        headers['Authorization'] = getBasicAuthHeader();
      }
    } else {
      headers['Authorization'] = getBasicAuthHeader();
    }

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        headers,
      });

      // Handle non-JSON responses
      const contentType = response.headers.get('content-type');
      let data: any;

      if (contentType?.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        const message = data?.message || data?.error || `HTTP error! status: ${response.status}`;
        throw new ApiError(message, response.status, data);
      }

      return data as T;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      
      // Network or other errors
      throw new ApiError(
        error instanceof Error ? error.message : 'Network error occurred',
        0
      );
    }
  }

  async get<T>(endpoint: string, params?: Record<string, string | number | boolean | undefined>, useAuth?: boolean): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET', params, useAuth });
  }

  async post<T>(endpoint: string, body?: any, params?: Record<string, string | number | boolean | undefined>, useAuth?: boolean): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
      params,
      useAuth,
    });
  }

  async postNoBody<T>(endpoint: string, params?: Record<string, string | number | boolean | undefined>, useAuth?: boolean): Promise<T> {
    return this.request<T>(endpoint, { method: 'POST', params, useAuth });
  }

  async put<T>(endpoint: string, body?: any, params?: Record<string, string | number | boolean | undefined>, useAuth?: boolean): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
      params,
      useAuth,
    });
  }

  async patch<T>(endpoint: string, body?: any, params?: Record<string, string | number | boolean | undefined>, useAuth?: boolean): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
      params,
      useAuth,
    });
  }

  async delete<T>(endpoint: string, params?: Record<string, string | number | boolean | undefined>, useAuth?: boolean): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE', params, useAuth });
  }
}

// Export singleton instance
export const apiClient = new ApiClient(config.api.baseUrl);
