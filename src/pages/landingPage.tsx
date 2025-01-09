import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { StockPerformers } from "@/components/integrations-grid";
import { Features } from "@/components/features";
import { PortfolioTracking } from "@/components/portfolio-tracking";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import ThemeInitializer from "@/components/ThemeInitializer"

export default function LandingPage() {
  return (
    <>
     
      <Header />
      <main>
        <Hero />
        <StockPerformers />
        <Features />
        <PortfolioTracking />
        <Testimonials />
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">
            Ready to give it a go?
          </h2>
          <Button size="lg" className="bg-[#0066FF] hover:bg-[#0052CC] h-12 px-8">
            Get Started Now
          </Button>
        </section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
