import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-6">
            Your Technology Partner
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Where technology meets{" "}
            <span className="text-primary">innovation</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
            We are a collective of passionate technologists dedicated to delivering enterprise-grade infrastructure, cloud solutions, and digital transformation services that drive business growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary px-8 h-12 bg-transparent">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
