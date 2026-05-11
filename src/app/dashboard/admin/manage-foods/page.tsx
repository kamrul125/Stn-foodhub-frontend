"use client";
import React, { useState } from "react";
import { Plus, Search, Edit3, Trash2, MoreVertical, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ManageFoods = () => {
  // ডামি ডাটা - আপনার ওই 'Featured Delicacies' এর মতই ডাটা স্ট্রাকচার
  const foods = [
    { id: 1, name: "Double Cheese Burger", category: "Fast Food", price: 12.99, stock: 45, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100" },
    { id: 2, name: "Pepperoni Feast Pizza", category: "Pizza", price: 18.50, stock: 20, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=100" },
    { id: 3, name: "Hyderabadi Mutton Biryani", category: "Main Course", price: 15.00, stock: 12, image: "https://images.unsplash.com/photo-1545231027-63b3f16260cd?w=100" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black italic">Manage Foods</h1>
          <p className="text-muted-foreground text-sm">Add, edit or remove items from your menu</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 h-12 px-6 rounded-2xl gap-2 font-bold shadow-lg shadow-orange-100">
          <Plus size={20} /> Add New Food
        </Button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Search food by name..." 
            className="h-12 pl-12 rounded-2xl bg-white dark:bg-slate-900 border-none shadow-sm"
          />
        </div>
        <Button variant="outline" className="h-12 rounded-2xl border-none bg-white dark:bg-slate-900 shadow-sm font-bold">
          All Categories
        </Button>
      </div>

      {/* Food List Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-50 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Food Item</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Category</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Price</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Stock</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {foods.map((food) => (
                <tr key={food.id} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-100">
                        <img src={food.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{food.name}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-black uppercase tracking-wider">
                      {food.category}
                    </span>
                  </td>
                  <td className="p-6 font-black text-orange-600">${food.price}</td>
                  <td className="p-6">
                    <span className={`font-bold ${food.stock < 15 ? 'text-red-500' : 'text-slate-600 dark:text-slate-400'}`}>
                      {food.stock} Left
                    </span>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-blue-50 hover:text-blue-600">
                        <Edit3 size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-red-50 hover:text-red-600">
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageFoods;