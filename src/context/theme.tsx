import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

/* =====================================================
   🎨 THEME COLOR SETS
===================================================== */

const lightColors = {
  background: "#f9f9f9",
  text: "#000000",            // ✅ black text (light theme)
  accent: "#2563eb",
  header: "#ffffff",
  border: "#e5e7eb",
  shadow: "#ccc",

  // 🔵 SOLID BLUE HIGHLIGHT (NO BLUR)
  highlightBox: "#2563eb",    // blue-600
  highlightText: "#ffffff",  // white text on highlight
};

const darkColors = {
  background: "#000000",
  text: "#ffffff",            // ✅ white text (dark theme)
  accent: "#2563eb",
  header: "#1a1a1a",
  border: "#333",
  shadow: "#000",

  // 🔵 SOLID BLUE HIGHLIGHT (DARK MODE)
  highlightBox: "#1d4ed8",    // blue-700
  highlightText: "#ffffff",
};

/* =====================================================
   🧠 CONTEXT TYPE
===================================================== */

interface ThemeContextType {
  isDark: boolean;
  colors: typeof lightColors;
  toggleTheme: () => void;
}

/* =====================================================
   🪄 CREATE CONTEXT
===================================================== */

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

/* =====================================================
   📦 PROVIDER
===================================================== */

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isDark, setIsDark] = useState(true); // default: dark mode

  const toggleTheme = () => setIsDark(prev => !prev);

  const colors = isDark ? darkColors : lightColors;

  return (
    <ThemeContext.Provider
      value={{ isDark, colors, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

/* =====================================================
   🧩 THEME HOOK
===================================================== */

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeProvider"
    );
  }
  return context;
};
