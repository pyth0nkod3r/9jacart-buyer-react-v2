/**
 * Theme Switcher Component
 * A demo component to switch between themes
 */

import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { getAllThemes, type ThemeName } from '../../themes';
import { Palette, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ThemeSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ 
  className,
  showLabel = true 
}) => {
  const { themeName, setTheme } = useTheme();
  const themes = getAllThemes();

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {showLabel && (
        <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
          <Palette className="w-4 h-4" />
          <span>Theme</span>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => setTheme(theme.name as ThemeName)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
              themeName === theme.name
                ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
            title={theme.description}
          >
            <span
              className="w-4 h-4 rounded-full border border-border"
              style={{
                background: `linear-gradient(135deg, hsl(${theme.colors.primary}), hsl(${theme.colors.gradientEnd || theme.colors.primaryHover}))`
              }}
            />
            <span>{theme.displayName}</span>
            {themeName === theme.name && (
              <Check className="w-3 h-3" />
            )}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-1">
        {themes.find(t => t.name === themeName)?.description}
      </p>
    </div>
  );
};

export default ThemeSwitcher;
