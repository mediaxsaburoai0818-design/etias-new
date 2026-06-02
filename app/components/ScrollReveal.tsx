"use client";

import { useEffect } from "react";

/**
 * Adds `.is-visible` to elements as they scroll into view, driving the CSS
 * reveal transitions. Covers both the top page (`.reveal`) and subpage
 * article content (selector list below) so reveals work on every browser
 * including iOS Safari. Honors reduced-motion and degrades gracefully when
 * IntersectionObserver is unavailable.
 */
const SELECTOR = [
  ".reveal",
  ".svc-article > h2",
  ".svc-article > h3",
  ".svc-article > p",
  ".svc-article > ul",
  ".svc-article > ol",
  ".svc-article > table",
  ".svc-article > blockquote",
  ".svc-article > .svc-toc",
  ".svc-article > .info-box",
  ".svc-article > .warning-box",
  ".svc-article > .related-links",
  ".related-links",
].join(",");

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
