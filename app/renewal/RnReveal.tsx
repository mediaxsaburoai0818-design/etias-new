"use client";

import { useEffect } from "react";

/**
 * Scoped scroll-reveal for the renewal sample.
 * Adds `.js` to the root and toggles `.is-visible` on `.rn-reveal` / `.rn-stagger`
 * via IntersectionObserver (works on iOS Safari, unlike animation-timeline).
 */
export default function RnReveal() {
  useEffect(() => {
    const root = document.querySelector(".rn-root");
    if (!root) return;
    root.classList.add("js");

    const targets = root.querySelectorAll(".rn-reveal, .rn-stagger");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 12% 0px" }
    );
    targets.forEach((t) => io.observe(t));

    // Safety net: never leave content hidden (fast scroll / no-fire / print).
    const fallback = window.setTimeout(() => {
      targets.forEach((t) => t.classList.add("is-visible"));
    }, 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return null;
}
