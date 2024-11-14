"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // hide navbar when scrolling down
    } else {
      setShowNavbar(true); // show navbar when scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`sticky top-0 bg-gradient-to-r from-black to-blue-500 p-4 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto max-w-screen-lg flex justify-between items-center">
        <Link href="/">
          <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <h1 className="text-white hover:text-teal-300">Home</h1>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <h1 className="text-white hover:text-teal-300">Projects</h1>
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
