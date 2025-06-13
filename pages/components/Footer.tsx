"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white rounded-t-[40px] px-6 py-12 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Left section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/3"
        >
          <div className="flex items-center gap-2 text-xl font-bold mb-4">
            <span className="text-yellow-400 text-2xl">🎲</span>
            <span>7th Media Icon</span>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            It gives us immense pleasure to introduce ourselves among the top
            Business Partners in Outdoor Advertising in Maharashtra. Over 15
            years, we have built a strong reputation as a trusted provider in
            this space.
          </p>
          <div className="flex gap-3 mb-6">
            {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram].map(
              (Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white text-black p-2 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-500 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.div>
              )
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-yellow-400 space-y-3 text-base font-semibold"
          >
            {[
              { icon: "📞", text: "+91 7709006859" },
              { icon: "✉", text: "mediaicon07@gmail.com" },
              { icon: "📍", text: "Nagpur, Maharashtra, India" },
            ].map((item, index) => (
              <motion.p
                key={index}
                whileHover={{
                  scale: 1.05,
                  color: "#facc15",
                  textShadow: "0 0 8px #facc15",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="text-xl">{item.icon}</span> {item.text}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/4"
        >
          <h3 className="text-lg font-bold mb-4 tracking-wide">About</h3>
          <ul className="text-gray-300 space-y-2">
            <li>Leadership</li>
            <li>Diversity</li>
            <li>Partners</li>
            <li>ESG</li>
          </ul>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-md border border-yellow-400 rounded-[32px] p-6 sm:p-8 w-full lg:w-[110%] max-w-full shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transition-shadow"
        >
          <h3 className="text-xl font-bold mb-6">Send Now</h3>
          <form className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full sm:w-1/2 p-4 rounded-lg bg-[#1c1c1c] text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full sm:w-1/2 p-4 rounded-lg bg-[#1c1c1c] text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full sm:w-1/2 p-4 rounded-lg bg-[#1c1c1c] text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full sm:w-1/2 p-4 rounded-lg bg-[#1c1c1c] text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-yellow-400 outline-none transition"
              />
            </div>
            <textarea
              placeholder="Write Message"
              className="w-full p-4 rounded-lg bg-[#1c1c1c] text-white border border-gray-600 placeholder-gray-400 h-28 focus:ring-2 focus:ring-yellow-400 outline-none transition resize-none"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-4 w-full rounded-full transition"
            >
              Send Message →
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400"
      >
        © 2025 7th Media Icon. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
