"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";
import { transitionReveal } from "@/lib/motion-presets";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      transition={{
        ...transitionReveal,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
