import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Enterprise-grade security and compliance",
  "Scalable infrastructure solutions",
  "24/7 expert technical support",
  "Proven track record of success",
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
              About Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Faster iteration. More innovation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We are the tech artisans of Satinfratech – a leading technology consultancy helping countless organizations succeed in their most important digital transformations.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-secondary border border-border overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-20 w-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl font-bold text-primary">S</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">satinfratech</p>
                  <p className="text-muted-foreground mt-2">Building the future of IT</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-xl bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-xl bg-primary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
