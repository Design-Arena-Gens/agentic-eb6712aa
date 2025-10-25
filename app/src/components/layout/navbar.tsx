"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const easing = [0.16, 1, 0.3, 1] as const;

const navMotion = {
  initial: { opacity: 0, y: -16 },
  animate: { opacity: 1, y: 0 },
};

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const active = useMemo(() => {
    const item = mainNav.find((entry) => entry.href === pathname);
    return item?.name ?? "Home";
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center px-4 pt-6">
      <motion.nav
        {...navMotion}
        transition={{ duration: 0.6, ease: easing }}
        className="relative flex w-full max-w-[1240px] items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-500 dark:border-white/15 dark:bg-white/5 lg:px-8"
      >
        <Link
          href="/"
          className="group relative flex items-center space-x-3 text-lg font-semibold tracking-tight"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7F5CFF] to-[#00C7FF] text-white shadow-[0_18px_40px_-20px_rgba(71,126,255,0.85)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_25px_50px_-20px_rgba(71,126,255,0.9)]">
            <span className="text-xl">λ</span>
          </span>
          <span className="flex flex-col leading-none">
            <span>Nexari Labs</span>
            <span className="text-xs font-normal uppercase tracking-[0.24em] text-white/60">
              AI Systems
            </span>
          </span>
        </Link>

        <div className="hidden items-center space-x-8 lg:flex">
          {mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white",
                  isActive && "text-white",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute -inset-x-4 -inset-y-2 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center space-x-4 lg:flex">
          <ThemeToggle />
          <Button href="/contact" floating>
            Book Consultation
          </Button>
        </div>

        <div className="flex items-center space-x-2 lg:hidden">
          <ThemeToggle />
          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => setOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur"
          >
            <span className="sr-only">Toggle navigation</span>
            <motion.span
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 2 : 0,
              }}
              className="absolute h-[2px] w-6 rounded-full bg-white"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute h-[2px] w-4 rounded-full bg-white"
            />
            <motion.span
              animate={{
                rotate: open ? -45 : 0,
                y: open ? -2 : 0,
              }}
              className="absolute h-[2px] w-6 rounded-full bg-white"
            />
          </motion.button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="absolute left-0 right-0 top-[calc(100%+16px)] origin-top overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#101321]/95 to-[#0C0F1A]/98 p-6 backdrop-blur-lg lg:hidden"
            >
              <div className="space-y-3">
                {mainNav.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-base font-medium transition-all duration-300",
                        isActive
                          ? "border-white/15 bg-white/8 text-white"
                          : "text-white/70 hover:border-white/10 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      <span>{item.name}</span>
                      {active === item.name && (
                        <motion.span
                          layoutId="mobile-active"
                          className="text-xs uppercase tracking-[0.4em] text-white/50"
                        >
                          Active
                        </motion.span>
                      )}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6">
                <Button
                  className="w-full"
                  floating
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
