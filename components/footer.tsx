import Link from "next/link";
import { Github, Linkedin, Twitter, Zap } from "lucide-react";

const navigation = {
  services: [
    { name: "Cloud Architecture", href: "#" },
    { name: "Cyber Defense", href: "#" },
    { name: "Infrastructure Ops", href: "#" },
    { name: "Data Intelligence", href: "#" },
    { name: "Custom Engineering", href: "#" },
  ],
  company: [
    { name: "About Core", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Files", href: "#" },
    { name: "Whitepapers", href: "#" },
    { name: "Webinars", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-primary/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20 relative">
        {/* Top section */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground tracking-wider uppercase font-mono">
                  Satin<span className="text-primary">fratech</span>
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs font-mono">
              Engineering the digital infrastructure of tomorrow.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="h-9 w-9 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,220,220,0.1)] transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {[
            { title: "Services", items: navigation.services },
            { title: "Company", items: navigation.company },
            { title: "Resources", items: navigation.resources },
            { title: "Legal", items: navigation.legal },
          ].map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-mono font-semibold text-primary uppercase tracking-[0.2em]">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-primary/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Satinfratech Systems. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground/50 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </p>
        </div>
      </div>
    </footer>
  );
}
