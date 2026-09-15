"use client";

import { useEffect, useState } from "react";

const TEXT = "The next generation of legal work";

export function HeroHeadline({ className }: { className?: string }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"typing" | "idle" | "static">("typing");

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setCount(TEXT.length);
      setPhase("static");
      return;
    }

    const startDelay = 280;
    const duration = 2600;
    const weights = Array.from(TEXT, (char) => (char === " " ? 1.65 : 1));
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let raf = 0;
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) {
        start = now;
      }

      const elapsed = now - start - startDelay;
      if (elapsed < 0) {
        raf = window.requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(1, elapsed / duration);
      const target = progress * totalWeight;
      let consumed = 0;
      let nextCount = 0;
      for (const weight of weights) {
        consumed += weight;
        if (consumed <= target) {
          nextCount += 1;
        } else {
          break;
        }
      }

      setCount(Math.min(TEXT.length, nextCount));

      if (progress < 1) {
        raf = window.requestAnimationFrame(tick);
        return;
      }

      setCount(TEXT.length);
      setPhase("idle");
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <h1 className={`grid ${className}`} aria-label={TEXT}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {TEXT}
      </span>
      <span className="col-start-1 row-start-1" aria-hidden="true">
        {TEXT.slice(0, count)}
        {phase !== "static" ? (
          <span
            className={`hero-caret ${phase === "idle" ? "hero-caret-idle" : ""}`}
          />
        ) : null}
      </span>
    </h1>
  );
}
