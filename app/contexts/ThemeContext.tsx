import React, { useState, createContext, ReactNode,useContext,useEffect } from "react";

interface ThemeProviderProps{
  children:ReactNode;
}

// Create context object
export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => { },
});

export const ThemeProvider = ({ children }:ThemeProviderProps) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export function useTheme() {
  return useContext(ThemeContext);
}
