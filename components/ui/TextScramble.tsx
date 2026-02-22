"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TextScrambleProps {
  text: string;
  className?: string;
  duration?: number;
  scrambleChars?: string;
}

export function TextScramble({
  text,
  className,
  duration = 800,
  scrambleChars = "!@#$%^&*()_+-=[]{}|;:,.<>?0123456789",
}: TextScrambleProps) {
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const elRef = useRef<HTMLSpanElement>(null);
  const hasTriggered = useRef(false);

  const scramble = useCallback(() => {
    const startTime = performance.now();
    let lastFrame = 0;

    function tick() {
      const now = performance.now();

      // Throttle to ~30ms frame interval
      if (now - lastFrame < 30) {
        requestAnimationFrame(tick);
        return;
      }
      lastFrame = now;

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const resolveIndex = Math.floor(progress * text.length);

      let result = "";
      for (let i = 0; i < text.length; i++) {
        if (i < resolveIndex) {
          result += text[i];
        } else if (text[i] === " ") {
          // Preserve spaces so layout doesn't jump
          result += " ";
        } else {
          result +=
            scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
      }

      setDisplayed(result);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayed(text);
      }
    }

    requestAnimationFrame(tick);
  }, [text, duration, scrambleChars]);

  useEffect(() => {
    // Reduced motion: show final text immediately
    if (prefersReducedMotion) {
      setDisplayed(text);
      return;
    }

    // Initialize with scrambled text so it doesn't flash real content
    setDisplayed(
      text
        .split("")
        .map((ch) =>
          ch === " "
            ? " "
            : scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
        )
        .join("")
    );

    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !hasTriggered.current) {
            hasTriggered.current = true;
            scramble();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [text, scrambleChars, scramble, prefersReducedMotion]);

  return (
    <span ref={elRef} className={className}>
      {displayed}
    </span>
  );
}
