"use client";

import Image from "next/image";
import { CalendarDays, User, Eye, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const campaigns = [
  {
    id: 1,
    image: "/Images/Camp1.jpg",

    client: "Hitachi",
    views: "15.2K",
    title: "Hitachi Heavy Duty Air Conditioners",
  },
  {
    id: 2,
    image: "/Images/Camp2.jpg",
    client: "Akash Institute",
    views: "22.8K",
    title: "Comeback Stronger",
  },
  {
    id: 3,
    image: "/Images/Camp33.jpg",

    client: "Zomato",
    views: "18.7K",
    title: "Zomato’s Late Night Cravings City Hoardings",
  },
];

export default function Campaigns() {
  return (
    <section className="bg-[#f4f4f4] py-20 px-4">
      {/* TOP CAMPAIGN INTRO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-14 grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <p className="text-sm font-semibold text-black mb-2 uppercase tracking-wider">
            Recent Campaigns
          </p>
          <h2 className="text-4xl font-bold text-black leading-tight">
            Captivating Hoardings <br /> That Turn Heads
          </h2>
        </div>
        <div>
          <p className="text-gray-700 text-lg leading-relaxed">
            Explore our latest billboard campaigns crafted to maximize outdoor
            visibility and spark conversation across cities.
          </p>
        </div>
      </motion.div>

      {/* CAMPAIGN CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {campaigns.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center text-sm text-gray-600 space-x-6 mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{item.client}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{item.views} Views</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-5">
                {item.title}
              </h3>
              <button className="flex items-center gap-2 bg-black text-white hover:bg-gray-900 transition font-medium px-5 py-2 rounded-full">
                View Campaign <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
