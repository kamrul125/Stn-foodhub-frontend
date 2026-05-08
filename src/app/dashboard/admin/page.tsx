"use client";
import React from "react";
import { Users, Utensils, DollarSign, ShoppingCart } from "lucide-react";

const adminStats = [
  { label: "Total Revenue", value: "$45,231", icon: DollarSign, color: "bg-green-100 text-green-600" },
  { label: "Total Orders", value: "1,205", icon: ShoppingCart, color: "bg-orange-100 text-orange-600" },
  { label: "Active Users", value: "842", icon: Users, color: "bg-blue-100 text-blue-600" },
  { label: "Total Foods", value: "64", icon: Utensils, color: "bg-purple-100 text-purple-600" },
];

export default function AdminOverview() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-black italic text-slate-800 dark:text-white">Admin Control Panel</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStats.map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-2rem shadow-sm border border-slate-50 dark:border-slate-800">
            <div className={`${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
              <stat.icon size={24} />
            </div>
            <p className="text-sm font-bold text-muted-foreground">{stat.label}</p>
            <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Placeholder for Analytics Chart or Management Tables */}
      <div className="bg-white dark:bg-slate-900 h-96 rounded-[2.5rem] border border-dashed border-slate-200 dark:border-slate-800 flex items-center justify-center">
        <p className="text-muted-foreground font-bold italic">Revenue Analytics Chart Coming Soon...</p>
      </div>
    </div>
  );
}