"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">satinfratech</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          <Link href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Solutions
          </Link>
          <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <Button variant="ghost" className="text-foreground">
            Log in
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="space-y-1 px-6 py-4">
            <Link
              href="#services"
              className="block py-2 text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block py-2 text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#solutions"
              className="block py-2 text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="ghost" className="w-full justify-center text-foreground">
                Log in
              </Button>
              <Button className="w-full bg-primary text-primary-foreground">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
