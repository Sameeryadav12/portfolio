import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { themes, Theme, defaultTheme } from './themes';

type ThemeName = keyof typeof themes;
type ThemeContextType = {
  currentThemeName: ThemeName;
  setTheme: (name: ThemeName) => void;
  currentTheme: Theme;
  themeNames: ThemeName[];
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): ThemeName => {
  const saved = localStorage.getItem('themeName');
  if (saved && themes[saved as ThemeName]) {
    return saved as ThemeName;
  }
  // Fallback to system preference or default
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'ocean-professional' : 'ocean-professional'; // Default to ocean-professional for both
};

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentThemeName, setCurrentThemeName] = useState<ThemeName>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const theme = themes[currentThemeName];

    // Apply CSS variables
    for (const [key, value] of Object.entries(theme)) {
      if (key !== 'name') { // 'name' is not a CSS variable
        root.style.setProperty(`--theme-${key}`, value);
      }
    }
    localStorage.setItem('themeName', currentThemeName);
  }, [currentThemeName]);

  const value = useMemo<ThemeContextType>(() => ({
    currentThemeName,
    setTheme: setCurrentThemeName,
    currentTheme: themes[currentThemeName],
    themeNames: Object.keys(themes) as ThemeName[],
  }), [currentThemeName]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};