"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-6"
        >
          <UtensilsCrossed size={16} />
          <span>The Best Food Delivery in Your Town</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Savor the Best <span className="text-orange-600">Flavors</span> <br />
          at Your Doorstep
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg text-muted-foreground mb-8"
        >
          Order from your favorite restaurants and get hot, delicious food delivered 
          right to your doorstep. Experience the ultimate food delivery service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/foods">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg rounded-xl">
              Order Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-xl">
              Explore Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;