"use client";

import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Project from "./components/Project";
import CompanyTrustSection from "./components/CompanyTrustSection";
import Posters from "./components/Posters";
import Customer from "./components/Customer";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Total wait time: 3.7s to allow preloader fadeout
    const timer = setTimeout(() => setLoading(false), 3700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      {!loading && (
        <main className="animate-fadeIn transition-opacity duration-700 ease-out">
          <Header />
          <HeroSection />
          <Features />

          <Customer />
          <Posters />
          <CompanyTrustSection />
          <Location />
          <Project />

          <Footer />
        </main>
      )}
    </>
  );
}
