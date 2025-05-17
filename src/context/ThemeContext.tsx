import { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Initialize dark mode in localStorage if not set
if (typeof window !== 'undefined') {
  const storedPreference = localStorage.getItem('darkMode');
  if (storedPreference === null) {
    localStorage.setItem('darkMode', 'true');
    document.documentElement.classList.add('dark');
  } else if (storedPreference === 'true') {
    document.documentElement.classList.add('dark');
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initialize with dark mode
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      return stored === null ? true : stored === 'true';
    }
    return true;
  });

  useEffect(() => {
    // Apply dark mode class
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Store preference
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 