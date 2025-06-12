"use client";

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

const stats = [
  { id: 1, end: 500, suffix: "+", label: "Number of Medias" },
  { id: 2, end: 250, suffix: "+", label: "Number of Clients" },
  { id: 3, end: 400, suffix: "+", label: "Complete campaigns" },
  { id: 4, end: 15, suffix: "+", label: "Cities Covered" },
];

const Customer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) setStartCount(true);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-orange-100 to-yellow-200 py-20 px-6 md:px-16 max-w-7xl mx-auto rounded-3xl shadow-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-widest text-orange-500 font-medium">
          Latest Gallery
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent mt-2">
          Cybsecure - The Billboard Revolution
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Image with Zoom */}
        <motion.div
          className="md:w-1/2 transform transition-transform duration-500 hover:scale-105"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/Images/Clientsimg.jpg"
              alt="Project Preview"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </motion.div>

        {/* Right Stats 3D Cards */}
        <motion.div
          className="md:w-1/2 grid grid-cols-2 gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {stats.map(({ id, end, suffix, label }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 text-center shadow-xl border border-orange-100 transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="text-4xl font-bold text-orange-600 drop-shadow">
                {startCount && (
                  <CountUp
                    start={0}
                    end={end}
                    duration={2.5}
                    separator=","
                    formattingFn={(value) => {
                      if (end >= 1_000_000)
                        return (value / 1_000_000).toFixed(0) + "M" + suffix;
                      if (end >= 1_000)
                        return (value / 1_000).toFixed(0) + "k" + suffix;
                      return value + suffix;
                    }}
                  />
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-gray-700">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Customer;
