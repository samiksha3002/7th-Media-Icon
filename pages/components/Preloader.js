"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Start fade out after 3s

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white flex justify-center items-center z-50 transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Image
        src="/Images/7th.png"
        alt="7th Logo"
        width={120}
        height={120}
        className="rounded-xl animate-pulse"
      />
    </div>
  );
}
