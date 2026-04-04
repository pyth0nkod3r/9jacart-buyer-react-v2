/**
 * Main Theme Configuration
 * Centralized configuration for the entire application
 */

import type { AppConfig, BrandingConfig, LayoutConfig, ThemeName } from '../themes/types';
import { defaultFeatures } from './features.config';

// Default branding configuration
export const defaultBranding: BrandingConfig = {
  appName: 'BuyerHub',
  tagline: 'Your One-Stop Online Marketplace',
  logo: '/buyerhub-icon.svg',
  favicon: '/buyerhub-icon.svg',
  footerText: `© Copyright ${new Date().getFullYear()}. All rights reserved.`,
  socialLinks: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  },
  contactInfo: {
    address: '123 Main Street, City, Country',
    phone: ['+1234567890'],
    email: 'contact@buyerhub.com',
  },
};

// Default layout configuration
export const defaultLayout: LayoutConfig = {
  headerStyle: 'default',
  footerColumns: 3,
  sidebarPosition: 'left',
  containerMaxWidth: '1400px',
  showBreadcrumbs: true,
};

// Create default app configuration
export function createDefaultConfig(overrides?: Partial<AppConfig>): AppConfig {
  return {
    branding: overrides?.branding ?? defaultBranding,
    features: overrides?.features ?? defaultFeatures,
    layout: overrides?.layout ?? defaultLayout,
    theme: overrides?.theme ?? 'default',
  };
}

// Default configuration instance
export const defaultConfig: AppConfig = createDefaultConfig();

// Configuration helper functions
export function updateAppConfig(
  current: AppConfig,
  updates: Partial<AppConfig>
): AppConfig {
  return {
    ...current,
    ...updates,
    branding: updates.branding ? { ...current.branding, ...updates.branding } : current.branding,
    features: updates.features ? { ...current.features, ...updates.features } : current.features,
    layout: updates.layout ? { ...current.layout, ...updates.layout } : current.layout,
  };
}

// Validate theme name
export function isValidThemeName(name: string): name is ThemeName {
  return ['default', 'dark', 'luxury', 'minimal', 'vibrant'].includes(name);
}

// Storage key for persisting config
export const CONFIG_STORAGE_KEY = 'BuyerHub-config';
export const THEME_STORAGE_KEY = 'BuyerHub-theme';
