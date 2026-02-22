"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useScrollVelocity } from "@/hooks/useScrollVelocity";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface VelocityBlurProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function VelocityBlur({
  children,
  className,
  intensity = 0.015,
}: VelocityBlurProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsPointerFine(window.matchMedia("(pointer: fine)").matches);
    }
  }, []);

  const smoothVelocity = useScrollVelocity();

  const blurPx = useTransform(smoothVelocity, (velocity: number) =>
    Math.min(Math.abs(velocity) * intensity, 3)
  );

  const filterString = useTransform(blurPx, (px: number) => `blur(${px}px)`);

  // Disable blur for reduced motion preference or non-pointer-fine devices (mobile)
  if (prefersReducedMotion || !isPointerFine) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} style={{ filter: filterString }}>
      {children}
    </motion.div>
  );
}
