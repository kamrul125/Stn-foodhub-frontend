"use client";
import React from "react";
// Components are imported with alias
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
    <main className="min-h-screen flex flex-col overflow-hidden transition-colors duration-500 bg-white dark:bg-slate-950">
      
      {/* 1. Hero Section - CTA Focus */}
      <section id="hero" className="relative w-full">
        <Hero />
      </section>

      {/* 2. Statistics - Trust Building */}
      <section className="bg-orange-600 w-full py-8">
        <div className="container mx-auto px-4">
          <Statistics />
        </div>
      </section>

      {/* 3. Popular Categories */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
              Explore <span className="text-orange-600">Categories</span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium italic">Discover your favorite cuisines in one click</p>
          </div>
          <Categories />
        </div>
      </section>

      {/* 4. Featured Foods - Handpicked Items */}
      <section className="py-24 container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
            Featured <span className="text-orange-600">Dishes</span>
          </h2>
          <p className="text-slate-500 mt-4 font-medium italic">Handpicked favorites just for you</p>
        </div>
        <FeaturedFoods />
      </section>

      {/* 5. How It Works - Interactive Steps */}
      <section className="py-24 bg-slate-900 text-white rounded-[3.5rem] my-12 mx-4 md:mx-10 overflow-hidden shadow-2xl">
        <div className="container mx-auto px-6">
           <HowItWorks />
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <Testimonials />
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <FAQ />
      </section>

      {/* 8. Newsletter - Final CTA */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-orange-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <Newsletter />
          </div>
          {/* Decorative background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>
      </section>

    </main>
  );
}