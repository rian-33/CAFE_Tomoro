import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  target: number;
  start: boolean;
  duration?: number;
  decimals?: number;
}

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

export function useCountUp({
  target,
  start,
  duration = 1600,
  decimals = 0,
}: UseCountUpOptions): string {
  const [value, setValue] = useState(start ? target : 0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) {
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const frameDuration = prefersReduced ? 0 : duration;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / frameDuration, 1);
      setValue(target * easeOutCubic(progress));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, start, duration]);

  return value.toFixed(decimals);
}