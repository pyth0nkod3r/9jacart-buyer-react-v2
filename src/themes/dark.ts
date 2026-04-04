/**
 * Dark Theme - Deep blacks with neon accents
 * Perfect for late-night shopping with eye-friendly dark backgrounds
 */

import type { Theme } from './types';

export const darkTheme: Theme = {
  name: 'dark',
  displayName: 'Dark Mode',
  description: 'Deep blacks with neon accents for late-night browsing',
  
  colors: {
    // Primary - Neon Green
    primary: '142 90% 55%',
    primaryForeground: '142 90% 10%',
    primaryHover: '142 90% 65%',
    
    // Secondary - Dark gray
    secondary: '220 15% 20%',
    secondaryForeground: '210 40% 98%',
    
    // Accent - Neon purple
    accent: '280 80% 60%',
    accentForeground: '280 80% 98%',
    
    // Background - Near black
    background: '222 47% 8%',
    foreground: '210 40% 98%',
    
    // Card - Dark gray
    card: '222 47% 11%',
    cardForeground: '210 40% 98%',
    
    // Popover - Dark gray
    popover: '222 47% 11%',
    popoverForeground: '210 40% 98%',
    
    // Muted - Dark gray
    muted: '217 33% 17%',
    mutedForeground: '215 20% 65%',
    
    // Destructive - Neon red
    destructive: '0 90% 60%',
    destructiveForeground: '0 0% 100%',
    
    // Success - Neon green
    success: '142 90% 50%',
    successForeground: '142 90% 10%',
    
    // Warning - Neon orange
    warning: '30 90% 55%',
    warningForeground: '30 90% 10%',
    
    // Border - Dark gray
    border: '217 33% 20%',
    input: '217 33% 20%',
    ring: '142 90% 55%',
    
    // Header - True black
    headerBg: '0 0% 5%',
    headerText: '0 0% 100%',
    headerBorder: '0 0% 15%',
    
    // Footer - True black
    footerBg: '0 0% 5%',
    footerText: '0 0% 100%',
    footerBorder: '0 0% 15%',
    
    // Gradient - Neon
    gradientStart: '142 90% 55%',
    gradientEnd: '280 80% 60%',
    
    // Overlay
    overlay: '0 0% 0% / 0.8',
  },
  
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontFamilyHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSizeBase: '1rem',
    fontSizeSm: '0.875rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    fontSize2xl: '1.5rem',
    fontSize3xl: '2rem',
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    lineHeight: '1.5',
  },
  
  radius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.4)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)',
  },
  
  buttons: {
    default: {
      bg: '142 90% 55%',
      text: '142 90% 10%',
      border: '142 90% 45%',
      hover: '142 90% 65%',
    },
    outline: {
      bg: 'transparent',
      text: '210 40% 98%',
      border: '217 33% 30%',
      hover: '217 33% 20%',
    },
    ghost: {
      bg: 'transparent',
      text: '210 40% 98%',
      hover: '217 33% 20%',
    },
    destructive: {
      bg: '0 90% 60%',
      text: '0 0% 100%',
      hover: '0 90% 50%',
    },
  },
};
