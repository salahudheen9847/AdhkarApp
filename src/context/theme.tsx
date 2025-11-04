import React, { createContext, useContext, useState, ReactNode } from "react";

// 🎨 Theme color sets
const lightColors = {
  background: "#f9f9f9",
  text: "#1a1a1a",
  accent: "#22c55e",
  header: "#ffffff",
  border: "#ddd",
  shadow: "#ccc",
};

const darkColors = {
  background: "#000000",
  text: "#ffffff",
  accent: "#16d044",
  header: "#1a1a1a",
  border: "#333",
  shadow: "#000",
};

// 🧠 Context type
interface ThemeContextType {
  isDark: boolean;
  colors: typeof lightColors;
  toggleTheme: () => void;
}

// 🪄 Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 📦 Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(true); // default: dark mode

  const toggleTheme = () => setIsDark((prev) => !prev);

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 🧩 Hook for consuming theme
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
