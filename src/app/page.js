/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import Projects from "@/components/projects/projects";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const text = "H i , I ' m   Rizky   Herdiansyah";

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-black to-blue-500 ">
        <h1 style={{ fontFamily: "'Edu AU VIC WA NT Pre', sans-serif" }} className="text-5xl font-bold text-white">
          {text.split(" ").map((char, index) => (
            <span
              key={index}
              className="inline-block mr-1 transition-colors duration-300 hover:text-blue-300 tracking-tighter "
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="text-2xl text-white mt-4">
          Web Developer & Fullstack Developer
        </p>
        <Link href="#projects">
        <button className="mt-8 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-blue-200 hover:scale-110 hover:text-gray-900">
          View My Work
        </button>
        </Link>
      </div>
      <Projects id='projects' />
      <Footer/>
    </>
  );
}
