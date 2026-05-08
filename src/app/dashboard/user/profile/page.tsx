"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, User, Mail, Phone, MapPin } from "lucide-react";

export default function UserProfile() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-black mb-8 italic">My Profile</h1>

      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-40 h-40 rounded-[2.5rem] bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-4 border-orange-50">
              <User size={80} className="text-slate-300" />
              <button className="absolute bottom-2 right-2 p-2 bg-orange-600 text-white rounded-xl shadow-lg hover:bg-orange-700 transition-colors">
                <Camera size={20} />
              </button>
            </div>
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Profile Picture</p>
          </div>

          {/* Form Section */}
          <div className="grow grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Full Name</label>
              <Input defaultValue="Alex Johnson" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Email Address</label>
              <Input defaultValue="alex@example.com" disabled className="h-12 rounded-xl bg-slate-100 dark:bg-slate-700 border-none opacity-60" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Phone Number</label>
              <Input placeholder="+880 17..." className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-none" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Location</label>
              <Input defaultValue="Dhanmondi, Dhaka" className="h-12 rounded-xl bg-slate-50 dark:bg-slate-800 border-none" />
            </div>
            
            <div className="md:col-span-2 pt-4">
              <Button className="bg-orange-600 hover:bg-orange-700 h-12 px-8 rounded-xl font-bold shadow-lg shadow-orange-100">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}