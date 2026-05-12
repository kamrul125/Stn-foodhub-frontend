"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  // ১. ডায়নামিক API URL: ভার্সেল .env থাকলে সেটা নিবে, নয়তো লোকালহোস্ট
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      console.log("🚀 Attempting login via:", `${API_URL}/auth/login`);

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        // ২. LocalStorage এ ইউজার ডাটা ও টোকেন সেভ
        localStorage.setItem("accessToken", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));

        // ৩. মিডলওয়্যার বা সার্ভার সাইড চেকের জন্য কুকিতে টোকেন সেট
        document.cookie = `token=${result.data.token}; path=/; max-age=86400; SameSite=Lax`;

        const rawRole = result.data?.user?.role;
        const normalizedRole = rawRole?.toLowerCase()?.trim();

        console.log("✅ Login Success. Role:", normalizedRole);

        // ৪. ১০০ মি.সে. বিরতি যাতে ব্রাউজার কুকি রাইট করার সময় পায়
        setTimeout(() => {
          if (normalizedRole === "admin") {
            window.location.href = "/dashboard/admin";
          } else {
            window.location.href = "/";
          }
        }, 100);
        
      } else {
        alert(result.message || "Login failed! Please check your credentials.");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("❌ Connection Error:", err);
      alert("সার্ভার কানেকশন এরর! আপনার ব্যাকএন্ড কি চালু আছে?");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 font-sans text-slate-900 dark:text-white">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            FoodHub <span className="text-orange-600">Login</span>
          </h1>
          <p className="text-slate-500 font-bold italic text-[10px] mt-2 uppercase tracking-widest">
            Access your kitchen dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase italic text-slate-400 ml-4 tracking-widest">
              Email Address
            </label>
            <input 
              {...register("email")}
              type="email" 
              required
              placeholder="admin@foodhub.com"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-orange-600 focus:bg-white dark:focus:bg-slate-900 outline-none font-bold transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase italic text-slate-400 ml-4 tracking-widest">
              Password
            </label>
            <input 
              {...register("password")}
              type="password" 
              required
              placeholder="••••••••"
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-orange-600 focus:bg-white dark:focus:bg-slate-900 outline-none font-bold transition-all"
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full ${isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700'} text-white font-black italic uppercase py-5 rounded-2xl transition-all shadow-lg shadow-orange-600/25 active:scale-[0.98] mt-4`}
          >
            {isLoading ? "Authenticating..." : "Login Now"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs font-bold italic">
            Don't have an account?{" "}
            <Link href="/register" className="text-orange-600 hover:underline font-black">
              REGISTER
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}