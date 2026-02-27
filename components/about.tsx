"use client";

import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  ArrowRight,
  Activity,
} from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { useEffect, useState, useRef } from "react";

const features = [
  { icon: CheckCircle2, text: "Zero-trust security architecture" },
  { icon: Zap, text: "Sub-second deployment pipelines" },
  { icon: Users, text: "Dedicated engineering squads" },
  { icon: TrendingUp, text: "99.9% SLA-backed performance" },
];

const metrics = [
  { label: "Retention Rate", value: "98%" },
  { label: "Response Time", value: "<2h" },
  { label: "Global Regions", value: "25+" },
];

function PulseGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 280;
    canvas.height = 60;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 220, 220, 0.5)";
      ctx.lineWidth = 1.5;

      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin((x + offset) * 0.05) * 15 +
          Math.sin((x + offset) * 0.02) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Glow line
      ctx.beginPath();
      ctx.strokeStyle = "rgba(0, 220, 220, 0.15)";
      ctx.lineWidth = 6;
      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin((x + offset) * 0.05) * 15 +
          Math.sin((x + offset) * 0.02) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      offset += 1;
      requestAnimationFrame(draw);
    };
    draw();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-[60px]" />;
}

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8 backdrop-blur-sm">
              <Activity className="h-3 w-3 text-primary" />
              <span className="text-xs font-mono font-semibold text-primary uppercase tracking-[0.2em]">
                About // Core
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance leading-tight font-mono">
              Architects of{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                Digital Infrastructure
              </span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded on the principle that technology should amplify human
              potential, Satinfratech engineers enterprise-grade systems that
              power the next generation of digital businesses.
            </p>

            <ul className="mt-10 space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 group p-3 -mx-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(0,220,220,0.1)] transition-all">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium font-mono text-sm">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="relative bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,220,220,0.2)] h-12 px-6 font-mono uppercase tracking-wider text-xs overflow-hidden group">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Core
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 h-12 px-6 font-mono uppercase tracking-wider text-xs bg-transparent"
              >
                View Team
              </Button>
            </div>
          </ScrollReveal>

          {/* Visual element */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-2xl overflow-hidden">
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-cyan-400/30 to-primary/30 bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] p-px">
                  <div className="absolute inset-px rounded-[calc(1rem-1px)] bg-card" />
                </div>

                <div className="relative p-8 lg:p-10">
                  {/* Grid background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,220,220,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,220,220,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-foreground font-mono">
                            SATINFRATECH
                          </p>
                          <p className="text-xs font-mono text-primary/60 tracking-wider">
                            CORE SYSTEMS v4.2
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-400">
                          LIVE
                        </span>
                      </div>
                    </div>

                    {/* Pulse graph */}
                    <div className="mb-6 p-4 rounded-xl bg-secondary/30 border border-primary/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                          System Performance
                        </span>
                        <span className="text-[10px] font-mono text-primary">
                          98.7% optimal
                        </span>
                      </div>
                      <PulseGraph />
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {metrics.map((metric, index) => (
                        <div
                          key={index}
                          className="text-center p-3 rounded-xl bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-all"
                        >
                          <p className="text-xl font-bold text-primary font-mono">
                            {metric.value}
                          </p>
                          <p className="text-[10px] text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Certifications */}
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <p className="text-[10px] font-mono font-semibold text-primary uppercase tracking-[0.2em] mb-3">
                        Certifications
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          // "ISO 27001",
                          // "AWS Partner",
                          // "Azure Expert",
                          // "SOC 2",
                           "ZueTech",
                        ].map((cert) => (
                          <span
                            key={cert}
                            className="px-3 py-1 rounded-full bg-card text-[11px] font-mono font-medium text-primary/80 border border-primary/20"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating glow elements */}
              <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
