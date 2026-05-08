"use client";
import React from "react";
import { Search, Filter, Star, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// ডাটা সোর্স
const foods = [
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

const AllFoodsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <h1 className="text-5xl font-black italic tracking-tighter uppercase">
              Our <span className="text-orange-600">Menu</span>
            </h1>
            <p className="text-muted-foreground font-medium italic">Delicious items delivered to your door.</p>
          </div>
          
          <div className="flex gap-4">
            <div className="relative group">
               <Input 
                placeholder="Search food..." 
                className="h-14 w-80 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none shadow-sm focus-visible:ring-orange-600"
              />
            </div>
            <Button className="h-14 w-14 rounded-2xl bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-100 dark:shadow-none transition-all">
               <Search size={20} className="text-white" />
            </Button>
          </div>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {foods.map((food) => (
            <div key={food.id} className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-6 group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-2xl border border-transparent hover:border-orange-100 dark:hover:border-slate-700">
              
              {/* Image Section */}
              <div className="relative h-60 w-full mb-6 overflow-hidden rounded-2rem">
                <img 
                  src={food.image} 
                  alt={food.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 font-black text-xs italic shadow-sm">
                  <Star size={12} className="fill-orange-600 text-orange-600" /> {food.rating}
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>
              </div>
              
              {/* Info Section */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-orange-600 tracking-widest bg-orange-50 dark:bg-orange-950/30 px-3 py-1 rounded-lg">
                    {food.category}
                  </span>
                  <span className="text-2xl font-black italic tracking-tighter">${food.price}</span>
                </div>
                
                <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors line-clamp-1">
                  {food.name}
                </h3>
                
                {/* Updated Button with better visibility */}
                <Button className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black italic flex items-center justify-center gap-3 transition-all text-lg shadow-lg shadow-orange-100 dark:shadow-none">
                   <ShoppingCart size={20} /> 
                   <span className="tracking-tighter uppercase">Add To Cart</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoodsPage;