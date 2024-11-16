"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [hasBackground, setHasBackground] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full p-4 z-50 transition-all duration-300 `}
    >
      <div className={`container mx-auto  rounded-full max-w-prose h-16  text-xl  flex items-center justify-evenly ${
        hasBackground
        ? "bg-gradient-to-r from-black/80 to-blue-500/80 shadow-lg"
        : "bg-transparent"
      }`}>
        <ul className="flex gap-10 space-x-4">
          <li>
            <Link href="/">
              <h1 className="text-white hover:text-teal-300">Work</h1>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <h1 className="text-white hover:text-teal-300">About</h1>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h1 className="text-white hover:text-teal-300">Contact</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
