"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/**
 * Scroll-spy hook using IntersectionObserver.
 * Returns the ID of the section currently in the "active zone"
 * (upper-middle of viewport, accounting for sticky nav).
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const visibleIds = useRef<Set<string>>(new Set());

  const pickActive = useCallback(() => {
    // The "active zone" starts just below the navbar (~112px from viewport top).
    // Pick the visible section whose top is closest to that anchor point.
    const anchor = 112;
    let best: string | null = null;
    let bestDist = Infinity;
    for (const id of visibleIds.current) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      const dist = Math.abs(top - anchor);
      if (dist < bestDist) {
        bestDist = dist;
        best = id;
      }
    }
    if (best) {
      setActiveId(best);
    }
    // If nothing is visible, keep the last active section
    // so the pill doesn't disappear in gaps
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.current.add(entry.target.id);
          } else {
            visibleIds.current.delete(entry.target.id);
          }
        }
        pickActive();
      },
      {
        rootMargin: "-112px 0px -40% 0px",
        threshold: [0, 0.1, 0.3],
      }
    );

    const elements: Element[] = [];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    // Also update on scroll so the pill tracks correctly
    // when coasting between observer thresholds
    const onScroll = () => {
      if (visibleIds.current.size > 0) {
        pickActive();
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds, pickActive]);

  return activeId;
}
