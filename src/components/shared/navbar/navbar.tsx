"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, User, LogOut, LayoutDashboard, ShoppingBag, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../theme-toggle/theme-toggle";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Foods", href: "/foods" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-orange-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
             <Utensils className="text-white h-5 w-5" />
          </div>
          <span className="text-2xl font-black italic tracking-tighter">
            FoodHub<span className="text-orange-600">Pro</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="transition-colors hover:text-orange-600 text-foreground/70 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-2px bg-orange-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          
          {/* Theme Toggler - এখানে কালার চেঞ্জ হবে */}
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-full transition-colors duration-500">
            <ThemeToggle />
          </div>

          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              {/* My Orders / Cart Icon - Linked and Fixed */}
              <Link href="/dashboard/user/my-orders">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-orange-100 hover:text-orange-600 relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-orange-600 rounded-full"></span>
                </Button>
              </Link>
              
              {/* User Account Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full border-2 border-orange-600/20 hover:border-orange-600 transition-all overflow-hidden focus-visible:ring-orange-600">
                    <User className="h-5 w-5 text-orange-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 p-2 rounded-1.5rem shadow-2xl border-slate-100 dark:border-slate-800">
                  <DropdownMenuLabel className="font-black italic px-4 py-3 uppercase text-xs tracking-widest text-slate-500">Account Overview</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem asChild className="rounded-xl focus:bg-orange-50 dark:focus:bg-orange-950/30 focus:text-orange-600 py-3 cursor-pointer">
                    <Link href="/dashboard/admin" className="flex items-center font-bold">
                      <LayoutDashboard className="mr-3 h-4 w-4" /> Admin Dashboard
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem asChild className="rounded-xl focus:bg-orange-50 dark:focus:bg-orange-950/30 focus:text-orange-600 py-3 cursor-pointer">
                    <Link href="/dashboard/user/profile" className="flex items-center font-bold">
                      <User className="mr-3 h-4 w-4" /> My Profile
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild className="rounded-xl focus:bg-orange-50 dark:focus:bg-orange-950/30 focus:text-orange-600 py-3 cursor-pointer">
                    <Link href="/dashboard/user/my-orders" className="flex items-center font-bold">
                      <ShoppingBag className="mr-3 h-4 w-4" /> Order History
                    </Link>
                  </DropdownMenuItem>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-red-600 font-bold rounded-xl focus:bg-red-50 dark:focus:bg-red-950/20 focus:text-red-600 py-3 cursor-pointer" 
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <LogOut className="mr-3 h-4 w-4" /> Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login">
                <Button variant="ghost" className="font-bold">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-orange-600 hover:bg-orange-700 rounded-xl font-bold text-white shadow-lg shadow-orange-100 dark:shadow-none transition-all">
                  Get Started
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 text-orange-600" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-6 space-y-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl font-black italic border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center group"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <div className="h-2 w-2 rounded-full bg-orange-600 opacity-100" />
              </Link>
            ))}
          </nav>
          
          <div className="pt-4">
            {!isLoggedIn ? (
              <div className="grid grid-cols-2 gap-4">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-2">Login</Button>
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button className="w-full h-12 bg-orange-600 rounded-xl font-bold text-white">Register</Button>
                </Link>
              </div>
            ) : (
              <Link href="/dashboard/admin" onClick={() => setIsOpen(false)}>
                <Button className="w-full h-14 bg-slate-900 dark:bg-orange-600 rounded-2xl font-black italic text-white flex items-center justify-center gap-2 tracking-tighter">
                  <LayoutDashboard size={20} /> GO TO DASHBOARD
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;