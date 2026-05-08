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
    <main className="min-h-screen flex flex-col">
      {/* 1. Hero Section: High conversion area with 70vh height */}
      <Hero />

      {/* 2. Statistics: Trust building section */}
      <Statistics />

      {/* 3. Popular Categories: Visual navigation */}
      <Categories />

      {/* 4. Featured Foods: The core product listing (Point 3: Cards) */}
      <FeaturedFoods />

      {/* 5. How It Works: Process explanation */}
      <HowItWorks />

      {/* 6. Testimonials: User reviews for credibility */}
      <Testimonials />

      {/* 7. FAQ: Addressing common queries */}
      <FAQ />

      {/* 8. Newsletter: Subscription form (Point 2: Meaningful Sections) */}
      <Newsletter />
    </main>
  );
}