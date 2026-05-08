"use client";
import React from "react";
import { ShoppingCart, ChefHat, Truck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { 
    id: 1, 
    title: "Select Your Food", 
    desc: "Choose from our wide range of delicious meals from local restaurants.", 
    icon: ShoppingCart 
  },
  { 
    id: 2, 
    title: "Expert Preparation", 
    desc: "Our professional chefs prepare your food with the freshest ingredients.", 
    icon: ChefHat 
  },
  { 
    id: 3, 
    title: "Swift Delivery", 
    desc: "Get your hot and fresh food delivered directly to your doorstep.", 
    icon: Truck 
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Order your favorite meal in three simple steps and enjoy the ultimate food delivery experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;