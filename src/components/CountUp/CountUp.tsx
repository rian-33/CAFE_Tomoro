import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

interface CountUpProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export default function CountUp({
  value,
  suffix = "",
  decimals = 0,
  duration = 1600,
  className,
}: CountUpProps) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ref = useRef<HTMLSpanElement | null>(null);
  const [start, setStart] = useState(prefersReduced);
  const text = useCountUp({ target: value, start, duration, decimals });

  useEffect(() => {
    if (prefersReduced) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStart(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReduced]);

  return (
    <span ref={ref} className={className}>
      {text}
      {suffix}
    </span>
  );
}