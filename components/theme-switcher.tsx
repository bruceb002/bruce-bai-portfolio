"use client";

import { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return <ThemeSwitcherInner />;
};

function ThemeSwitcherInner() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        isIconOnly
        aria-label="Toggle theme"
        className="text-foreground"
        variant="light"
        onPress={() => setTheme(isDark ? "light" : "dark")}
      >
        <Icon
          className="w-5 h-5"
          icon={isDark ? "lucide:sun" : "lucide:moon"}
        />
      </Button>
    </motion.div>
  );
}