"use client";

import { useScroll, useVelocity, useSpring } from "framer-motion";

export function useScrollVelocity() {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 300,
    damping: 30,
  });

  return smoothVelocity;
}
