"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 shadow-[0_0_30px_rgba(0,220,220,0.05)]"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center overflow-hidden">
            <Zap className="h-5 w-5 text-primary relative z-10" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 border border-primary/20 rounded-lg animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground tracking-wider uppercase">
              Satin<span className="text-primary">fratech</span>
            </span>
            <span className="text-[10px] text-primary/60 tracking-[0.3em] uppercase -mt-0.5 font-mono">
              Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-mono font-medium text-muted-foreground hover:text-primary transition-all duration-300 group uppercase tracking-wider"
            >
              <span className="text-primary/0 group-hover:text-primary/40 transition-colors mr-1">
                {"//"}
              </span>
              {item.name}
              <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-3">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary hover:bg-primary/5 font-mono uppercase tracking-wider text-xs"
          >
            Log in
          </Button>
          <Button className="relative bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(0,220,220,0.2)] transition-all font-mono uppercase tracking-wider text-xs overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Initialize
            </span>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2.5 rounded-lg border border-primary/20 text-primary hover:bg-primary/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-primary/10 px-6 py-4 space-y-1">
          {navigation.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 py-3 px-4 text-base font-mono font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="text-primary/40 text-xs">0{i + 1}</span>
              {item.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-primary/10 flex flex-col gap-2">
            <Button className="w-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 font-mono uppercase tracking-wider text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse mr-2" />
              Initialize
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
