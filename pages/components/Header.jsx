"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const menuItems = [
  { name: "Home", submenu: ["Subhome 1", "Subhome 2"] },
  { name: "Project", submenu: ["Project A", "Project B"] },
  { name: "Services", submenu: ["Service 1", "Service 2"] },
  { name: "Contact" },
  { name: "About Us" },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // scroll down
      } else {
        setShowHeader(true); // scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white shadow-md fixed w-full top-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/7th.png" alt="Logo" className="h-14 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-base font-medium text-gray-800">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center space-x-1 cursor-pointer hover:text-yellow-500 transition">
                <span>{item.name}</span>
                {item.submenu && <ChevronDown className="w-4 h-4" />}
              </div>
              <div className="absolute top-full left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              {activeIndex === index && item.submenu && (
                <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md z-30 py-2">
                  {item.submenu.map((sub) => (
                    <div
                      key={sub}
                      className="px-4 py-2 hover:bg-yellow-400 hover:text-white cursor-pointer transition"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-4 text-xl text-black">
          <i className="fab fa-instagram hover:text-yellow-400 transition" />
          <i className="fab fa-linkedin hover:text-yellow-400 transition" />
          <i className="fab fa-facebook hover:text-yellow-400 transition" />
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden focus:outline-none"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white w-full transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen pb-6" : "max-h-0"
        }`}
      >
        <div className="px-4">
          {menuItems.map((item, index) => (
            <div key={item.name} className="border-b py-3">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setMobileDropdown(mobileDropdown === index ? null : index)
                }
              >
                <span className="font-medium text-gray-800">{item.name}</span>
                {item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.submenu && mobileDropdown === index && (
                <div className="pl-4 pt-2 space-y-2">
                  {item.submenu.map((sub) => (
                    <div
                      key={sub}
                      className="text-sm text-gray-700 hover:text-yellow-500 transition"
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex justify-center space-x-5 pt-5 text-2xl text-black">
            <i className="fab fa-instagram hover:text-yellow-400 transition" />
            <i className="fab fa-linkedin hover:text-yellow-400 transition" />
            <i className="fab fa-facebook hover:text-yellow-400 transition" />
          </div>
        </div>
      </div>
    </header>
  );
}
