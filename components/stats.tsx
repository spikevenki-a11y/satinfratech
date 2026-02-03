const stats = [
  { value: "15+", label: "Years of Experience", description: "delivering excellence" },
  { value: "99.9%", label: "Uptime Guarantee", description: "for all services" },
  { value: "500+", label: "Projects Delivered", description: "across industries" },
  { value: "24/7", label: "Support Available", description: "always here for you" },
];

export function Stats() {
  return (
    <section className="py-20 border-t border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <p className="text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
