/**
 * Minimal Theme - Clean white/gray with subtle accents
 * Perfect for modern, clean aesthetics with focus on content
 */

import type { Theme } from './types';

export const minimalTheme: Theme = {
  name: 'minimal',
  displayName: 'Minimal Clean',
  description: 'Clean white and gray aesthetic with subtle accents',
  
  colors: {
    // Primary - Subtle gray-blue
    primary: '220 15% 30%',
    primaryForeground: '0 0% 100%',
    primaryHover: '220 15% 25%',
    
    // Secondary - Light gray
    secondary: '220 10% 95%',
    secondaryForeground: '220 15% 25%',
    
    // Accent - Soft blue
    accent: '210 80% 55%',
    accentForeground: '0 0% 100%',
    
    // Background - Pure white
    background: '0 0% 100%',
    foreground: '220 15% 15%',
    
    // Card - White with subtle shadow
    card: '0 0% 100%',
    cardForeground: '220 15% 15%',
    
    // Popover - Pure white
    popover: '0 0% 100%',
    popoverForeground: '220 15% 15%',
    
    // Muted - Very light gray
    muted: '220 10% 97%',
    mutedForeground: '220 10% 45%',
    
    // Destructive - Soft red
    destructive: '0 60% 55%',
    destructiveForeground: '0 0% 100%',
    
    // Success - Soft green
    success: '150 50% 45%',
    successForeground: '0 0% 100%',
    
    // Warning - Soft amber
    warning: '40 70% 55%',
    warningForeground: '40 70% 10%',
    
    // Border - Very light gray
    border: '220 10% 92%',
    input: '220 10% 92%',
    ring: '220 15% 30%',
    
    // Header - Subtle off-white with visible border
    headerBg: '220 10% 98%',
    headerText: '220 15% 20%',
    headerBorder: '220 10% 85%',
    
    // Footer - Light gray
    footerBg: '220 10% 97%',
    footerText: '220 15% 30%',
    footerBorder: '220 10% 92%',
    
    // Gradient - Subtle gray
    gradientStart: '220 10% 97%',
    gradientEnd: '220 10% 92%',
    
    // Overlay
    overlay: '0 0% 0% / 0.3',
  },
  
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontFamilyHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSizeBase: '1rem',
    fontSizeSm: '0.875rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    fontSize2xl: '1.5rem',
    fontSize3xl: '1.875rem',
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    lineHeight: '1.5',
  },
  
  radius: {
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.03)',
    md: '0 2px 4px -1px rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.02)',
    lg: '0 4px 8px -2px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.02)',
    xl: '0 8px 16px -4px rgb(0 0 0 / 0.05), 0 4px 8px -4px rgb(0 0 0 / 0.02)',
  },
  
  buttons: {
    default: {
      bg: '220 15% 30%',
      text: '0 0% 100%',
      border: '220 15% 25%',
      hover: '220 15% 25%',
    },
    outline: {
      bg: 'transparent',
      text: '220 15% 30%',
      border: '220 10% 88%',
      hover: '220 10% 97%',
    },
    ghost: {
      bg: 'transparent',
      text: '220 15% 30%',
      hover: '220 10% 97%',
    },
    destructive: {
      bg: '0 60% 55%',
      text: '0 0% 100%',
      hover: '0 60% 50%',
    },
  },
};
