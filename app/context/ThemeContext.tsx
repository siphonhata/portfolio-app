"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Theme } from '../types';


interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isLoaded: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme: setNextTheme, resolvedTheme, systemTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true when component is mounted on client side
    setIsLoaded(true);
  }, []);

  const toggleTheme = () => {
    const currentTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setNextTheme(currentTheme);
  };

  // Ensure theme is treated as Theme type
  const safeTheme: Theme = (theme as Theme) || 'system';

  const value = {
    theme: safeTheme,
    setTheme: setNextTheme as (theme: Theme) => void,
    toggleTheme,
    isLoaded,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};