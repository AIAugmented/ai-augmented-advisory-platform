import { Moon, Sun } from "lucide-react";

import { useStore } from "@/store";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useStore();

  return (
    <Button
      variant="ghost"
      size="icon-lg"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="!h-5 !w-5 transform transition-all duration-500 ease-in-out" />
      ) : (
        <Moon className="!h-5 !w-5 transform transition-all duration-500 ease-in-out" />
      )}
    </Button>
  );
}
