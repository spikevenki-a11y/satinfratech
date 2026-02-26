"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Terminal } from "lucide-react";
import { useEffect, useState } from "react";
import { GlitchText } from "./glitch-text";
import { TypingText } from "./typing-text";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Cyber grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,220,220,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,220,220,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        {/* Perspective grid floor */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40vh]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,220,220,0.02) 100%)",
            maskImage: "linear-gradient(to top, black, transparent)",
          }}
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(0,220,220,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,220,220,0.06)_1px,transparent_1px)] bg-[size:80px_80px]"
            style={{
              transform: "perspective(500px) rotateX(60deg)",
              transformOrigin: "bottom",
            }}
          />
        </div>
      </div>

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Terminal-style badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/20 mb-10 backdrop-blur-sm">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono text-primary tracking-wider">
              {">"} system.status: <span className="text-emerald-400">ONLINE</span>
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl xl:text-9xl text-balance leading-[0.95]">
            <span className="block mb-2">
              <GlitchText text="NEXT-GEN" className="font-mono" />
            </span>
            <span className="block bg-gradient-to-r from-primary via-cyan-300 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">
              IT Solutions
            </span>
          </h1>

          <div className="mt-8 h-12 flex items-center justify-center">
            <span className="text-xl lg:text-2xl text-muted-foreground font-mono">
              Specializing in{" "}
              <TypingText className="text-primary font-semibold" />
            </span>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            We architect the digital backbone of tomorrow&apos;s enterprises.
            Infrastructure that scales. Security that never sleeps. Innovation that leads.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="relative bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-14 text-base font-mono font-semibold uppercase tracking-wider shadow-[0_0_30px_rgba(0,220,220,0.3)] hover:shadow-[0_0_50px_rgba(0,220,220,0.4)] transition-all hover:-translate-y-0.5 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Deploy Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 h-14 text-base font-mono uppercase tracking-wider bg-transparent group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary/30 mr-3 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all">
                <Play className="h-3 w-3 text-primary fill-primary" />
              </span>
              Watch Demo
            </Button>
          </div>

          {/* Tech partner logos */}
          <div className="mt-20 pt-10 border-t border-primary/10">
            <p className="text-xs font-mono text-muted-foreground/50 mb-8 uppercase tracking-[0.3em]">
              Integrated Platforms
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
              {["AWS", "Azure", "GCP", "Kubernetes", "Terraform"].map(
                (partner, i) => (
                  <span
                    key={partner}
                    className="text-base font-mono font-semibold text-muted-foreground/30 hover:text-primary/70 transition-all duration-300 cursor-default tracking-wider uppercase"
                    style={{
                      animationDelay: `${i * 100}ms`,
                    }}
                  >
                    {partner}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Animated corner elements */}
      <div className="absolute top-20 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-lg" />
      <div className="absolute top-20 right-8 w-20 h-20 border-r-2 border-t-2 border-primary/20 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-primary/20 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-lg" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] font-mono text-primary/50 uppercase tracking-[0.4em]">
          Scroll
        </span>
        <div className="w-5 h-9 rounded-full border border-primary/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
