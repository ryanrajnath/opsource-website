"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Scroll-spy hook using IntersectionObserver.
 * Returns the ID of the section currently in the "active zone"
 * (upper-middle of viewport, accounting for sticky nav).
 */
export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const intersecting = useRef<Map<string, IntersectionObserverEntry>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.current.set(entry.target.id, entry);
          } else {
            intersecting.current.delete(entry.target.id);
          }
        }

        // Pick the topmost visible section
        if (intersecting.current.size > 0) {
          let topmost: string | null = null;
          let topY = Infinity;
          for (const [id, entry] of intersecting.current) {
            const top = entry.boundingClientRect.top;
            if (top < topY) {
              topY = top;
              topmost = id;
            }
          }
          setActiveId(topmost);
        }
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

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
