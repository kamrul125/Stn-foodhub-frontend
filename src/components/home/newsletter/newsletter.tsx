"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-20 bg-orange-600">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">Join the Foodie Club!</h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive weekly updates on new restaurants, exclusive discounts, and delicious food stories.
        </p>
        <form 
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" 
          onSubmit={(e) => e.preventDefault()}
        >
          <Input 
            type="email"
            placeholder="Enter your email address" 
            className="bg-white text-black h-14 rounded-xl border-none focus-visible:ring-2 focus-visible:ring-orange-300"
            required
          />
          <Button className="bg-slate-900 hover:bg-slate-800 text-white h-14 px-8 rounded-xl font-bold text-lg shrink-0 transition-all active:scale-95">
            Subscribe Now
          </Button>
        </form>
        <p className="mt-4 text-xs text-orange-200 opacity-80">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;