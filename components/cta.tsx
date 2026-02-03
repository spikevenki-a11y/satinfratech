import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-2xl bg-secondary border border-border overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          
          <div className="relative px-8 py-16 sm:px-16 sm:py-24 lg:py-32 lg:px-24">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
                Join Us
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Ready to transform your business?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                We are always looking for talented individuals and forward-thinking organizations to partner with. In our collective, there is always room for more innovation.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-card px-8 h-12 bg-transparent">
                  Join Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
