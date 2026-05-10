"use client"
import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ShoppingBag, User, Settings, PieChart, Utensils } from 'lucide-react';

const Sidebar = ({ role = "user" }) => {
  const menuItems = {
    user: [
      { name: "Overview", icon: LayoutDashboard, href: "/dashboard" },
      { name: "My Orders", icon: ShoppingBag, href: "/dashboard/orders" },
      { name: "Profile", icon: User, href: "/dashboard/profile" },
    ],
    admin: [
      { name: "Admin Stats", icon: PieChart, href: "/dashboard" },
      { name: "Manage Food", icon: Utensils, href: "/dashboard/manage-food" },
      { name: "All Orders", icon: ShoppingBag, href: "/dashboard/all-orders" },
      { name: "Users", icon: User, href: "/dashboard/users" },
      { name: "Settings", icon: Settings, href: "/dashboard/settings" },
    ]
  };

  const currentMenu = role === "admin" ? menuItems.admin : menuItems.user;

  return (
    <aside className="w-64 min-h-screen bg-slate-50 dark:bg-slate-900 border-r border-border p-6 hidden md:block">
      <div className="mb-10 px-2">
        <h2 className="text-2xl font-black italic text-orange-600">FoodHub<span className="text-foreground">Pro</span></h2>
      </div>
      <nav className="space-y-2">
        {currentMenu.map((item) => (
          <Link key={item.name} href={item.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:text-orange-600 transition-all font-bold italic">
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;