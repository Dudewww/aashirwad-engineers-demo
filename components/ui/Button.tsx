"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { transitionTap } from "@/lib/motion-presets";

const MotionLink = motion(Link);

type Variant = "primary" | "secondary" | "ghost";

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
}) {
  const reduce = useReducedMotion();

  const base =
    "inline-flex items-center justify-center gap-2 text-sm font-semibold leading-none normal-case tracking-normal transition-colors duration-200 ease-industrial focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red focus-visible:outline-offset-[3px] cursor-pointer";

  const styles: Record<Variant, string> = {
    primary:
      "min-h-[44px] rounded-ae-md bg-brand-red px-5 py-3 text-white hover:bg-brand-redHover sm:min-h-[48px] sm:px-7 sm:py-3.5",
    secondary:
      "min-h-[44px] rounded-ae-md border border-steel-200 bg-white px-5 py-3 text-navy-900 hover:border-brand-red hover:text-brand-red sm:min-h-[48px] sm:px-[27px] sm:py-[13px]",
    ghost:
      "px-0 py-1.5 font-semibold text-navy-900 hover:text-brand-red sm:py-2",
  };

  const tapMotion = reduce ? undefined : { scale: 0.99 };

  return (
    <MotionLink
      href={href}
      className={`${base} ${styles[variant]} ${className}`}
      whileTap={tapMotion}
      transition={transitionTap}
    >
      {children}
      {icon}
    </MotionLink>
  );
}
