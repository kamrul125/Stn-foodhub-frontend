"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft, CreditCard, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  // বাস্তব প্রজেক্টে এই ডাটা আসবে আপনার স্টেট (Zustand/Context) থেকে
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Cheese Burger",
      price: 12.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    },
    {
      id: 2,
      name: "Crispy French Fries",
      price: 4.50,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1573088693243-987cf3f1f116?w=300",
    }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 2.00;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <Link href="/foods" className="text-orange-600 font-bold flex items-center gap-2 italic hover:gap-3 transition-all">
            <ArrowLeft size={20} /> Continue Shopping
          </Link>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mt-4">
            Shopping <span className="text-orange-600">Basket</span>
          </h1>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            
            {/* Left: Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white dark:bg-slate-900 p-6 rounded-2rem shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
                  <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-2xl shadow-lg" />
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-black italic uppercase tracking-tight">{item.name}</h3>
                    <p className="text-orange-600 font-black text-lg mt-1">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 p-2 rounded-xl">
                    <button className="p-2 hover:text-orange-600 transition-colors"><Minus size={18} /></button>
                    <span className="font-bold text-lg w-6 text-center">{item.quantity}</span>
                    <button className="p-2 hover:text-orange-600 transition-colors"><Plus size={18} /></button>
                  </div>

                  <div className="text-right">
                    <p className="font-black italic text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                    <button className="text-red-500 hover:text-red-700 mt-2 flex items-center gap-1 font-bold text-sm ml-auto">
                      <Trash2 size={16} /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Order Summary */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border-t-4 border-orange-600 sticky top-32">
              <h2 className="text-2xl font-black italic uppercase mb-6 tracking-tighter">Order Summary</h2>
              
              <div className="space-y-4 font-bold italic">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Delivery Fee</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="h-px bg-slate-100 dark:bg-slate-800 my-4" />
                <div className="flex justify-between text-2xl font-black uppercase">
                  <span>Total</span>
                  <span className="text-orange-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full h-16 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black italic text-lg mt-8 shadow-lg shadow-orange-200 dark:shadow-none flex items-center justify-center gap-3">
                <CreditCard size={24} /> CHECKOUT NOW
              </Button>

              <p className="text-center text-xs text-slate-400 mt-6 font-medium italic">
                Secure payment powered by FoodHub Pay
              </p>
            </div>

          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] shadow-sm border border-dashed border-slate-200 dark:border-slate-800">
            <div className="bg-orange-100 dark:bg-orange-950/30 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-3xl font-black italic uppercase tracking-tighter">Your basket is empty</h2>
            <p className="text-slate-500 font-medium italic mt-2 mb-8">Looks like you haven't added any delicious food yet!</p>
            <Button asChild className="bg-orange-600 rounded-xl px-10 h-14 font-black italic text-white uppercase">
              <Link href="/foods">Explore Menu</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;