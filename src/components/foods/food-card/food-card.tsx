"use client";
import React from "react";
import { Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FoodCardProps {
  food: {
    id: string;
    title: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    deliveryTime: string;
    location: string;
  };
}

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className="group bg-card border rounded-2xl overflow-hidden flex flex-col h-105 hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <img
          src={food.image}
          alt={food.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          // ইমেজ লোড না হলে এই হ্যান্ডলারটি কাজ করবে
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500";
          }}
        />
        <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 text-sm font-bold text-orange-600">
          <Star size={14} className="fill-orange-600" />
          {food.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col grow">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{food.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {food.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 mt-auto">
          <div className="flex items-center gap-1 text-orange-600 font-medium">
            <Clock size={14} />
            <span>{food.deliveryTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span>{food.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t mt-auto">
          <span className="text-lg font-bold text-orange-600">${food.price}</span>
          <Link href={`/foods/${food.id}`}>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 rounded-lg h-9 px-4">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;