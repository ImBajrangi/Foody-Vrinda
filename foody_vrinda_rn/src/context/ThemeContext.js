import React, { createContext, useContext, useState, useEffect } from 'react';
import { COLORS } from '../constants/theme';
import { CacheService } from '../services/cacheService';

const defaultBase = COLORS.dark;
const defaultTheme = {
  ...defaultBase,
  bg: defaultBase.canvas,
  headerBg: defaultBase.surface,
  text: defaultBase.textPrimary,
  textMuted: defaultBase.textSecondary,
  accentText: defaultBase.accentDark || '#1E1B1C',
  ...COLORS.brand,
};

const ThemeContext = createContext({
  themeMode: 'dark',
  isDark: true,
  isLight: false,
  colors: defaultTheme,
  theme: defaultTheme,
  toggleTheme: () => {},
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useState('dark');

  useEffect(() => {
    const cached = CacheService.get(CacheService.KEYS.THEME);
    if (cached) setThemeMode(cached);
  }, []);

  const toggleTheme = () => {
    const next = themeMode === 'dark' ? 'light' : 'dark';
    setThemeMode(next);
    CacheService.set(CacheService.KEYS.THEME, next);
  };

  const setTheme = (mode) => {
    setThemeMode(mode);
    CacheService.set(CacheService.KEYS.THEME, mode);
  };

  const base = COLORS[themeMode] || COLORS.dark;
  const isDark = themeMode === 'dark';
  const resolvedTheme = {
    ...base,
    bg: base.canvas,
    headerBg: base.surface,
    text: base.textPrimary,
    textMuted: base.textSecondary,
    accentText: base.accentDark || (isDark ? '#1E1B1C' : '#FFFFFF'),
    ...COLORS.brand,
  };

  return (
    <ThemeContext.Provider value={{ themeMode, isDark, isLight: !isDark, colors: resolvedTheme, theme: resolvedTheme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext) || { theme: defaultTheme, colors: defaultTheme, isDark: true, isLight: false };
export default ThemeContext;
