"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return (
      <span
        className={cn(
          "block h-10 w-10 rounded-full border border-white/10 bg-white/5",
          className,
        )}
      />
    );
  }

  const isDark = (theme ?? resolvedTheme) !== "light";

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-white/12 to-white/4 backdrop-blur-sm transition-all duration-500",
        "dark:from-white/10 dark:to-white/5 dark:border-white/20",
        className,
      )}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="relative h-5 w-5"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7F5CFF] to-[#00C7FF] opacity-80 blur-[1px]" />
        <motion.span
          animate={{ opacity: isDark ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center text-sm text-white"
        >
          ✦
        </motion.span>
        <motion.span
          animate={{ opacity: isDark ? 0 : 1 }}
          className="absolute inset-0 flex items-center justify-center text-lg text-[#0B1120]"
        >
          ☀
        </motion.span>
      </motion.div>
    </motion.button>
  );
}
