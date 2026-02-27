"use client";

import {
  Cloud,
  Shield,
  Server,
  Database,
  Code,
  Headphones,
  ArrowUpRight,
} from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { HoloCard } from "./holo-card";

const services = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Seamlessly migrate and optimize your infrastructure across AWS, Azure, and Google Cloud with zero-downtime strategies.",
    tag: "CLOUD",
    status: "Active",
  },
  {
    icon: Shield,
    title: "Cyber Defense",
    description:
      "Enterprise-grade threat detection, zero-trust architecture, and real-time compliance monitoring.",
    tag: "SECURITY",
    status: "Active",
  },
  {
    icon: Server,
    title: "Infrastructure Ops",
    description:
      "Design and deploy robust, auto-scaling infrastructure that adapts to demand in real-time.",
    tag: "INFRA",
    status: "Active",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description:
      "Transform raw data into predictive insights with advanced analytics and ML pipelines.",
    tag: "DATA",
    status: "Active",
  },
  {
    icon: Code,
    title: "Custom Engineering",
    description:
      "Build bespoke software platforms tailored to your unique operational needs and workflows.",
    tag: "DEV",
    status: "Active",
  },
  {
    icon: Headphones,
    title: "Managed Operations",
    description:
      "24/7 proactive monitoring, incident response, and optimization of your entire tech stack.",
    tag: "OPS",
    status: "Active",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 mb-8 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono font-semibold text-primary uppercase tracking-[0.2em]">
                Service Modules
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance font-mono">
              Full-Spectrum{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              End-to-end technology services engineered for the modern enterprise.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <HoloCard className="h-full">
                <div className="relative p-6 lg:p-8 rounded-2xl bg-card/60 border border-primary/10 backdrop-blur-sm h-full flex flex-col group hover:border-primary/30 transition-all duration-500 overflow-hidden">
                  {/* Scan line effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-widest">
                        {service.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-mono text-emerald-400/70">
                        {service.status}
                      </span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="h-12 w-12 rounded-xl border border-primary/20 bg-primary/5 flex items-center justify-center mb-6 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_rgba(0,220,220,0.1)] transition-all duration-500">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 font-mono flex items-center gap-2 group-hover:text-primary transition-colors">
                    {service.title}
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <button className="text-xs font-mono font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2 uppercase tracking-wider group/btn">
                      {">"} Access Module
                      <ArrowUpRight className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>

                  {/* Corner decorations */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/10 rounded-tr-2xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/10 rounded-bl-2xl pointer-events-none" />
                </div>
              </HoloCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
