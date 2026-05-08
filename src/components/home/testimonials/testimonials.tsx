"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { id: 1, name: "Alex Johnson", role: "Food Critic", text: "The delivery is incredibly fast, and the food always arrives piping hot!", rating: 5 },
  { id: 2, name: "Sarah Khan", role: "Software Engineer", text: "Love the variety of restaurants available. The app UI is very smooth.", rating: 5 },
  { id: 3, name: "David Miller", role: "Fitness Trainer", text: "Healthy options are easy to find and the quality is top-notch.", rating: 5 },
  { id: 4, name: "Rakib Hasan", role: "Student", text: "Budget-friendly deals and the rewards system is just amazing!", rating: 5 },
  { id: 5, name: "Jessica Doe", role: "Designer", text: "The aesthetic of this app makes ordering food a delightful experience.", rating: 5 },
];

const Testimonials = () => {
  // লুপ নিরবিচ্ছিন্ন রাখতে রিভিউগুলোকে ডাবল করে দিচ্ছি
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-black mb-4 italic tracking-tight">Loved by Thousands</h2>
        <p className="text-muted-foreground">Don't just take our word for it, hear from our happy foodies.</p>
      </div>

      {/* Wrapper with masking effect for smooth fade on edges */}
      <div className="relative flex overflow-hidden group">
        {/* লিনিয়ার গ্রাডিয়েন্ট মাস্ক (দুই পাশটা ঝাপসা দেখাবে, যা আরও প্রিমিয়াম লাগে) */}
        <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />

        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"], // অর্ধেক পথ যাওয়ার পর এটি আবার ০-তে ফিরে আসবে চোখের পলকে
          }}
          transition={{
            duration: 25, // স্পিড আপনার পছন্দমতো সেট করুন
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedReviews.map((review, i) => (
            <div 
              key={i} 
              className="w-350px p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100 dark:border-slate-800 flex-shrink-0"
            >
              <div className="flex gap-1 mb-4 text-orange-500">
                {Array(review.rating).fill(0).map((_, index) => (
                  <Star key={index} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 font-medium leading-relaxed italic whitespace-normal">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600 uppercase text-xs">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{review.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;