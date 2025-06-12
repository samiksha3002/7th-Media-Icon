import { useEffect, useState } from "react";
import Head from "next/head";
import Preloader from "./components/Preloader";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Project from "./components/Project";
import CompanyTrustSection from "./components/CompanyTrustSection";
import Posters from "./components/Posters";
import Customer from "./components/Customer";
import Location from "./components/Location";

const menuItems = [
  { name: "Home", submenu: ["Subhome 1", "Subhome 2"] },
  { name: "Project", submenu: ["Project A", "Project B"] },
  { name: "Services", submenu: ["Service 1", "Service 2"] },
  { name: "Contact" },
  { name: "About Us" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Preloader duration
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div>
      <Head>
        <title>7th Media Icon</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pap1b6ww+pAfszUgAb4+..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      {/* Header */}
      <header className="bg-white text-black px-8 py-4 flex justify-between items-center shadow-md z-50 relative">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <img src="/images/7th.png" alt="logo" className="h-20" />
        </div>

        {/* Navbar */}
        <nav className="flex items-center space-x-6 text-xl font-medium">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group relative cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <span className="flex items-center space-x-1">
                <span>{item.name}</span>
                {item.submenu && (
                  <i className="fas fa-chevron-down text-xs ml-1" />
                )}
              </span>
              <span className="absolute top-full left-0 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>

              {activeIndex === index && item.submenu && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-20">
                  {item.submenu.map((subItem) => (
                    <div
                      key={subItem}
                      className="px-4 py-2 text-black hover:bg-yellow-400 hover:text-white cursor-pointer"
                    >
                      {subItem}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl text-black">
          <i className="fab fa-instagram hover:text-yellow-400 transition" />
          <i className="fab fa-linkedin hover:text-yellow-400 transition" />
          <i className="fab fa-facebook hover:text-yellow-400 transition" />
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/Images/Hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light">
            Reach <strong className="font-bold">Max</strong>
          </h1>
          <h1 className="text-5xl md:text-7xl font-light">
            as a{" "}
            <span className="text-yellow-400 font-extrabold">Billboard</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-light">Door</h1>
        </div>
      </section>

      {/* Other Sections */}
      <Features />
      <Customer />
      <Location />
      <Posters />
      <CompanyTrustSection />
      <Project />
      <Footer />
    </div>
  );
}
