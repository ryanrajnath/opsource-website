"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface ScrollLinkedCounterProps {
  target: number;
  suffix?: string;
  className?: string;
}

export function ScrollLinkedCounter({ target, suffix = "", className }: ScrollLinkedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const count = useTransform(scrollYProgress, [0, 1], [0, target]);

  useMotionValueEvent(count, "change", (latest) => {
    if (!prefersReducedMotion) {
      setDisplay(Math.round(latest));
    }
  });

  if (prefersReducedMotion) {
    return (
      <span className={className}>
        {target.toLocaleString()}{suffix}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}{suffix}
    </span>
  );
}
