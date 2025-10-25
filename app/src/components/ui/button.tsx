"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  floating?: boolean;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkButton(props: ButtonProps): props is ButtonAsLink {
  return typeof (props as ButtonAsLink).href === "string";
}

const baseVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#7F5CFF] to-[#3B82F6] text-white shadow-[0_14px_40px_-10px_rgba(63,99,224,0.68)]",
  secondary:
    "bg-white/10 text-white border border-white/15 backdrop-blur supports-[backdrop-filter]:backdrop-blur",
  ghost: "bg-transparent text-[var(--foreground)] border border-[var(--border)]",
};

const sizeVariants: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

export function Button(props: ButtonProps) {
  if (isLinkButton(props)) {
    const {
      variant = "primary",
      size = "md",
      floating = false,
      className,
      children,
      href,
      ...rest
    } = props;
    const sharedClassName = cn(
      "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300",
      baseVariants[variant],
      sizeVariants[size],
      floating && "ring-1 ring-inset ring-white/35",
      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F5CFF]",
      className,
    );
    const content = (
      <>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span className="absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white/10" />
      </>
    );
    return (
      <motion.div
        whileHover={{ y: floating ? -4 : 0, scale: floating ? 1.01 : 1 }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex"
      >
        <Link href={href} className={sharedClassName} {...rest}>
          {content}
        </Link>
      </motion.div>
    );
  }

  const {
    variant = "primary",
    size = "md",
    floating = false,
    className,
    children,
    type,
    ...rest
  } = props;
  const sharedClassName = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold tracking-tight transition-all duration-300",
    baseVariants[variant],
    sizeVariants[size],
    floating && "ring-1 ring-inset ring-white/35",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7F5CFF]",
    className,
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 bg-white/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white/10" />
    </>
  );

  return (
    <motion.div
      whileHover={{ y: floating ? -4 : 0, scale: floating ? 1.01 : 1 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex"
    >
      <button
        {...rest}
        className={sharedClassName}
        type={type ?? "button"}
      >
        {content}
      </button>
    </motion.div>
  );
}
