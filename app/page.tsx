import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { ParticleField } from "@/components/particle-field";
import { ScanLine } from "@/components/scan-line";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative">
      <ParticleField />
      <ScanLine />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Stats />
        <Services />
        <About />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
