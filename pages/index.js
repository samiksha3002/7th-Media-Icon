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
    const timer = setTimeout(() => setLoading(false), 3700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}

      {!loading && (
        <main className="animate-fadeIn transition-opacity duration-700 ease-out">
          <Header />

          <section id="home">
            <HeroSection />
          </section>

          <section id="media">
            <Features />
          </section>

          <Customer />
          <Posters />
          <CompanyTrustSection />
          <Location />

          <section id="project">
            <Project />
          </section>

          <section id="contact">
            <Footer />
          </section>
        </main>
      )}
    </>
  );
}
