"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollParallaxProps {
  children: React.ReactNode;
  className?: string;
  /** Y-axis translation range in px, e.g. [0, -80] */
  yRange?: [number, number];
  /** Scale range, e.g. [1, 1.15] */
  scaleRange?: [number, number];
  /** Opacity range, e.g. [0.8, 0.4] */
  opacityRange?: [number, number];
}

export function ScrollParallax({
  children,
  className,
  yRange,
  scaleRange,
  opacityRange,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], yRange ?? [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange ?? [1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange ?? [1, 1]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y, scale, opacity }}>
      {children}
    </motion.div>
  );
}
