"use client";
import React from "react";
import { motion } from "framer-motion";

const categories = [
  { id: 1, name: "Burgers", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&q=80", count: "45+ Items" },
  { id: 2, name: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80", count: "30+ Items" },
  { id: 3, name: "Biryani", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80", count: "25+ Items" },
  { id: 4, name: "Desserts", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&q=80", count: "20+ Items" },
];

const Categories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Popular Categories</h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Explore our wide range of cuisines and find your favorite meal in seconds.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div 
              key={category.id} 
              whileHover={{ y: -5 }}
              className="group relative h-64 overflow-hidden rounded-2xl cursor-pointer"
            >
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                <p className="text-orange-400 text-sm">{category.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// এই লাইনটিই আপনার এরর দূর করবে
export default Categories;