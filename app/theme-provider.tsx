// app/theme-provider.tsx
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ThemeContextValue = {
  dark: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);

  // default based on time: dark from 6pm–7am
  useEffect(() => {
    const hour = new Date().getHours();
    const defaultDark = hour >= 18 || hour < 7;
    setDark(defaultDark);
  }, []);

  // restore preference if saved
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme-dark");
      if (stored !== null) {
        setDark(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  // apply to <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");

    try {
      localStorage.setItem("theme-dark", JSON.stringify(dark));
    } catch {
      // ignore
    }
  }, [dark]);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle: () => setDark((v) => !v),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}
