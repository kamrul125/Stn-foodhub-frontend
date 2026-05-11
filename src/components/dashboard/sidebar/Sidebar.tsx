"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingBag, User, Settings, PieChart, Utensils } from 'lucide-react';

const Sidebar = ({ role = "admin" }) => {
  const pathname = usePathname();

  const menuItems = {
    admin: [
      { name: "Dashboard", icon: PieChart, href: "/dashboard/admin" },
      { name: "Manage Food", icon: Utensils, href: "/dashboard/admin/manage-foods" },
      { name: "Orders", icon: ShoppingBag, href: "/dashboard/admin/orders" },
      { name: "Users", icon: User, href: "/dashboard/admin/users" },
      { name: "Settings", icon: Settings, href: "/dashboard/admin/settings" },
    ]
  };

  return (
    <aside className="w-64 h-full bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 p-6 flex flex-col">
      <div className="mb-10 px-2 flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-black italic">F</div>
        <h2 className="text-xl font-black italic tracking-tighter text-orange-600 uppercase">
          FoodHub<span className="text-slate-900 dark:text-white">Pro</span>
        </h2>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.admin.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`flex items-center gap-3 p-3 rounded-2xl transition-all font-bold italic text-sm ${
                isActive ? "bg-orange-600 text-white" : "text-slate-500 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;