
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isBlackWhite: boolean;
  toggleBlackWhite: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isBlackWhite, setIsBlackWhite] = useState(() => {
    const saved = localStorage.getItem('blackWhiteTheme');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('blackWhiteTheme', JSON.stringify(isBlackWhite));
    
    if (isBlackWhite) {
      document.documentElement.classList.add('black-white-theme');
    } else {
      document.documentElement.classList.remove('black-white-theme');
    }
  }, [isBlackWhite]);

  const toggleBlackWhite = () => {
    setIsBlackWhite(!isBlackWhite);
  };

  return (
    <ThemeContext.Provider value={{ isBlackWhite, toggleBlackWhite }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
