"use client";

import React, { useEffect, useState } from "react";
import FoodCard from "../../foods/food-card/food-card";
import { FoodCardSkeleton } from "../../foods/food-card/food-card-skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const FeaturedFoods = () => {
  const [loading, setLoading] = useState(true);

  // ডাটা সোর্স (STN Requirement: No placeholder/lorem ipsum)
  const featuredFoods = [
    { 
      id: "1", 
      title: "Double Cheese Burger", 
      price: 12.99, 
      rating: 4.8, 
      deliveryTime: "20-30 min", 
      location: "Dhanmondi", 
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500", 
      description: "Juicy beef patty with double layers of cheddar cheese and fresh veggies." 
    },
    { 
      id: "2", 
      title: "Pepperoni Feast Pizza", 
      price: 18.50, 
      rating: 4.9, 
      deliveryTime: "30-40 min", 
      location: "Gulshan", 
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500", 
      description: "Loaded with spicy pepperoni and mozzarella cheese on a thin crust." 
    },
    { 
      id: "3", 
      title: "Hyderabadi Mutton Biryani", 
      price: 15.00, 
      rating: 4.7, 
      deliveryTime: "40-50 min", 
      location: "Banani", 
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500", 
      description: "Authentic long-grain basmati rice with tender mutton and spices." 
    },
    { 
      id: "4", 
      title: "Chocolate Lava Cake", 
      price: 8.99, 
      rating: 4.9, 
      deliveryTime: "15-20 min", 
      location: "Uttara", 
      image: "https://images.unsplash.com/photo-1617343251257-b5d709934bdd?w=500", 
      description: "Warm chocolate cake with a gooey molten chocolate center." 
    },
  ];

  useEffect(() => {
    // লোডিং সিমুলেশন (পিসির র‍্যাম বাঁচাতে টাইমআউট কিছুটা কমানো হয়েছে)
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header Section: Clear Visual Flow */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
              Featured <span className="text-orange-600">Delicacies</span>
            </h2>
            <p className="text-muted-foreground font-medium italic">
              Handpicked best-selling meals from the top kitchens.
            </p>
          </div>
          
          <Link href="/foods">
            <Button 
              variant="outline" 
              className="group border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 rounded-2xl font-black italic px-8 h-14"
            >
              VIEW ALL FOODS
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Grid System: (Point 3 - Desktop: 4 cards per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading
            ? Array(4).fill(0).map((_, i) => <FoodCardSkeleton key={i} />)
            : featuredFoods.map((food) => (
                <div key={food.id} className="flex h-full">
                  <FoodCard food={food} />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFoods;