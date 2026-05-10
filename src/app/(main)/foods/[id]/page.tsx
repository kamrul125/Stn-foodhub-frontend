"use client";

import React from "react";
import { Star, ShoppingCart, ArrowLeft, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FoodDetailsProps {
  params: {
    id: string;
  };
}

const FoodDetailsPage = ({ params }: FoodDetailsProps) => {
  // বাস্তব প্রজেক্টে এই আইডি দিয়ে আপনি API থেকে ডাটা ফেচ করবেন
  const foodId = params.id;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link href="/foods" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-600 mb-8 font-bold italic transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Menu
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image Section */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100 dark:border-slate-800 aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800" 
              alt="Food Detail" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-8 left-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-2 font-black italic shadow-xl text-orange-600">
              <Star size={20} className="fill-orange-600" /> 4.9 Rating
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-orange-100 dark:bg-orange-950/30 text-orange-600 rounded-xl text-sm font-black uppercase tracking-widest">
                Premium Selection
              </span>
              <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none text-slate-900 dark:text-white">
                Delicious <span className="text-orange-600">Item #{foodId}</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium italic leading-relaxed">
                Experience the perfect blend of fresh ingredients and authentic spices. This dish is crafted to satisfy your cravings and provide a premium dining experience.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2rem flex items-center gap-4 border border-transparent hover:border-orange-200 transition-all">
                <div className="p-3 bg-orange-100 dark:bg-orange-950/50 rounded-xl text-orange-600">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Delivery</p>
                  <p className="font-black italic dark:text-white uppercase tracking-tighter">25-35 Min</p>
                </div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2rem flex items-center gap-4 border border-transparent hover:border-orange-200 transition-all">
                <div className="p-3 bg-orange-100 dark:bg-orange-950/50 rounded-xl text-orange-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase">Location</p>
                  <p className="font-black italic dark:text-white uppercase tracking-tighter">Free Delivery</p>
                </div>
              </div>
            </div>

            {/* Price & Action */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-400 uppercase italic">Total Price</span>
                <span className="text-5xl font-black italic tracking-tighter text-slate-900 dark:text-white">$24.99</span>
              </div>
              <Button className="w-full sm:flex-1 h-20 bg-orange-600 hover:bg-orange-700 text-white rounded-2rem font-black italic text-xl flex items-center justify-center gap-3 shadow-2xl shadow-orange-600/30 active:scale-95 transition-all uppercase tracking-tighter">
                <ShoppingCart size={28} /> Add To Cart
              </Button>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-6 pt-4">
              {["100% Fresh", "Organic Meat", "Expert Chef"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold italic">
                  <CheckCircle2 size={18} className="text-green-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;