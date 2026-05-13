"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  
  // ১. লগইন রোল স্টেট (ডিফল্ট 'user')
  const [loginRole, setLoginRole] = useState<"user" | "admin">("user");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      console.log(`🚀 Attempting ${loginRole} login via:`, `${API_URL}/auth/login`);

      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        localStorage.setItem("accessToken", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        document.cookie = `token=${result.data.token}; path=/; max-age=86400; SameSite=Lax`;

        const rawRole = result.data?.user?.role;
        const normalizedRole = rawRole?.toLowerCase()?.trim();

        setTimeout(() => {
          if (normalizedRole === "admin") {
            window.location.href = "/dashboard/admin";
          } else {
            window.location.href = "/";
          }
        }, 100);
      } else {
        alert(result.message || "Login failed!");
        setIsLoading(false);
      }
    } catch (err) {
      console.error("❌ Connection Error:", err);
      alert("সার্ভার কানেকশন এরর!");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4 font-sans text-slate-900 dark:text-white">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            FoodHub <span className="text-orange-600">Login</span>
          </h1>
        </div>

        {/* ২. রোল সিলেক্টর ট্যাব */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl mb-8">
          <button 
            type="button"
            onClick={() => setLoginRole("user")}
            className={`flex-1 py-3 text-[10px] font-black uppercase rounded-xl transition-all ${loginRole === "user" ? "bg-white dark:bg-slate-700 shadow-md text-orange-600" : "text-slate-400"}`}
          >
            User Access
          </button>
          <button 
            type="button"
            onClick={() => setLoginRole("admin")}
            className={`flex-1 py-3 text-[10px] font-black uppercase rounded-xl transition-all ${loginRole === "admin" ? "bg-white dark:bg-slate-700 shadow-md text-orange-600" : "text-slate-400"}`}
          >
            Admin Access
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase italic text-slate-400 ml-4 tracking-widest">
              {loginRole === "admin" ? "Admin Identity" : "User Email Address"}
            </label>
            <input 
              {...register("email")}
              type="email" 
              required
              // ৩. ডায়নামিক প্লেসহোল্ডার লজিক
              placeholder={loginRole === "admin" ? "admin@foodhub.com" : "customer@example.com"}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-orange-600 focus:bg-white dark:focus:bg-slate-900 outline-none font-bold transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-black uppercase italic text-slate-400 ml-4 tracking-widest">
              Secret Password
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
            className={`w-full ${isLoading ? 'bg-slate-400' : 'bg-orange-600 hover:bg-orange-700'} text-white font-black italic uppercase py-5 rounded-2xl transition-all shadow-lg shadow-orange-600/25 active:scale-[0.98] mt-4`}
          >
            {isLoading ? "Authenticating..." : `Login as ${loginRole}`}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs font-bold italic">
            New to FoodHub?{" "}
            <Link href="/register" className="text-orange-600 hover:underline font-black">
              REGISTER
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}