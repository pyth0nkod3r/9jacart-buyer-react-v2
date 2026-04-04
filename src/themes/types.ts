/**
 * Theme Type Definitions for BuyerHub
 * These types define the structure of themes and configuration
 */

// Color palette for themes
export interface ThemeColors {
  // Primary brand colors
  primary: string;
  primaryForeground: string;
  primaryHover: string;
  
  // Secondary colors
  secondary: string;
  secondaryForeground: string;
  
  // Accent colors
  accent: string;
  accentForeground: string;
  
  // Background colors
  background: string;
  foreground: string;
  
  // Card colors
  card: string;
  cardForeground: string;
  
  // Popover colors
  popover: string;
  popoverForeground: string;
  
  // Muted colors
  muted: string;
  mutedForeground: string;
  
  // Destructive/error colors
  destructive: string;
  destructiveForeground: string;
  
  // Success colors
  success: string;
  successForeground: string;
  
  // Warning colors
  warning: string;
  warningForeground: string;
  
  // Border and input colors
  border: string;
  input: string;
  ring: string;
  
  // Header specific
  headerBg: string;
  headerText: string;
  headerBorder: string;
  
  // Footer specific
  footerBg: string;
  footerText: string;
  footerBorder: string;
  
  // Additional theme-specific colors
  gradientStart?: string;
  gradientEnd?: string;
  overlay?: string;
}

// Typography settings
export interface ThemeTypography {
  fontFamily: string;
  fontFamilyHeading?: string;
  fontSizeBase: string;
  fontSizeSm: string;
  fontSizeLg: string;
  fontSizeXl: string;
  fontSize2xl: string;
  fontSize3xl: string;
  fontWeightNormal: number;
  fontWeightMedium: number;
  fontWeightSemibold: number;
  fontWeightBold: number;
  lineHeight: string;
}

// Border radius settings
export interface ThemeRadius {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

// Shadow settings
export interface ThemeShadows {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

// Button styles per theme
export interface ThemeButtonStyles {
  default: {
    bg: string;
    text: string;
    border: string;
    hover: string;
  };
  outline: {
    bg: string;
    text: string;
    border: string;
    hover: string;
  };
  ghost: {
    bg: string;
    text: string;
    hover: string;
  };
  destructive: {
    bg: string;
    text: string;
    hover: string;
  };
}

// Complete theme definition
export interface Theme {
  name: string;
  displayName: string;
  description: string;
  colors: ThemeColors;
  typography: ThemeTypography;
  radius: ThemeRadius;
  shadows: ThemeShadows;
  buttons: ThemeButtonStyles;
}

// Theme identifier type
export type ThemeName = 'default' | 'dark' | 'luxury' | 'minimal' | 'vibrant';

// Branding configuration
export interface BrandingConfig {
  appName: string;
  tagline: string;
  logo: string;
  logoDark?: string;
  favicon: string;
  footerText: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  contactInfo: {
    address?: string;
    phone?: string[];
    email?: string;
  };
}

// Feature toggles
export interface FeatureConfig {
  wishlist: boolean;
  flashSales: boolean;
  newsletter: boolean;
  services: boolean;
  ratings: boolean;
  recentlyViewed: boolean;
  heroCarousel: boolean;
  categorySidebar: boolean;
  liveProducts: boolean;
  fastSelling: boolean;
  categoryShowcase: boolean;
  googleSignIn: boolean;
  payments: boolean;
  reviews: boolean;
  notifications: boolean;
}

// Layout configuration
export interface LayoutConfig {
  headerStyle: 'default' | 'centered' | 'split';
  footerColumns: number;
  sidebarPosition: 'left' | 'right' | 'hidden';
  containerMaxWidth: string;
  showBreadcrumbs: boolean;
}

// Main application configuration
export interface AppConfig {
  branding: BrandingConfig;
  features: FeatureConfig;
  layout: LayoutConfig;
  theme: ThemeName;
}

// Theme context type
export interface ThemeContextType {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  config: AppConfig;
  updateConfig: (config: Partial<AppConfig>) => void;
}

// CSS variable mapping for theme colors
export interface CSSVariableMap {
  [key: string]: string;
}
