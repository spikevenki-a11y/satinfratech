"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Cloud Infrastructure",
  "Cybersecurity",
  "Digital Transformation",
  "AI Solutions",
  "DevOps Automation",
];

export function TypingText({ className = "" }: { className?: string }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentPhrase.length) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <span className={className}>
      {phrases[phraseIndex].substring(0, charIndex)}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}
