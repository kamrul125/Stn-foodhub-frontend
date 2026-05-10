"use client";

import React from "react";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Globe, 
  Share2, 
  MessageCircle, 
  ArrowUpRight 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic text-orange-600 uppercase tracking-tighter">
              FoodHub<span className="text-slate-900 dark:text-white">Pro</span>
            </h2>
            <p className="text-muted-foreground font-medium italic leading-relaxed">
              Serving the best flavors in Rangpur since 2024. Your favorite meals, delivered fresh and fast to your doorstep.
            </p>
            <div className="flex gap-4">
              {/* Lucide এর জেনেরিক আইকন ব্যবহার করা হয়েছে এরর এড়াতে */}
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-slate-600 dark:text-slate-300 hover:bg-orange-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black italic uppercase mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-4 font-bold italic text-slate-500 dark:text-slate-400">
              {["Home", "Menu", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(" ", "-")}`} 
                    className="hover:text-orange-600 transition-colors flex items-center gap-1 group"
                  >
                    {link}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-black italic uppercase mb-6 tracking-tight">Support</h3>
            <ul className="space-y-4 font-bold italic text-slate-500 dark:text-slate-400">
              {["Help Center", "Order Tracking", "Refund Policy", "Terms"].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(" ", "-")}`} 
                    className="hover:text-orange-600 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-black italic uppercase mb-6 tracking-tight">Contact Us</h3>
            <ul className="space-y-5 font-bold italic text-slate-500 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-orange-50 dark:bg-orange-950/30 rounded-lg text-orange-600">
                  <MapPin size={18} />
                </div>
                <span className="text-sm">Zila Parishad Market, Rangpur, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-orange-50 dark:bg-orange-950/30 rounded-lg text-orange-600">
                  <Phone size={18} />
                </div>
                <span className="text-sm">+880 1700 000000</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-2 bg-orange-50 dark:bg-orange-950/30 rounded-lg text-orange-600">
                  <Mail size={18} />
                </div>
                <span className="text-sm">support@foodhubpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-bold italic text-slate-500">
            © {currentYear} <span className="text-orange-600">FoodHub Pro</span>. Built for STN Project Update-2.
          </p>
          <div className="flex gap-6 text-xs font-black uppercase italic text-slate-400">
            <Link href="/privacy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;