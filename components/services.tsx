import { Cloud, Shield, Server, Database, Code, Headphones } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Migrate, optimize, and manage your cloud infrastructure with our expert team. We support AWS, Azure, and Google Cloud platforms.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your business with comprehensive security solutions including threat detection, compliance management, and incident response.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Design, deploy, and maintain robust IT infrastructure that scales with your business needs and ensures maximum uptime.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Unlock the potential of your data with advanced analytics, business intelligence, and machine learning solutions.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description:
      "Build custom software solutions tailored to your unique business requirements with our experienced development team.",
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description:
      "Focus on your core business while we handle your IT operations with proactive monitoring and 24/7 support.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Our collection of tech services spans every stage of digital transformation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore how we help businesses transform and thrive in the digital age.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <button className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
