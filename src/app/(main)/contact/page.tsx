import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-black italic tracking-tighter mb-4">
                Get In <span className="text-orange-600">Touch</span>
              </h1>
              <p className="text-muted-foreground">
                Have a question or feedback? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Mail />, title: "Email Us", detail: "support@foodhubpro.com" },
                { icon: <Phone />, title: "Call Us", detail: "+880 1700 000000" },
                { icon: <MapPin />, title: "Visit Us", detail: "Rangpur, Bangladesh" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-orange-100 dark:bg-orange-950/30 p-4 rounded-2xl text-orange-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="h-12 rounded-xl border-none bg-white dark:bg-slate-800 shadow-sm" />
                <Input placeholder="Last Name" className="h-12 rounded-xl border-none bg-white dark:bg-slate-800 shadow-sm" />
              </div>
              <Input placeholder="Email Address" className="h-12 rounded-xl border-none bg-white dark:bg-slate-800 shadow-sm" />
              <textarea 
                placeholder="How can we help?" 
                className="w-full min-h-150px p-4 rounded-xl border-none bg-white dark:bg-slate-800 shadow-sm focus:ring-2 focus:ring-orange-600 outline-none"
              ></textarea>
              <Button className="w-full h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold gap-2 text-lg">
                <Send className="h-5 w-5" /> Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}