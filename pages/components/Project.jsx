"use client";

import Image from "next/image";
import { CalendarDays, User, Eye, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const campaigns = [
  {
    id: 1,
    image: "/Images/Camp1.jpg",
    client: "Hitachi",
    views: "15.2K",
    title: "Hitachi Heavy Duty Air Conditioners",
    date: "May 20, 2025",
    gallery: [
      "/Images/Camp1.jpg",
      "/Images/Camp1_2.jpg",
      "/Images/Camp1_3.jpg",
    ],
    description:
      "Our campaign for Hitachi highlighted the power and efficiency of their heavy-duty air conditioners across metro city billboards, driving awareness and foot traffic to their retail locations.",
  },
  {
    id: 2,
    image: "/Images/Camp2.jpg",
    client: "Akash Institute",
    views: "22.8K",
    title: "Comeback Stronger",
    date: "June 3, 2025",
    gallery: ["/Images/Camp2.jpg", "/Images/Camp2_2.jpg"],
    description:
      "Akash Institute’s ‘Comeback Stronger’ initiative encouraged students to bounce back with confidence post-pandemic. The visuals were placed on high-traffic outdoor spots in educational hubs.",
  },
  {
    id: 3,
    image: "/Images/Camp33.jpg",
    client: "Zomato",
    views: "18.7K",
    title: "Zomato’s Late Night Cravings",
    date: "April 28, 2025",
    gallery: [
      "/Images/Camp33.jpg",
      "/Images/Camp3_2.jpg",
      "/Images/Camp3_3.jpg",
      "/Images/Camp3_4.jpg",
    ],
    description:
      "For Zomato, we targeted the nightlife demographic with witty creatives designed to catch attention during late-night drives and urban food streets.",
  },
];

export default function Campaigns() {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  return (
    <section className="bg-[#f4f4f4] pt-10 pb-20 px-4">
      {/* INTRO */}
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

      {/* CARDS */}
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
              <button
                onClick={() => setSelectedCampaign(item)}
                className="flex items-center gap-2 bg-black text-white hover:bg-gray-900 transition font-medium px-5 py-2 rounded-full"
              >
                View Campaign <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCampaign && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedCampaign(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                {selectedCampaign.title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {selectedCampaign.client}
              </p>
              <p className="text-gray-700 mb-6">
                {selectedCampaign.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedCampaign.gallery.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt={`Gallery image ${i + 1}`}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
