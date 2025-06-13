"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔥 Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Images/MideoVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔆 Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* ✨ Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl w-full"
        >
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-5 drop-shadow-lg">
            Your Brand, Everywhere They Look.
            <br />
            <span className="text-orange-400">Powerful Visibility</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto drop-shadow-sm px-2">
            We bring outdoor advertising to life — from billboards to LED vans —
            capturing attention where it matters most.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <Link
              href="/Footer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition text-sm sm:text-base"
            >
              Let’s Connect
            </Link>
            <Link
              href="/Project"
              className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition text-sm sm:text-base"
            >
              See Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
