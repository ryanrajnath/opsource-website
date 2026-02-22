"use client";

import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface MagneticTiltProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
}

export function MagneticTilt({
  children,
  className,
  intensity = 10,
  perspective = 800,
}: MagneticTiltProps) {
  const prefersReducedMotion = useReducedMotion();
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches) {
      setHasFinePointer(true);
    }
  }, []);

  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 };
  const rotateX = useSpring(rotateXRaw, springConfig);
  const rotateY = useSpring(rotateYRaw, springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Offset from center normalized to -1..1
      const offsetX = (e.clientX - centerX) / (rect.width / 2);
      const offsetY = (e.clientY - centerY) / (rect.height / 2);

      // rotateX driven by vertical offset (inverted so top tilts toward viewer)
      rotateXRaw.set(-offsetY * intensity);
      // rotateY driven by horizontal offset
      rotateYRaw.set(offsetX * intensity);
    },
    [intensity, rotateXRaw, rotateYRaw],
  );

  const handleMouseLeave = useCallback(() => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  }, [rotateXRaw, rotateYRaw]);

  // Fallback: plain div for touch devices, SSR, or reduced-motion preference
  if (prefersReducedMotion || !hasFinePointer) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      style={{
        perspective,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}
