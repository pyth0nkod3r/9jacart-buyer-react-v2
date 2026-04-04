import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, PendingVerification } from '../types';
import { authApi, type LoginResponse, type RegisterResponse, type GoogleLoginResponse } from '../api/auth';
import { config } from '../lib/config';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  pendingVerification: PendingVerification | null;
  
  // Actions
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  loginWithGoogle: (idToken: string) => Promise<void>;
  googleLogin: (idToken: string) => Promise<void>; // Alias for compatibility
  register: (userData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
  }) => Promise<void>;
  verifyEmail: (code: string) => Promise<void>;
  resendOtp: () => Promise<void>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  updateProfile: (data: { firstName?: string; lastName?: string }) => Promise<void>;
  setLoading: (loading: boolean) => void;
  checkAuth: () => Promise<void>;
  checkAuthStatus: () => Promise<void>; // Alias for compatibility
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: true,
      pendingVerification: null,

      login: async (email: string, password: string, rememberMe: boolean = false) => {
        set({ isLoading: true });
        try {
          const response: LoginResponse = await authApi.login(email, password, rememberMe);
          
          const user: User = {
            id: response.data.buyerId,
            email: response.data.emailAddress,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            phone: response.data.phoneNumber ?? undefined,
            token: response.data.token,
            isActive: response.data.isActive === '1',
            isEmailVerified: response.data.isEmailVerified === '1',
            verifiedAt: response.data.verifiedAt ?? undefined,
            createdAt: response.data.createdAt,
            updatedAt: response.data.updatedAt,
          };

          // Store token in localStorage
          localStorage.setItem(config.auth.tokenKey, response.data.token);
          
          if (rememberMe) {
            localStorage.setItem(config.auth.rememberMeKey, 'true');
          }

          set({
            user,
            token: response.data.token,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      loginWithGoogle: async (idToken: string) => {
        set({ isLoading: true });
        try {
          const response: GoogleLoginResponse = await authApi.googleLogin(idToken);
          
          const user: User = {
            id: response.data.buyerId,
            email: response.data.emailAddress,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            phone: response.data.phoneNumber ?? undefined,
            token: response.data.token,
            isActive: response.data.isActive === '1',
            isEmailVerified: response.data.isEmailVerified === '1',
            verifiedAt: response.data.verifiedAt ?? undefined,
            createdAt: response.data.createdAt,
            updatedAt: response.data.updatedAt,
          };

          localStorage.setItem(config.auth.tokenKey, response.data.token);

          set({
            user,
            token: response.data.token,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      // Alias for loginWithGoogle
      googleLogin: async (idToken: string) => {
        const { loginWithGoogle } = get();
        return loginWithGoogle(idToken);
      },

      register: async (userData) => {
        set({ isLoading: true });
        try {
          const response: RegisterResponse = await authApi.register(userData);
          
          set({
            pendingVerification: {
              identifier: userData.email,
              verificationId: response.data?.verificationId || '',
            },
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      verifyEmail: async (code: string) => {
        const { pendingVerification } = get();
        if (!pendingVerification) {
          throw new Error('No pending verification');
        }
        
        set({ isLoading: true });
        try {
          await authApi.verifyEmail(pendingVerification.identifier, code);
          set({
            pendingVerification: null,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      resendOtp: async () => {
        const { pendingVerification } = get();
        if (!pendingVerification) {
          throw new Error('No pending verification');
        }
        
        set({ isLoading: true });
        try {
          await authApi.resendOtp(pendingVerification.identifier);
          set({ isLoading: false });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        localStorage.removeItem(config.auth.tokenKey);
        localStorage.removeItem(config.auth.rememberMeKey);
        set({
          user: null,
          token: null,
          isAuthenticated: false,
          pendingVerification: null,
        });
      },

      updateUser: (userData: Partial<User>) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...userData } : null,
        }));
      },

      updateProfile: async (data: { firstName?: string; lastName?: string }) => {
        const { user } = get();
        if (user) {
          set((state) => ({
            user: state.user ? { ...state.user, ...data } : null,
          }));
        }
      },

      setLoading: (loading: boolean) => {
        set({ isLoading: loading });
      },

      checkAuth: async () => {
        const token = localStorage.getItem(config.auth.tokenKey);
        if (!token) {
          set({ isLoading: false, isAuthenticated: false, user: null, token: null });
          return;
        }

        try {
          // You might want to validate the token with the backend here
          // For now, we'll just restore the session from localStorage
          const stored = localStorage.getItem(config.auth.storageKey);
          if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed?.state?.user && parsed?.state?.token) {
              set({
                user: parsed.state.user,
                token: parsed.state.token,
                isAuthenticated: true,
                isLoading: false,
              });
              return;
            }
          }
        } catch {
          // Invalid stored data
        }
        
        set({ isLoading: false, isAuthenticated: false, user: null, token: null });
      },

      // Alias for checkAuth
      checkAuthStatus: async () => {
        const { checkAuth } = get();
        return checkAuth();
      },
    }),
    {
      name: config.auth.storageKey,
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
