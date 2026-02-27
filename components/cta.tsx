"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Radio } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const contactItems = [
  {
    icon: Mail,
    label: "Comm Link",
    value: "hello@satinfratech.com",
    href: "mailto:hello@satinfratech.com",
  },
  {
    icon: Phone,
    label: "Direct Line",
    value: "+91 7731934849",
    href: "tel:+917731934849",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "123 Tech Park, Silicon Valley, CA",
    href: "#",
  },
];

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-2xl overflow-hidden">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-cyan-400/40 to-primary/40 bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]" />
              <div className="absolute inset-px rounded-[calc(1rem-1px)] bg-card" />
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 sm:px-16 sm:py-20 lg:py-24 lg:px-24 overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,220,220,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,220,220,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
              <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent" />

              <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {/* Left side */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8 backdrop-blur-sm">
                    <Radio className="h-3 w-3 text-primary animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-primary uppercase tracking-[0.2em]">
                      Open Channel
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance leading-tight font-mono">
                    Ready to{" "}
                    <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                      upgrade
                    </span>{" "}
                    your systems?
                  </h2>

                  <p className="mt-6 text-lg text-muted-foreground">
                    Initiate a connection with our engineering team. We&apos;ll
                    architect the infrastructure your business needs to scale.
                  </p>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="relative bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(0,220,220,0.3)] h-14 px-8 text-base font-mono font-semibold uppercase tracking-wider overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Initialize Contact
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10 h-14 px-8 text-base font-mono uppercase tracking-wider bg-transparent"
                    >
                      Case Files
                    </Button>
                  </div>
                </div>

                {/* Right side - Contact cards */}
                <div className="space-y-3">
                  {contactItems.map((item, index) => (
                    <ScrollReveal key={index} delay={index * 100} direction="right">
                      <a
                        href={item.href}
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group backdrop-blur-sm"
                      >
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(0,220,220,0.1)] transition-all">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-primary/60 uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-foreground font-medium font-mono text-sm">
                            {item.value}
                          </p>
                        </div>
                        <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </a>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
