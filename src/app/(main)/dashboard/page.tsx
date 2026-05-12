"use client";
import React from "react";
// ShoppingCart ইমপোর্ট করা হয়েছে যা নিচে ব্যবহার করা হবে
import { Users, Utensils, DollarSign, ShoppingCart } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { 
      label: "Revenue", 
      value: "$45,231", 
      icon: DollarSign, 
      color: "bg-green-100 text-green-600" 
    },
    { 
      label: "Orders", 
      value: "1,205", 
      icon: ShoppingCart, // এখানে ShoppingBag এর বদলে ShoppingCart ব্যবহার করা হয়েছে
      color: "bg-orange-100 text-orange-600" 
    },
    { 
      label: "Users", 
      value: "842", 
      icon: Users, 
      color: "bg-blue-100 text-blue-600" 
    },
    { 
      label: "Food Items", 
      value: "64", 
      icon: Utensils, 
      color: "bg-purple-100 text-purple-600" 
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase text-slate-900 dark:text-white">
          Admin <span className="text-orange-600">Overview</span>
        </h1>
        <p className="text-slate-500 font-bold italic text-sm">Welcome back to the FoodHub Pro control center.</p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-orange-600/5 transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <stat.icon size={28} />
              </div>
            </div>
            
            <p className="text-xs font-black text-slate-400 uppercase italic tracking-0.1em">{stat.label}</p>
            <h3 className="text-3xl font-black mt-1 text-slate-900 dark:text-white tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Analytics Placeholder */}
      <div className="relative overflow-hidden h-72 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center group">
        <div className="absolute inset-0 bg-orange-50/30 dark:bg-orange-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300 group-hover:text-orange-600 transition-colors duration-500">
            <Utensils size={32} />
          </div>
          <p className="text-slate-500 font-black italic uppercase tracking-tighter text-xl">Live Analytics Engine Coming Soon</p>
          <p className="text-slate-400 text-sm font-medium mt-1 italic">We're preparing the kitchen for big data!</p>
        </div>
      </div>
    </div>
  );
}