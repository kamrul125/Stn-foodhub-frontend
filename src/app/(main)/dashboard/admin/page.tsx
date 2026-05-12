"use client";
import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    // লোকাল স্টোরেজ থেকে ইউজারের নাম নেওয়ার চেষ্টা
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setAdminName(parsedUser.name || "Admin");
    }
  }, []);

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
          Welcome back, <span className="text-orange-600">{adminName}!</span>
        </h1>
        <p className="text-slate-500 font-bold italic text-xs mt-2 uppercase tracking-widest">
          FoodHub Management Control Center
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-lg border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] font-black uppercase italic text-slate-400 tracking-widest mb-1">Total Orders</p>
          <h2 className="text-3xl font-black italic text-orange-600">128</h2>
        </div>
        
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-lg border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] font-black uppercase italic text-slate-400 tracking-widest mb-1">Revenue</p>
          <h2 className="text-3xl font-black italic text-orange-600">$4,250</h2>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-lg border border-slate-100 dark:border-slate-800">
          <p className="text-[10px] font-black uppercase italic text-slate-400 tracking-widest mb-1">Active Users</p>
          <h2 className="text-3xl font-black italic text-orange-600">45</h2>
        </div>
      </div>

      {/* Main Content Area Placeholder */}
      <div className="mt-10 bg-slate-100 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 h-64 rounded-[3rem] flex items-center justify-center">
        <p className="text-slate-400 font-black italic uppercase tracking-widest text-sm">
          Select a category from the sidebar to manage
        </p>
      </div>
    </div>
  );
}