"use client";

import React from "react";
import { motion } from "framer-motion";

const moreBillboards = [
  {
    id: 1,
    title: "Burj Khalifa Display",
    location: "Dubai, UAE",
    traffic: "500K+ daily viewers",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Champs-Élysées Billboard",
    location: "Paris, France",
    traffic: "350K+ daily viewers",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Marine Drive Display",
    location: "Mumbai, India",
    traffic: "420K+ daily viewers",
    image:
      "https://images.unsplash.com/photo-1549921296-3a6b80bd5f67?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Opera House Banner",
    location: "Sydney, Australia",
    traffic: "280K+ daily viewers",
    image:
      "https://images.unsplash.com/photo-1526481280690-26f591a3ed2e?auto=format&fit=crop&w=800&q=80",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const MoreLocations = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 py-16 px-6">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500"
      >
        Explore More Billboard Locations
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {moreBillboards.map((item, i) => (
          <motion.div
            key={item.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.location}</p>
              <p className="text-sm text-orange-500 mt-2 font-medium">
                {item.traffic}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MoreLocations;
