"use client";

import { useEffect, useState } from "react";

import { useStore } from "@/store";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useStore();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;

    // Apply theme to DOM
    const applyTheme = () => {
      root.classList.remove("light", "dark");

      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
    };

    // Apply theme immediately
    applyTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        root.classList.remove("light", "dark");
        root.classList.add(mediaQuery.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, mounted]);

  // Apply initial theme class immediately to prevent flash
  useEffect(() => {
    if (mounted) {
      const root = window.document.documentElement;
      // Ensure we have at least a default theme
      if (
        !root.classList.contains("light") &&
        !root.classList.contains("dark")
      ) {
        root.classList.add("light"); // Default fallback
      }
    }
  }, [mounted]);

  // Always render children to avoid hydration mismatch
  // Theme application happens via useEffect after hydration
  return <>{children}</>;
}
