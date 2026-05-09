"use client";

import React, { useState } from "react";
import { Search, Star, ShoppingCart, Heart, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

// ডাটা সোর্স (এটি পরে এপিআই থেকে আসবে)
const foodData = [
  { 
    id: 1, 
    name: "Premium Beef Burger", 
    category: "Fast Food", 
    price: 15.99, 
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" 
  },
  { 
    id: 2, 
    name: "Cheese Blast Pizza", 
    category: "Pizza", 
    price: 22.50, 
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500" 
  },
  { 
    id: 3, 
    name: "Kacchi Biryani Special",  
    category: "Main Course",  
    price: 18.00,  
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500" 
  },
  { 
    id: 4, 
    name: "Grilled Chicken Salad", 
    category: "Healthy", 
    price: 12.99, 
    rating: 4.6, 
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500" 
  },
];

const categories = ["All", "Fast Food", "Pizza", "Main Course", "Healthy"];

const AllFoodsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ফিল্টারিং লজিক
  const filteredFoods = foodData.filter((food) => {
    const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || food.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase">
              Our <span className="text-orange-600">Menu</span>
            </h1>
            <p className="text-muted-foreground font-medium italic">Delicious items delivered to your door.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
               <Input 
                placeholder="Search food..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-14 w-full sm:w-80 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none shadow-sm focus-visible:ring-2 focus-visible:ring-orange-600 transition-all"
              />
              <Search className="absolute right-4 top-4 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={20} />
            </div>
            <Button className="h-14 px-6 rounded-2xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-orange-600 hover:text-white transition-all flex gap-2 border-none">
               <SlidersHorizontal size={20} />
               <span className="font-bold">Filter</span>
            </Button>
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-2xl font-bold italic transition-all ${
                selectedCategory === cat 
                ? "bg-orange-600 text-white shadow-lg shadow-orange-200 dark:shadow-none scale-105" 
                : "bg-slate-50 dark:bg-slate-900 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <div key={food.id} className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-6 group hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-100 dark:hover:border-slate-700">
                
                {/* Image Section */}
                <div className="relative h-64 w-full mb-6 overflow-hidden rounded-2rem">
                  <img 
                    src={food.image} 
                    alt={food.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 font-black text-xs italic shadow-sm">
                    <Star size={12} className="fill-orange-600 text-orange-600" /> {food.rating}
                  </div>
                  <button className="absolute top-4 right-4 p-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-all hover:scale-110">
                    <Heart size={20} />
                  </button>
                </div>
                
                {/* Info Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest bg-orange-50 dark:bg-orange-950/30 px-3 py-1 rounded-lg">
                      {food.category}
                    </span>
                    <span className="text-2xl font-black italic tracking-tighter text-slate-900 dark:text-white">
                      ${food.price.toFixed(2)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors line-clamp-1 dark:text-slate-100">
                    {food.name}
                  </h3>
                  
                  <Button className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black italic flex items-center justify-center gap-3 transition-all text-lg shadow-lg shadow-orange-100 dark:shadow-none active:scale-95">
                     <ShoppingCart size={22} /> 
                     <span className="tracking-tighter uppercase text-base">Add To Cart</span>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-2xl font-bold text-slate-400 italic">No food found in this category!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFoodsPage;