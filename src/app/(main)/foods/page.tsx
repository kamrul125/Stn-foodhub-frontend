"use client";

import React, { useState, useEffect } from "react";
import { Search, Star, ShoppingCart, Heart, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FoodCardSkeleton } from "@/components/foods/food-card/food-card-skeleton";

// ডাটা সোর্স (ID গুলো স্ট্রিং হিসেবে রাখা হয়েছে ডাইনামিক রাউটিং এর জন্য)
const foodData = [
  { 
    id: "1", 
    name: "Premium Beef Burger", 
    category: "Fast Food", 
    price: 15.99, 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
  },
  { 
    id: "2", 
    name: "Cheese Blast Pizza", 
    category: "Pizza", 
    price: 22.50, 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
  },
  { 
    id: "3", 
    name: "Kacchi Biryani Special",  
    category: "Main Course",  
    price: 18.00,  
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500",
  },
  { 
    id: "4", 
    name: "Grilled Chicken Salad", 
    category: "Healthy", 
    price: 12.99, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
  },
];

const categories = ["All", "Fast Food", "Pizza", "Main Course", "Healthy"];

const AllFoodsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // পিসির মেমরি লোড কমাতে শর্ট টাইমার
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // ফিল্টারিং লজিক
  const filteredFoods = foodData.filter((food) => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              Explore <span className="text-orange-600 underline decoration-wavy decoration-orange-200 underline-offset-8">Menu</span>
            </h1>
            <p className="text-muted-foreground font-bold italic flex items-center gap-2">
              <Utensils size={18} className="text-orange-600" />
              {filteredFoods.length} items found for you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Input 
                placeholder="Search your flavor..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-16 w-full sm:w-96 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none shadow-inner focus-visible:ring-2 focus-visible:ring-orange-600 font-bold italic"
              />
              <Search className="absolute right-5 top-5 text-slate-400 group-focus-within:text-orange-600" size={24} />
            </div>
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap gap-3 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-4 rounded-2xl font-black italic uppercase tracking-tighter transition-all duration-300 border-2 ${
                selectedCategory === cat 
                ? "bg-orange-600 text-white border-orange-600 shadow-xl shadow-orange-600/20 scale-105" 
                : "bg-transparent text-slate-400 border-slate-100 dark:border-slate-800 hover:border-orange-600 hover:text-orange-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {loading ? (
            Array(6).fill(0).map((_, i) => <FoodCardSkeleton key={i} />)
          ) : filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <div key={food.id} className="group bg-white dark:bg-slate-900 rounded-[3rem] p-4 flex flex-col h-full hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-orange-100 dark:hover:border-slate-800">
                
                {/* Image Section */}
                <div className="relative h-72 w-full mb-6 overflow-hidden rounded-[2.5rem] shadow-lg">
                  <img 
                    src={food.image} 
                    alt={food.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-5 left-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-1.5 font-black text-sm italic shadow-sm text-orange-600">
                    <Star size={16} className="fill-orange-600" /> {food.rating}
                  </div>
                </div>
                
                {/* Info Section */}
                <div className="px-4 pb-4 flex flex-col grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-black uppercase text-orange-600 tracking-[0.2em] bg-orange-50 dark:bg-orange-950/30 px-3 py-1 rounded-lg">
                        {food.category}
                      </span>
                      <h3 className="text-2xl font-black italic tracking-tighter dark:text-slate-100 group-hover:text-orange-600 uppercase">
                        {food.name}
                      </h3>
                    </div>
                    <span className="text-2xl font-black italic tracking-tighter text-slate-900 dark:text-white underline decoration-orange-600 decoration-2 underline-offset-4">
                      ${food.price.toFixed(2)}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="grid grid-cols-5 gap-3 mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                    {/* View Details লিঙ্ক যা নির্দিষ্ট আইডিতে যাবে */}
                    <Link href={`/foods/${food.id}`} className="col-span-2">
                      <Button variant="outline" className="w-full h-14 rounded-2xl border-2 border-orange-600 text-orange-600 font-black italic uppercase hover:bg-orange-50 text-xs tracking-tighter">
                        Details
                      </Button>
                    </Link>
                    <Button className="col-span-3 h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black italic flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20 uppercase tracking-tighter">
                       <ShoppingCart size={20} /> Add To Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-40 text-center space-y-4">
              <p className="text-3xl font-black italic text-slate-400 uppercase tracking-tighter">No food found!</p>
              <Button onClick={() => {setSearchTerm(""); setSelectedCategory("All")}} variant="link" className="text-orange-600 font-bold italic underline">Clear filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFoodsPage;