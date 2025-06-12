"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const postersData = [
  {
    id: 1,
    src: "Images/img6.jpg",
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
    src: "Images/img10.jpg",
    alt: "Billboard 3",
    description: "Akash Reapeter Courses",
  },
  {
    id: 4,
    src: "Images/img5.jpg",
    alt: "Billboard 4",
    description: "Next-gen branding with impact",
  },
];

const colSpanClasses = ["col-span-8", "col-span-6", "col-span-6", "col-span-8"];

export default function Posters() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 py-12 px-4">
      <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-12">
        Stunning Posters Showcase
      </h2>

      <div className="grid grid-cols-14 gap-6 max-w-7xl mx-auto">
        {postersData.map((poster, index) => (
          <motion.div
            key={poster.id}
            className={`${
              colSpanClasses[index] || "col-span-6"
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
              className="object-cover rounded-xl w-full h-[400px] transition-filter duration-300"
              style={{
                filter: hoveredIndex === index ? "grayscale(100%)" : "none",
              }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.03, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            {hoveredIndex === index && (
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  padding: "14px 24px",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  maxWidth: "80%",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "1rem",
                  color: "#1a202c",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {poster.description}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
