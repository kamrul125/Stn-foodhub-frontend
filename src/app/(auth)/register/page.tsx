"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

  const handleGoogleLogin = () => {
    // এখানে গুগল অথেনটিকেশন লজিক বা Firebase/NextAuth কল হবে
    console.log("Redirecting to Google Auth...");
    alert("গুগল লগইন ফিচারটি ব্যাকএন্ডে সেটআপ করা থাকলে এটি কাজ করবে!");
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    // ... আপনার আগের রেজিস্ট্রেশন লজিক
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 pt-20">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-slate-900 dark:text-white">
            FoodHub <span className="text-orange-600">Join</span>
          </h1>
          <p className="text-slate-500 font-bold italic text-[10px] mt-2 uppercase tracking-widest">
            Create an account to start ordering
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Inputs (Full Name, Email, Password) - আপনার আগের কোড অনুযায়ী */}
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase italic text-slate-400 ml-4 tracking-widest">Full Name</label>
            <input {...register("name")} type="text" required placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-orange-600 outline-none font-bold transition-all" />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase italic text-slate-400 ml-4 tracking-widest">Email Address</label>
            <input {...register("email")} type="email" required placeholder="chef@foodhub.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-orange-600 outline-none font-bold transition-all" />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase italic text-slate-400 ml-4 tracking-widest">Password</label>
            <input {...register("password")} type="password" required placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-orange-600 outline-none font-bold transition-all" />
          </div>

          <button 
            type="submit"
            className="w-full bg-orange-600 text-white font-black italic uppercase py-5 rounded-2xl transition-all shadow-lg shadow-orange-600/25 active:scale-[0.98] mt-2"
          >
            Register Now
          </button>
        </form>

        {/* --- বাটন দুটির মাঝে "OR" সেকশন --- */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-200 dark:border-slate-800"></span></div>
          <div className="relative flex justify-center text-[10px] uppercase font-black italic tracking-widest"><span className="bg-white dark:bg-slate-900 px-4 text-slate-400">Or Join With</span></div>
        </div>

        {/* --- গুগল বাটন --- */}
        <button 
          onClick={handleGoogleLogin}
          type="button"
          className="w-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-white font-black italic uppercase py-4 rounded-2xl transition-all flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-[0.98]"
        >
          {/* গুগল আইকন (SVG) */}
          <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs font-bold italic">
            Already have an account? <Link href="/login" className="text-orange-600 hover:underline font-black">LOGIN</Link>
          </p>
        </div>
      </div>
    </div>
  );
}