"use client";
import React from "react";
import { Mail, ShieldCheck, UserCog, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const users = [
  { id: 1, name: "Sakib Ahmed", email: "sakib@foodhub.com", role: "Admin", status: "Active" },
  { id: 2, name: "Tanvir Hossain", email: "tanvir@gmail.com", role: "User", status: "Active" },
  { id: 3, name: "Nayeem Islam", email: "nayeem@outlook.com", role: "User", status: "Inactive" },
];

export default function ManageUsers() {
  return (
    <div className="p-8 bg-white dark:bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter uppercase">
              Manage <span className="text-orange-600">Users</span>
            </h1>
            <p className="text-muted-foreground font-medium italic">Control access and user roles.</p>
          </div>
          
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors" size={18} />
            <Input placeholder="Search users by email..." className="h-12 pl-12 rounded-xl bg-slate-50 dark:bg-slate-900 border-none shadow-sm" />
          </div>
        </div>

        {/* User Table */}
        <div className="bg-slate-50 dark:bg-slate-900 rounded-2rem overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800/50">
                <th className="p-6 font-black italic text-sm uppercase tracking-widest">User Info</th>
                <th className="p-6 font-black italic text-sm uppercase tracking-widest">Role</th>
                <th className="p-6 font-black italic text-sm uppercase tracking-widest">Status</th>
                <th className="p-6 font-black italic text-sm uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-white dark:hover:bg-slate-800/80 transition-colors group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-orange-100 dark:bg-orange-950/30 flex items-center justify-center text-orange-600 font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">{user.name}</h4>
                        <p className="text-sm text-muted-foreground flex items-center gap-1"><Mail size={12} /> {user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black italic uppercase ${user.role === 'Admin' ? 'bg-orange-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${user.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                      <span className="text-sm font-bold">{user.status}</span>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-orange-50 hover:text-orange-600">
                        <UserCog size={18} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-red-50 hover:text-red-600">
                        <Trash2 size={18} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}