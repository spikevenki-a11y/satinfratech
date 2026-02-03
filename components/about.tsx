"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Users, TrendingUp, ArrowRight } from "lucide-react";

const features = [
  { icon: CheckCircle2, text: "Enterprise-grade security and compliance" },
  { icon: Zap, text: "Lightning-fast deployment and scaling" },
  { icon: Users, text: "Dedicated team of certified experts" },
  { icon: TrendingUp, text: "Proven track record of success" },
];

const metrics = [
  { label: "Client Retention", value: "98%" },
  { label: "Avg. Response Time", value: "<2h" },
  { label: "Countries Served", value: "25+" },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">About Satinfratech</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance leading-tight">
              We are the architects of{" "}
              <span className="text-primary">digital transformation</span>
            </h2>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Founded on the belief that technology should empower, not complicate, Satinfratech has grown into a trusted partner for enterprises navigating the digital landscape.
            </p>
            
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of certified engineers and consultants brings decades of combined experience in delivering mission-critical solutions across industries.
            </p>
            
            <ul className="mt-10 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 h-12 px-6">
                Explore Our Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary h-12 px-6 bg-transparent">
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            {/* Main card */}
            <div className="relative rounded-3xl bg-gradient-to-br from-card to-secondary border border-border overflow-hidden p-1">
              <div className="rounded-[calc(1.5rem-4px)] bg-card p-8 lg:p-10">
                {/* Grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <div className="relative">
                  {/* Logo */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-lg shadow-primary/30">
                      <span className="text-3xl font-bold text-primary-foreground">S</span>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">satinfratech</p>
                      <p className="text-sm text-muted-foreground">Technology Excellence</p>
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {metrics.map((metric, index) => (
                      <div key={index} className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                        <p className="text-2xl font-bold text-primary">{metric.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Certifications */}
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Certifications</p>
                    <div className="flex flex-wrap gap-2">
                      {["ISO 27001", "AWS Partner", "Azure Expert", "GCP Certified"].map((cert) => (
                        <span key={cert} className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-foreground border border-border">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-2xl bg-cyan-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
