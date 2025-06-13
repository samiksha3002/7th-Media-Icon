"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const postersData = [
  {
    id: 1,
    src: "Images/Final6.jpg",
    alt: "Billboard 1",
    description: "Parul University",
  },
  {
    id: 2,
    src: "Images/img8.jpg",
    alt: "Billboard 2",
    description: "Amazon",
  },
  {
    id: 3,
    src: "Images/Final9.jpg",
    alt: "Billboard 3",
    description: "Akash Reapeter Courses",
  },
  {
    id: 4,
    src: "Images/Final10.jpg",
    alt: "Billboard 4",
    description: "Next-gen branding with impact",
  },
];

const colSpanClasses = [
  "lg:col-span-8",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-8",
];

export default function Posters() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 py-12 px-4">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-12">
        Stunning Posters Showcase
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-14 gap-6 max-w-7xl mx-auto">
        {postersData.map((poster, index) => (
          <motion.div
            key={poster.id}
            className={`${
              colSpanClasses[index] || "lg:col-span-6"
            } relative rounded-xl overflow-hidden cursor-pointer group`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.img
              src={poster.src}
              alt={poster.alt}
              width={800}
              height={400}
              className="object-cover rounded-xl w-full h-64 sm:h-80 md:h-96 transition duration-300"
              style={{
                filter: hoveredIndex === index ? "grayscale(100%)" : "none",
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />

            {/* Hover Text (Desktop only) */}
            {hoveredIndex === index && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-xl shadow-md text-sm font-semibold text-gray-800 hidden sm:block pointer-events-none">
                {poster.description}
              </div>
            )}

            {/* Always show text on mobile for accessibility */}
            <div className="sm:hidden mt-3 text-center text-base font-medium text-gray-800">
              {poster.description}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
