import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
