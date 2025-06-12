"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link"; // ✅ Correct import for Next.js

const billboards = [
  {
    id: 1,
    title: "Times Square, NYC",
    location: "Nagpur, Maharashtra",
    traffic: "250K+ daily viewers",
    image: "Images/img8.jpg",
  },
  {
    id: 2,
    title: "Shibuya Crossing",
    location: "Nagpur, Maharashtra",
    traffic: "300K+ daily viewers",
    image: "Images/img3.jpg",
  },
  {
    id: 3,
    title: "Piccadilly Circus",
    location: "Nagpur, Maharashtra",
    traffic: "200K+ daily viewers",
    image: "Images/img4.jpg",
  },
  {
    id: 4,
    title: "Downtown LA Billboard",
    location: "Nagpur, Maharashtra",
    traffic: "180K+ daily viewers",
    image: "Images/img1.jpg",
  },
];

const TiltCard = ({ image, title, location, traffic }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [50, -50], [-15, 15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const posX = event.clientX - rect.left - rect.width / 2;
    const posY = event.clientY - rect.top - rect.height / 2;
    x.set(posX);
    y.set(posY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
        willChange: "transform",
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      tabIndex={0}
      className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-3xl shadow-lg shadow-yellow-500/50 cursor-pointer transition-transform duration-300"
    >
      <div className="overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 brightness-90 hover:brightness-110"
          loading="lazy"
          draggable={false}
        />
      </div>
      <div className="p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl">
        <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
        <p className="text-yellow-200 font-semibold">{location}</p>
        <p className="text-yellow-100 mt-2 text-sm">{traffic}</p>
      </div>
    </motion.div>
  );
};

const Location = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        Billboard Locations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {billboards.map(({ id, image, title, location, traffic }) => (
          <TiltCard
            key={id}
            image={image}
            title={title}
            location={location}
            traffic={traffic}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mt-12"
      >
        <Link href="/more-locations">
          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#facc15",
              color: "#1f2937",
              boxShadow: "0 0 15px rgba(250,204,21,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-yellow-300"
          >
            See More Locations →
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Location;
