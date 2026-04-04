// Auth API request types
export interface LoginRequest {
  emailAddress: string;
  password: string;
  rememberMe?: number; // 1 or 0
}
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
}
export interface VerifyEmailRequest {
  identifier: string;
  code: string;
}
export interface ResendOtpRequest {
  identifier: string;
}
export interface GoogleLoginRequest {
  idToken: string;
}
export interface ForgotPasswordRequest {
  emailAddress: string;
}
export interface ResetPasswordRequest {
  token: string;
  password: string;
  passwordConfirmation: string;
}
// Auth API response types
export interface LoginResponse {
  status: number;
  error: boolean;
  message: string;
  data: {
    buyerId: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string | null;
    isActive: string;
    isEmailVerified: string;
    verifiedAt: string | null;
    createdAt: string;
    updatedAt: string;
    token: string;
  };
}
export interface RegisterResponse {
  status: number;
  error: boolean;
  message: string;
  data?: {
    verificationId: string;
    identifier: string;
  };
}
export interface VerifyEmailResponse {
  status: number;
  error: boolean;
  message: string;
}
export interface ResendOtpResponse {
  status: number;
  error: boolean;
  message: string;
}
export interface GoogleLoginResponse {
  status: number;
  error: boolean;
  message: string;
  data: {
    buyerId: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string | null;
    isActive: string;
    isEmailVerified: string;
    verifiedAt: string | null;
    createdAt: string;
    updatedAt: string;
    token: string;
  };
}
export interface ForgotPasswordResponse {
  status: number;
  error: boolean;
  message: string;
}
export interface ResetPasswordResponse {
  status: number;
  error: boolean;
  message: string;
}

// Helper function to simulate API delay
const simulateDelay = (ms: number = 300): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Mock user storage
const mockUsers: Map<string, { password: string; userData: LoginResponse['data'] }> = new Map();

// Generate a mock token
const generateMockToken = () => {
  return 'mock_token_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
};

// Auth API endpoints - MOCK VERSION
export const authApi = {
  // Login (mock)
  login: async (email: string, password: string, rememberMe: boolean = false): Promise<LoginResponse> => {
    await simulateDelay(500);
    
    // Check if user exists in mock storage
    const existingUser = mockUsers.get(email.toLowerCase());
    
    if (existingUser && existingUser.password === password) {
      return {
        status: 200,
        error: false,
        message: "Login successful",
        data: {
          ...existingUser.userData,
          token: generateMockToken()
        }
      };
    }
    
    // For demo purposes, create a new user on any login attempt
    const [firstName, lastName] = email.split('@')[0].split('.');
    const userData: LoginResponse['data'] = {
      buyerId: 'user_' + Math.random().toString(36).substring(2),
      firstName: firstName?.charAt(0).toUpperCase() + firstName?.slice(1) || 'Demo',
      lastName: lastName?.charAt(0).toUpperCase() + lastName?.slice(1) || 'User',
      emailAddress: email,
      phoneNumber: null,
      isActive: "1",
      isEmailVerified: "1",
      verifiedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      token: generateMockToken()
    };
    
    // Store the mock user for future logins
    mockUsers.set(email.toLowerCase(), { password, userData });
    
    return {
      status: 200,
      error: false,
      message: "Login successful",
      data: {
        ...userData,
        token: generateMockToken()
      }
    };
  },
  
  // Register (mock)
  register: async (userData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
  }): Promise<RegisterResponse> => {
    await simulateDelay(600);
    
    // Check if user already exists
    if (mockUsers.has(userData.email.toLowerCase())) {
      return {
        status: 400,
        error: true,
        message: "Email already registered"
      };
    }
    
    // Create mock user
    const newUserData: LoginResponse['data'] = {
      buyerId: 'user_' + Math.random().toString(36).substring(2),
      firstName: userData.firstName,
      lastName: userData.lastName,
      emailAddress: userData.email,
      phoneNumber: userData.phone,
      isActive: "1",
      isEmailVerified: "0",
      verifiedAt: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      token: ''
    };
    
    mockUsers.set(userData.email.toLowerCase(), { password: userData.password, userData: newUserData });
    
    return {
      status: 200,
      error: false,
      message: "Registration successful. Please verify your email.",
      data: {
        verificationId: 'verify_' + Math.random().toString(36).substring(2),
        identifier: userData.email
      }
    };
  },
  
  // Verify email (mock)
  verifyEmail: async (identifier: string, code: string): Promise<VerifyEmailResponse> => {
    await simulateDelay(400);
    
    // Accept any 6-digit code for demo
    if (code.length === 6) {
      return {
        status: 200,
        error: false,
        message: "Email verified successfully"
      };
    }
    
    return {
      status: 400,
      error: true,
      message: "Invalid verification code"
    };
  },
  
  // Resend OTP (mock)
  resendOtp: async (identifier: string): Promise<ResendOtpResponse> => {
    await simulateDelay(300);
    
    return {
      status: 200,
      error: false,
      message: "Verification code sent successfully"
    };
  },
  
  // Google Login (mock)
  googleLogin: async (idToken: string): Promise<GoogleLoginResponse> => {
    await simulateDelay(500);
    
    // Simulate Google login
    return {
      status: 200,
      error: false,
      message: "Google login successful",
      data: {
        buyerId: 'google_' + Math.random().toString(36).substring(2),
        firstName: 'Google',
        lastName: 'User',
        emailAddress: 'googleuser@example.com',
        phoneNumber: null,
        isActive: "1",
        isEmailVerified: "1",
        verifiedAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        token: generateMockToken()
      }
    };
  },
  
  // Forgot password (mock)
  forgotPassword: async (email: string): Promise<ForgotPasswordResponse> => {
    await simulateDelay(400);
    
    return {
      status: 200,
      error: false,
      message: "Password reset link sent to your email"
    };
  },
  
  // Reset password (mock)
  resetPassword: async (token: string, password: string, passwordConfirmation: string): Promise<ResetPasswordResponse> => {
    await simulateDelay(400);
    
    return {
      status: 200,
      error: false,
      message: "Password reset successful"
    };
  },
};
