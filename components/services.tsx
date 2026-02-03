"use client";

import { Cloud, Shield, Server, Database, Code, Headphones, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Seamlessly migrate and optimize your cloud infrastructure with AWS, Azure, and Google Cloud expertise.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security, threat detection, and compliance management.",
    gradient: "from-emerald-500/20 to-cyan-500/20",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Design and deploy robust, scalable infrastructure solutions that grow with your business demands.",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description: "Transform raw data into actionable insights with advanced analytics and machine learning solutions.",
    gradient: "from-primary/20 to-cyan-500/20",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Build tailored software solutions that perfectly align with your unique business requirements.",
    gradient: "from-indigo-500/20 to-primary/20",
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description: "Focus on your core business while we handle IT operations with proactive 24/7 monitoring and support.",
    gradient: "from-cyan-500/20 to-emerald-500/20",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Comprehensive IT solutions for the{" "}
            <span className="text-primary">modern enterprise</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            From cloud migration to cybersecurity, we deliver end-to-end technology services that drive digital transformation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
