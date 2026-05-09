"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // থিম টগল করার ফাংশন
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full h-10 w-10 transition-all duration-300 hover:bg-orange-100 dark:hover:bg-slate-800"
      onClick={toggleTheme}
    >
      {/* সূর্য আইকন - লাইট মোডে দেখাবে, ক্লিক করলে ডার্ক হবে */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-orange-600" />
      
      {/* চাঁদ আইকন - ডার্ক মোডে দেখাবে, ক্লিক করলে লাইট হবে */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-orange-400" />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}