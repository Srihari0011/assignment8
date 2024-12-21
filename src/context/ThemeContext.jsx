import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div style={{ background: isDark ? '#333' : '#fff', color: isDark ? '#fff' : '#000' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
