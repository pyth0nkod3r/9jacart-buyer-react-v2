/**
 * Vibrant Theme - Colorful and playful
 * Perfect for younger audiences and fun, energetic brands
 */

import type { Theme } from './types';

export const vibrantTheme: Theme = {
  name: 'vibrant',
  displayName: 'Vibrant Fun',
  description: 'Colorful and playful design for younger audiences',
  
  colors: {
    // Primary - Bright Purple/Magenta
    primary: '290 85% 60%',
    primaryForeground: '0 0% 100%',
    primaryHover: '290 85% 65%',
    
    // Secondary - Bright cyan
    secondary: '185 80% 50%',
    secondaryForeground: '0 0% 100%',
    
    // Accent - Bright orange
    accent: '25 95% 60%',
    accentForeground: '0 0% 100%',
    
    // Background - Very light purple tint
    background: '280 30% 98%',
    foreground: '280 40% 15%',
    
    // Card - White
    card: '0 0% 100%',
    cardForeground: '280 40% 15%',
    
    // Popover - White
    popover: '0 0% 100%',
    popoverForeground: '280 40% 15%',
    
    // Muted - Light purple
    muted: '280 40% 95%',
    mutedForeground: '280 30% 35%',
    
    // Destructive - Bright red
    destructive: '350 85% 60%',
    destructiveForeground: '0 0% 100%',
    
    // Success - Bright green
    success: '150 70% 45%',
    successForeground: '0 0% 100%',
    
    // Warning - Bright yellow
    warning: '45 95% 55%',
    warningForeground: '45 95% 15%',
    
    // Border - Light purple
    border: '280 30% 90%',
    input: '280 30% 90%',
    ring: '290 85% 60%',
    
    // Header - Purple gradient
    headerBg: '290 70% 45%',
    headerText: '0 0% 100%',
    headerBorder: '290 60% 55%',
    
    // Footer - Dark purple
    footerBg: '280 50% 20%',
    footerText: '280 20% 95%',
    footerBorder: '280 50% 30%',
    
    // Gradient - Rainbow-like
    gradientStart: '290 85% 60%',
    gradientEnd: '185 80% 50%',
    
    // Overlay
    overlay: '280 50% 10% / 0.5',
  },
  
  typography: {
    fontFamily: "'Nunito', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontFamilyHeading: "'Nunito', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSizeBase: '1rem',
    fontSizeSm: '0.875rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    fontSize2xl: '1.5rem',
    fontSize3xl: '2rem',
    fontWeightNormal: 400,
    fontWeightMedium: 600,
    fontWeightSemibold: 700,
    fontWeightBold: 800,
    lineHeight: '1.5',
  },
  
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.08)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
  
  buttons: {
    default: {
      bg: '290 85% 60%',
      text: '0 0% 100%',
      border: '290 75% 50%',
      hover: '290 85% 65%',
    },
    outline: {
      bg: 'transparent',
      text: '290 85% 60%',
      border: '290 50% 80%',
      hover: '280 40% 95%',
    },
    ghost: {
      bg: 'transparent',
      text: '290 70% 40%',
      hover: '280 40% 95%',
    },
    destructive: {
      bg: '350 85% 60%',
      text: '0 0% 100%',
      hover: '350 85% 55%',
    },
  },
};
