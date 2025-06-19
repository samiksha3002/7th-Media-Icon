"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const logos = [
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342963/amazon_qkr00o.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342961/samsung_knpkvp.webp",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342961/tanishq_rjrmg4.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342960/mp_birla_cement_deeado.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342960/patanjali_vsw3ur.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342960/big_basket_qvc1gv.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342959/rokde_jewellers_muqfln.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342959/Mahindra_gisyaz.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342959/mc_donald_b6rrjk.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342958/haldirams_logo_m0htgm.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342957/au_small_finance_bank_gl1adu.png",
  "https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342956/aakash_institute_x6zpbp.jpg",
];

export default function CompanyTrustSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-[#f4f4f4] py-16 px-6 sm:px-12 relative overflow-hidden">
      {/* Animated Title */}
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12 text-gray-900 text-2xl sm:text-3xl font-bold"
      >
        Join the 250+ Companies Trusting Maxline
      </motion.h2>

      {/* Logo Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="overflow-hidden mb-16"
      >
        <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
          w
          {[...logos, ...logos].map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`Company logo ${index}`}
              width={120}
              height={60}
              className="h-14 w-auto object-contain transition duration-300"
            />
          ))}
        </div>
      </motion.div>

      {/* Video/Image Preview with Zoom Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden shadow-xl group backdrop-blur-md bg-white/10 border border-white/20"
      >
        <Image
          src="https://res.cloudinary.com/dl4nqxxfp/image/upload/v1750342963/created_b0mvyn.jpg"
          alt="Video Preview"
          width={1200}
          height={600}
          priority
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Play Button */}
        <motion.button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-full shadow-xl bg-white/40 backdrop-blur-md border border-white/30 transition"
        >
          <Play className="w-7 h-7 text-black" />
        </motion.button>

        {/* Tooltip on Hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded-md shadow"
          >
            Watch our journey
          </motion.div>
        )}
      </motion.div>

      {/* Marquee animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
