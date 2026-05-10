import Hero from "@/components/home/hero/hero";
import Statistics from "@/components/home/statistics/statistics";
import Categories from "@/components/home/categories/categories";
import FeaturedFoods from "@/components/home/featured-foods/featured-foods";
import HowItWorks from "@/components/home/how-it-works/how-it-works";
import Testimonials from "@/components/home/testimonials/testimonials";
import FAQ from "@/components/home/faq/faq";
import Newsletter from "@/components/home/newsletter/newsletter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden transition-colors duration-300">
      {/* 1. Hero Section: 60-70% Height, CTA focus */}
      <section id="hero" className="relative">
        <Hero />
      </section>

      {/* 2. Statistics: Real, dynamic-style trust building */}
      <section className="bg-orange-600">
        <Statistics />
      </section>

      {/* 3. Popular Categories: Food classification */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <Categories />
      </section>

      {/* 4. Featured Foods: 4 cards per row on desktop (Point 3) */}
      <section className="py-20 container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
            Featured <span className="text-orange-600">Dishes</span>
          </h2>
          <p className="text-muted-foreground mt-4 font-medium italic">Handpicked favorites just for you</p>
        </div>
        <FeaturedFoods />
      </section>

      {/* 5. How It Works: Interactive process steps */}
      <section className="py-20 bg-white dark:bg-slate-900 rounded-[3rem] my-10">
        <HowItWorks />
      </section>

      {/* 6. Testimonials: Credibility & User reviews */}
      <section className="py-20">
        <Testimonials />
      </section>

      {/* 7. FAQ: Collapsible FAQ section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <FAQ />
      </section>

      {/* 8. Newsletter: Final CTA before footer */}
      <section className="py-20">
        <Newsletter />
      </section>
    </main>
  );
}