"use client";

import { useEffect, useState, useRef } from "react";
import { ScrollReveal } from "./scroll-reveal";
import { HoloCard } from "./holo-card";
import { Clock, Shield, Rocket, Headphones } from "lucide-react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Operations", icon: Clock, hex: "#00dcdc" },
  { value: 99.9, suffix: "%", label: "System Uptime", icon: Shield, hex: "#00dcdc" },
  { value: 500, suffix: "+", label: "Deployments", icon: Rocket, hex: "#00dcdc" },
  { value: 24, suffix: "/7", label: "Active Monitoring", icon: Headphones, hex: "#00dcdc" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref} className="tabular-nums font-mono">
      {value === 99.9 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Horizontal line accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <HoloCard>
                <div className="relative p-6 lg:p-8 rounded-2xl bg-card/60 border border-primary/10 backdrop-blur-sm overflow-hidden group hover:border-primary/30 transition-all duration-500">
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/30" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/30" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/30" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/30" />

                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    <stat.icon className="h-5 w-5 text-primary/50 mb-4" />
                    <p className="text-4xl lg:text-5xl font-bold text-primary">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                    {/* Progress bar decoration */}
                    <div className="mt-4 h-0.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </HoloCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
