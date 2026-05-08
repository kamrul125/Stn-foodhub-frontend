"use client";
import React, { useState } from "react";
import { 
  CheckCircle, 
  Clock, 
  Truck, 
  MoreVertical, 
  Eye, 
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// ডামি অর্ডার ডাটা
const orders = [
  { id: "#ORD-9921", customer: "Alex Johnson", item: "Double Cheese Burger", price: 25.99, status: "Pending", date: "12 May, 2026" },
  { id: "#ORD-9922", customer: "Sarah Khan", item: "Pepperoni Pizza", price: 18.50, status: "On Way", date: "12 May, 2026" },
  { id: "#ORD-9923", customer: "Tanvir Ahmed", item: "Mutton Biryani", price: 45.00, status: "Delivered", date: "11 May, 2026" },
];

const ManageOrders = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black italic">Manage Orders</h1>
          <p className="text-muted-foreground text-sm">Monitor and update all customer orders from here</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-2xl gap-2 font-bold border-none shadow-sm bg-white dark:bg-slate-900">
            <Filter size={18} /> Filter
          </Button>
          <Button className="bg-orange-600 hover:bg-orange-700 rounded-2xl font-bold shadow-lg shadow-orange-100">
            Export Report
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <Input 
          placeholder="Search by Order ID or Customer..." 
          className="h-12 pl-12 rounded-2xl bg-white dark:bg-slate-900 border-none shadow-sm"
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-50 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Order ID</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Customer</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Price</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Status</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground">Date</th>
                <th className="p-6 text-xs font-black uppercase tracking-widest text-muted-foreground text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-6 font-bold text-sm">{order.id}</td>
                  <td className="p-6">
                    <div className="font-bold text-sm text-slate-800 dark:text-slate-200">{order.customer}</div>
                    <div className="text-[10px] text-muted-foreground">{order.item}</div>
                  </td>
                  <td className="p-6 font-black text-orange-600">${order.price}</td>
                  <td className="p-6">
                    <Badge className={`rounded-full px-3 py-1 font-bold text-[10px] uppercase tracking-wider ${
                      order.status === "Pending" ? "bg-orange-100 text-orange-600 hover:bg-orange-100" :
                      order.status === "On Way" ? "bg-blue-100 text-blue-600 hover:bg-blue-100" :
                      "bg-green-100 text-green-600 hover:bg-green-100"
                    }`}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="p-6 text-xs font-medium text-slate-500">{order.date}</td>
                  <td className="p-6 text-right">
                    <Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-100">
                      <Eye size={18} className="text-slate-600" />
                    </Button>
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

export default ManageOrders;