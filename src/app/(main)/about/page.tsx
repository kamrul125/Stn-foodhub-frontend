import React from "react";
import { Utensils, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: <Users className="h-6 w-6 text-orange-600" />, label: "Happy Customers", value: "50k+" },
    { icon: <Utensils className="h-6 w-6 text-orange-600" />, label: "Food Items", value: "150+" },
    { icon: <Award className="h-6 w-6 text-orange-600" />, label: "Best Service", value: "2026" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-black italic tracking-tighter">
            We Cook, You <span className="text-orange-600">Enjoy!</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            FoodHub Pro is Bangladesh's most loved food delivery platform, serving delicious happiness since 2024.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="p-8 rounded-2rem bg-slate-50 dark:bg-slate-900 border-none text-center group hover:bg-orange-50 transition-colors">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-black italic">{stat.value}</h3>
              <p className="text-sm font-bold text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-orange-600 rounded-[3rem] p-12 text-white text-center">
          <Heart className="h-10 w-10 mx-auto mb-6 fill-white" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-orange-50 text-lg max-w-3xl mx-auto">
            To provide the fastest delivery and the best quality food from your favorite restaurants right to your doorstep.
          </p>
        </div>
      </div>
    </div>
  );
}