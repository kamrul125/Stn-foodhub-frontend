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
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white"
          >
            How It <span className="text-orange-600">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-bold italic mt-4 uppercase tracking-widest text-xs"
          >
            Order your favorite meal in three simple steps
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Wrapper */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-[2.5rem] bg-orange-100 dark:bg-orange-600/10 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 shadow-lg shadow-orange-600/5">
                  <step.icon size={42} strokeWidth={2.5} />
                </div>
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-black italic text-sm border-4 border-white dark:border-slate-950">
                  {step.id}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-black italic uppercase tracking-tight text-slate-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;