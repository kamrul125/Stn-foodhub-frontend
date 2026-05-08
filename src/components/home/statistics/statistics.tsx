"use client";
import { Users, Utensils, Truck, Star } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { id: 1, label: "Happy Customers", value: "10,000+", icon: Users },
  { id: 2, label: "Expert Chefs", value: "150+", icon: Utensils },
  { id: 3, label: "Avg Delivery Time", value: "20 min", icon: Truck },
  { id: 4, label: "Customer Rating", value: "4.9/5", icon: Star },
];

const Statistics = () => {
  return (
    <section className="py-16 bg-orange-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center text-center text-white"
            >
              <div className="p-4 bg-white/20 rounded-full mb-4">
                <stat.icon size={32} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-orange-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics; // এই লাইনটি অবশ্যই থাকতে হবে