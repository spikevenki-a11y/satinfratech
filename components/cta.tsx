"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background with gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-primary rounded-3xl" />
          <div className="absolute inset-[1px] bg-card rounded-[calc(1.5rem-1px)]" />
          
          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 lg:py-32 lg:px-24">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
            
            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left side - CTA text */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Get in Touch</span>
                </div>
                
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance leading-tight">
                  Ready to transform your{" "}
                  <span className="text-primary">digital future</span>?
                </h2>
                
                <p className="mt-6 text-lg text-muted-foreground">
                  Partner with Satinfratech and unlock the full potential of your technology investments. Our experts are ready to guide you every step of the way.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 h-14 px-8 text-base font-semibold">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary h-14 px-8 text-base font-semibold bg-transparent">
                    View Case Studies
                  </Button>
                </div>
              </div>
              
              {/* Right side - Contact info cards */}
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email Us", value: "hello@satinfratech.com", href: "mailto:hello@satinfratech.com" },
                  { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                  { icon: MapPin, label: "Visit Us", value: "123 Tech Park, Silicon Valley, CA", href: "#" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                    <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
