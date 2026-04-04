/**
 * Theme Provider Component
 * Provides theme context to the entire application
 */

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { Theme, ThemeName, ThemeContextType, AppConfig } from '../themes/types';
import { getTheme, DEFAULT_THEME } from '../themes';
import { 
  createDefaultConfig, 
  updateAppConfig, 
  isValidThemeName,
  THEME_STORAGE_KEY,
  CONFIG_STORAGE_KEY 
} from '../config';

// Create the context with undefined default
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider props
interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: ThemeName;
  config?: Partial<AppConfig>;
}

/**
 * Apply theme colors as CSS custom properties to the document root
 */
function applyThemeToDocument(theme: Theme): void {
  const root = document.documentElement;
  
  // Apply colors
  const colorMap: Record<string, string> = {
    '--primary': theme.colors.primary,
    '--primary-foreground': theme.colors.primaryForeground,
    '--primary-hover': theme.colors.primaryHover,
    '--secondary': theme.colors.secondary,
    '--secondary-foreground': theme.colors.secondaryForeground,
    '--accent': theme.colors.accent,
    '--accent-foreground': theme.colors.accentForeground,
    '--background': theme.colors.background,
    '--foreground': theme.colors.foreground,
    '--card': theme.colors.card,
    '--card-foreground': theme.colors.cardForeground,
    '--popover': theme.colors.popover,
    '--popover-foreground': theme.colors.popoverForeground,
    '--muted': theme.colors.muted,
    '--muted-foreground': theme.colors.mutedForeground,
    '--destructive': theme.colors.destructive,
    '--destructive-foreground': theme.colors.destructiveForeground,
    '--success': theme.colors.success,
    '--success-foreground': theme.colors.successForeground,
    '--warning': theme.colors.warning,
    '--warning-foreground': theme.colors.warningForeground,
    '--border': theme.colors.border,
    '--input': theme.colors.input,
    '--ring': theme.colors.ring,
    '--header-bg': theme.colors.headerBg,
    '--header-text': theme.colors.headerText,
    '--header-border': theme.colors.headerBorder,
    '--footer-bg': theme.colors.footerBg,
    '--footer-text': theme.colors.footerText,
    '--footer-border': theme.colors.footerBorder,
  };
  
  // Add gradient colors if available
  if (theme.colors.gradientStart) {
    colorMap['--gradient-start'] = theme.colors.gradientStart;
  }
  if (theme.colors.gradientEnd) {
    colorMap['--gradient-end'] = theme.colors.gradientEnd;
  }
  if (theme.colors.overlay) {
    colorMap['--overlay'] = theme.colors.overlay;
  }
  
  // Apply all color variables
  Object.entries(colorMap).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  
  // Apply border radius
  root.style.setProperty('--radius', theme.radius.lg);
  root.style.setProperty('--radius-sm', theme.radius.sm);
  root.style.setProperty('--radius-md', theme.radius.md);
  root.style.setProperty('--radius-lg', theme.radius.lg);
  
  // Apply font family if different
  if (theme.typography.fontFamily) {
    root.style.setProperty('--font-family', theme.typography.fontFamily);
  }
  if (theme.typography.fontFamilyHeading) {
    root.style.setProperty('--font-family-heading', theme.typography.fontFamilyHeading);
  }
  
  // Set theme name as data attribute for CSS targeting
  root.setAttribute('data-theme', theme.name);
  
  // Handle dark mode class for libraries that depend on it
  if (theme.name === 'dark' || theme.name === 'luxury') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

/**
 * Load saved theme from localStorage
 */
function loadSavedTheme(): ThemeName {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved && isValidThemeName(saved)) {
      return saved;
    }
  } catch {
    // localStorage not available
  }
  return DEFAULT_THEME;
}

/**
 * Load saved config from localStorage
 */
function loadSavedConfig(): AppConfig | null {
  try {
    const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return createDefaultConfig(parsed);
    }
  } catch {
    // localStorage not available or invalid JSON
  }
  return null;
}

/**
 * ThemeProvider Component
 * Wraps the application and provides theme context
 */
export function ThemeProvider({ 
  children, 
  theme: initialTheme,
  config: initialConfig 
}: ThemeProviderProps): React.ReactElement {
  // Initialize theme state
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    // Check URL parameter first (for testing/screenshot purposes)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTheme = params.get('theme');
      if (urlTheme && isValidThemeName(urlTheme)) {
        return urlTheme;
      }
    }
    // Priority: prop > localStorage > default
    if (initialTheme && isValidThemeName(initialTheme)) {
      return initialTheme;
    }
    return loadSavedTheme();
  });
  
  // Initialize config state
  const [config, setConfig] = useState<AppConfig>(() => {
    // Priority: prop > localStorage > default
    if (initialConfig) {
      return createDefaultConfig(initialConfig);
    }
    const saved = loadSavedConfig();
    return saved || createDefaultConfig();
  });
  
  // Get the current theme object
  const theme = getTheme(themeName);
  
  // Apply theme to document whenever it changes
  useEffect(() => {
    applyThemeToDocument(theme);
    
    // Save to localStorage
    try {
      localStorage.setItem(THEME_STORAGE_KEY, themeName);
    } catch {
      // localStorage not available
    }
  }, [theme, themeName]);
  
  // Save config when it changes
  useEffect(() => {
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
    } catch {
      // localStorage not available
    }
  }, [config]);
  
  // Set theme function
  const setTheme = useCallback((name: ThemeName) => {
    if (isValidThemeName(name)) {
      setThemeName(name);
    } else {
      console.warn(`Invalid theme name: ${name}. Using default.`);
      setThemeName(DEFAULT_THEME);
    }
  }, []);
  
  // Update config function
  const updateConfig = useCallback((updates: Partial<AppConfig>) => {
    setConfig(current => updateAppConfig(current, updates));
  }, []);
  
  // Context value
  const contextValue: ThemeContextType = {
    theme,
    themeName,
    setTheme,
    config,
    updateConfig,
  };
  
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * useTheme Hook
 * Access the theme context from any component
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}

/**
 * useThemeColors Hook
 * Get just the colors from the current theme
 */
export function useThemeColors() {
  const { theme } = useTheme();
  return theme.colors;
}

/**
 * useFeature Hook
 * Check if a specific feature is enabled
 */
export function useFeature(feature: keyof AppConfig['features']): boolean {
  const { config } = useTheme();
  return config.features[feature] === true;
}

/**
 * useBranding Hook
 * Get the branding configuration
 */
export function useBranding() {
  const { config } = useTheme();
  return config.branding;
}

// Export context for advanced usage
export { ThemeContext };
