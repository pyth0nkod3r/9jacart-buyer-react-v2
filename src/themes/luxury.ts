/**
 * Luxury Theme - Gold and black premium feel
 * Perfect for high-end stores and premium brands
 */

import type { Theme } from './types';

export const luxuryTheme: Theme = {
  name: 'luxury',
  displayName: 'Luxury Gold',
  description: 'Gold and black premium aesthetic for high-end stores',
  
  colors: {
    // Primary - Rich Gold
    primary: '45 90% 50%',
    primaryForeground: '45 90% 8%',
    primaryHover: '45 90% 58%',
    
    // Secondary - Dark charcoal
    secondary: '30 10% 20%',
    secondaryForeground: '45 20% 90%',
    
    // Accent - Champagne gold
    accent: '45 60% 75%',
    accentForeground: '45 30% 15%',
    
    // Background - Deep black
    background: '0 0% 8%',
    foreground: '45 20% 95%',
    
    // Card - Rich black
    card: '0 0% 12%',
    cardForeground: '45 20% 95%',
    
    // Popover - Rich black
    popover: '0 0% 12%',
    popoverForeground: '45 20% 95%',
    
    // Muted - Dark charcoal
    muted: '30 10% 18%',
    mutedForeground: '45 15% 60%',
    
    // Destructive - Rich red
    destructive: '0 70% 50%',
    destructiveForeground: '0 0% 100%',
    
    // Success - Emerald
    success: '150 60% 40%',
    successForeground: '0 0% 100%',
    
    // Warning - Amber
    warning: '40 90% 50%',
    warningForeground: '40 90% 10%',
    
    // Border - Gold-tinted dark
    border: '45 30% 25%',
    input: '45 30% 25%',
    ring: '45 90% 50%',
    
    // Header - True black with gold accents
    headerBg: '0 0% 5%',
    headerText: '45 90% 85%',
    headerBorder: '45 70% 30%',
    
    // Footer - True black with gold accents
    footerBg: '0 0% 5%',
    footerText: '45 90% 85%',
    footerBorder: '45 70% 30%',
    
    // Gradient - Gold to champagne
    gradientStart: '45 90% 50%',
    gradientEnd: '45 60% 75%',
    
    // Overlay
    overlay: '0 0% 0% / 0.75',
  },
  
  typography: {
    fontFamily: "'Playfair Display', 'Georgia', serif",
    fontFamilyHeading: "'Playfair Display', 'Georgia', serif",
    fontSizeBase: '1rem',
    fontSizeSm: '0.875rem',
    fontSizeLg: '1.125rem',
    fontSizeXl: '1.25rem',
    fontSize2xl: '1.5rem',
    fontSize3xl: '2.25rem',
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    lineHeight: '1.6',
  },
  
  radius: {
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.6)',
    md: '0 4px 8px -2px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
    lg: '0 12px 24px -6px rgb(0 0 0 / 0.5), 0 4px 8px -4px rgb(0 0 0 / 0.3)',
    xl: '0 24px 48px -12px rgb(0 0 0 / 0.5), 0 12px 24px -8px rgb(0 0 0 / 0.3)',
  },
  
  buttons: {
    default: {
      bg: '45 90% 50%',
      text: '45 90% 8%',
      border: '45 80% 40%',
      hover: '45 90% 58%',
    },
    outline: {
      bg: 'transparent',
      text: '45 90% 85%',
      border: '45 70% 40%',
      hover: '45 30% 15%',
    },
    ghost: {
      bg: 'transparent',
      text: '45 90% 85%',
      hover: '45 30% 15%',
    },
    destructive: {
      bg: '0 70% 50%',
      text: '0 0% 100%',
      hover: '0 70% 45%',
    },
  },
};
