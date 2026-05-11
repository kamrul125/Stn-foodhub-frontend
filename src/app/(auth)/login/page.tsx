"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      console.log("🚀 Login Attempting...");

      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        // ১. LocalStorage এ ডাটা রাখা (আপনার অন্যান্য কম্পোনেন্টের ব্যবহারের জন্য)
        localStorage.setItem("accessToken", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));

        // ২. কুকিতে টোকেন সেট করা (এটিই মূল সমাধান, যা আপনার proxy.ts কে শান্ত করবে)
        // মিডলওয়্যার বা প্রক্সি ফাইল লোকাল স্টোরেজ পড়তে পারে না, তাই কুকি মাস্ট।
        document.cookie = `token=${result.data.token}; path=/; max-age=86400; SameSite=Lax`;

        const rawRole = result.data?.user?.role;
        const normalizedRole = rawRole?.toLowerCase()?.trim();

        console.log("✅ Login Success. Role:", normalizedRole);

        if (normalizedRole === "admin") {
          // window.location.href ব্যবহার করা নিরাপদ কারণ এটি পেজ হার্ড রিফ্রেশ করে 
          // যাতে কুকি আপডেট হওয়ার বিষয়টি মিডলওয়্যার সাথে সাথে বুঝতে পারে।
          window.location.href = "/dashboard/admin";
        } else {
          window.location.href = "/";
        }
      } else {
        alert(result.message || "Login failed! Please check your credentials.");
      }
    } catch (err) {
      console.error("❌ Connection Error:", err);
      alert("ব্যাকএন্ড সার্ভার কি চালু আছে? চেক করুন।");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 font-sans">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
            FoodHub <span className="text-orange-600">Login</span>
          </h1>
          <p className="text-slate-500 font-bold italic text-xs mt-2 uppercase tracking-widest">
            Access your kitchen dashboard
          </p>
        </div>

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
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-orange-600 focus:bg-white dark:focus:bg-slate-900 outline-none font-bold transition-all text-slate-900 dark:text-white"
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
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-orange-600 focus:bg-white dark:focus:bg-slate-900 outline-none font-bold transition-all text-slate-900 dark:text-white"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black italic uppercase py-5 rounded-2xl transition-all shadow-lg shadow-orange-600/25 active:scale-[0.98] mt-4"
          >
            Login Now
          </button>
        </form>

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