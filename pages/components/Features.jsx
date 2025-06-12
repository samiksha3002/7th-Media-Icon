"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const googleFontLink = (
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
    rel="stylesheet"
  />
);

const features = [
  {
    image: "/Images/billboard.jpg",
    title: "Billboard Targeting",
    description:
      "Reach more customers with targeted billboard locations tailored for your business.",
  },
  {
    image: "/Images/IBS.jpg",
    title: "Creative Campaigns",
    description:
      "Design eye-catching campaigns that capture attention and boost your brand presence.",
  },
  {
    image: "/Images/pole.jpg",
    title: "Performance Analytics",
    description:
      "Measure impact with detailed analytics and optimize your marketing strategy.",
  },
];

export default function Features() {
  return (
    <>
      {googleFontLink}
      <section className="relative bg-gray-100 py-24 px-6 sm:px-16 overflow-hidden">
        {/* Background shapes */}
        <svg
          className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] opacity-10 text-indigo-400"
          fill="none"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] opacity-10 text-pink-400"
          fill="none"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="400" height="400" fill="currentColor" rx="200" />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <p className="text-indigo-600 text-lg font-semibold tracking-wide mb-3 uppercase">
            Our Features
          </p>
          <h2
            className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 max-w-4xl mx-auto mb-16"
            style={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.1 }}
          >
            Supercharge Your Business with Billboards
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            {features.map((item, index) => (
              <FeatureCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

function FeatureCard({ image, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-[390px] rounded-3xl shadow-xl bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, duration: 0.7 }}
    >
      <div className="relative w-full h-[450px] rounded-t-3xl overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700"
          animate={{ filter: isHovered ? "grayscale(100%)" : "grayscale(0%)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl pointer-events-none" />
        {/* Wave animation overlay */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full z-10 wave-animation rounded-t-3xl pointer-events-none"
          initial={{ x: "-100%", y: "100%", opacity: 0.3, rotate: -20 }}
          animate={
            isHovered
              ? {
                  x: "100%",
                  y: "-100%",
                  opacity: 0.8,
                  background:
                    "linear-gradient(135deg, rgba(128,128,128,0.3), black)",
                }
              : {
                  x: "-100%",
                  y: "100%",
                  opacity: 0.3,
                  background:
                    "linear-gradient(135deg, rgba(128,128,128,0.3), transparent)",
                }
          }
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="p-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3
          className="text-2xl font-extrabold text-gray-900"
          style={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.2 }}
        >
          {title}
        </h3>
        <p className="text-gray-600 mt-3 text-base leading-relaxed">
          {description}
        </p>
      </motion.div>

      <style jsx>{`
        .wave-animation {
          background: linear-gradient(
            135deg,
            rgba(128, 128, 128, 0.3),
            transparent
          );
          mix-blend-mode: multiply;
        }
      `}</style>
    </motion.div>
  );
}
