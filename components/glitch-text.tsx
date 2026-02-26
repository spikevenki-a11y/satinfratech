"use client";

import { useEffect, useState } from "react";

export function GlitchText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {glitch && (
        <>
          <span
            className="absolute top-0 left-0 z-20 text-cyan-400"
            style={{
              clipPath: "inset(10% 0 60% 0)",
              transform: "translate(-3px, -1px)",
            }}
            aria-hidden="true"
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 z-20 text-red-400"
            style={{
              clipPath: "inset(50% 0 10% 0)",
              transform: "translate(3px, 1px)",
            }}
            aria-hidden="true"
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}
