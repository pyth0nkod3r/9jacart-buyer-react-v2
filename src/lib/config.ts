// App configuration
export const config = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'BuyerHub',
    url: import.meta.env.VITE_APP_URL || 'http://localhost:5173',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'https://api.example.com',
    basicAuth: {
      username: import.meta.env.VITE_API_BASIC_USERNAME || 'admin@example.com',
      password: import.meta.env.VITE_API_BASIC_PASSWORD || 'admin123',
    },
  },
  auth: {
    tokenKey: 'auth-token',
    storageKey: 'auth-storage',
    rememberMeKey: 'auth-remember-me',
    google: {
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
      accessToken: import.meta.env.VITE_GOOGLE_ACCESS_TOKEN || '', // Static access token from backend
    },
  },
  features: {
    // Feature flags for development
    enablePayments: false,
    enableReviews: true,
    enableWishlist: true,
    enableNotifications: false,
  },
  ui: {
    // UI configuration
    itemsPerPage: 12,
    maxCartItems: 99,
    imageQuality: 80,
  },
} as const;
