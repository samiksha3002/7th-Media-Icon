"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Adjust time (3000ms = 2s)

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white flex justify-center items-center z-50 transition-opacity duration-500 ease-out opacity-100 animate-fadeOut">
      <Image
        src="/Images/7th.png"
        alt="Ad Smart Logo"
        width={120}
        height={120}
        className="rounded-xl animate-pulse"
      />
    </div>
  );
}
