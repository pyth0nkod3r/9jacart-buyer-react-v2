/**
 * Default Theme - BuyerHub Green Theme
 * The original BuyerHub color scheme with vibrant green accents
 */

import type { Theme } from './types';

export const defaultTheme: Theme = {
  name: 'default',
  displayName: 'BuyerHub Green',
  description: 'The original BuyerHub color scheme with vibrant green accents',
  
  colors: {
    // Primary - Vibrant Green (#8DEB6E)
    primary: '142 76% 68%',
    primaryForeground: '142 60% 10%',
    primaryHover: '142 76% 58%',
    
    // Secondary - Light gray
    secondary: '210 40% 96%',
    secondaryForeground: '222 47% 11%',
    
    // Accent - Matching green tint
    accent: '142 60% 90%',
    accentForeground: '142 60% 15%',
    
    // Background - White
    background: '0 0% 100%',
    foreground: '222 84% 5%',
    
    // Card - White
    card: '0 0% 100%',
    cardForeground: '222 84% 5%',
    
    // Popover - White
    popover: '0 0% 100%',
    popoverForeground: '222 84% 5%',
    
    // Muted - Light gray
    muted: '210 40% 96%',
    mutedForeground: '215 16% 47%',
    
    // Destructive - Red
    destructive: '0 84% 60%',
    destructiveForeground: '0 0% 100%',
    
    // Success - Green
    success: '142 76% 50%',
    successForeground: '0 0% 100%',
    
    // Warning - Orange/Yellow
    warning: '38 92% 50%',
    warningForeground: '0 0% 100%',
    
    // Border - Light gray
    border: '214 32% 91%',
    input: '214 32% 91%',
    ring: '142 76% 68%',
    
    // Header - Dark teal/navy (#182F38)
    headerBg: '200 40% 16%',
    headerText: '0 0% 100%',
    headerBorder: '200 40% 25%',
    
    // Footer - Dark teal/navy (#182F38)
    footerBg: '200 40% 16%',
    footerText: '0 0% 100%',
    footerBorder: '200 40% 25%',
    
    // Gradient
    gradientStart: '142 76% 68%',
    gradientEnd: '142 76% 45%',
    
    // Overlay
    overlay: '0 0% 0% / 0.5',
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
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  
  buttons: {
    default: {
      bg: '142 76% 68%',
      text: '142 76% 98%',
      border: '120 60% 45%',
      hover: '142 76% 58%',
    },
    outline: {
      bg: 'transparent',
      text: '222 84% 5%',
      border: '214 32% 91%',
      hover: '210 40% 96%',
    },
    ghost: {
      bg: 'transparent',
      text: '222 84% 5%',
      hover: '210 40% 96%',
    },
    destructive: {
      bg: '0 84% 60%',
      text: '0 0% 100%',
      hover: '0 84% 50%',
    },
  },
};
