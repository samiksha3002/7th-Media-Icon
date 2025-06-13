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
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

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
      <Header />

      {/* Hero Section */}
      <HeroSection />

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
