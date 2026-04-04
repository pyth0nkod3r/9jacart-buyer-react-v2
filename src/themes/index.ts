/**
 * Theme Exports
 * Central export for all theme definitions
 */

export type { Theme, ThemeColors, ThemeName, ThemeContextType, AppConfig, BrandingConfig, FeatureConfig, LayoutConfig } from './types';
export { defaultTheme } from './default';
export { darkTheme } from './dark';
export { luxuryTheme } from './luxury';
export { minimalTheme } from './minimal';
export { vibrantTheme } from './vibrant';

import { defaultTheme } from './default';
import { darkTheme } from './dark';
import { luxuryTheme } from './luxury';
import { minimalTheme } from './minimal';
import { vibrantTheme } from './vibrant';
import type { Theme, ThemeName } from './types';

// Theme registry
export const themes: Record<ThemeName, Theme> = {
  default: defaultTheme,
  dark: darkTheme,
  luxury: luxuryTheme,
  minimal: minimalTheme,
  vibrant: vibrantTheme,
};

// Get theme by name
export function getTheme(name: ThemeName): Theme {
  return themes[name] || defaultTheme;
}

// Get all available themes
export function getAllThemes(): Theme[] {
  return Object.values(themes);
}

// Default theme name
export const DEFAULT_THEME: ThemeName = 'default';
