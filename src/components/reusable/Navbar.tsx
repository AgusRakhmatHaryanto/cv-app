"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHome = () => {
    window.location.href = "/";
  };
  const handleAbout = () => {
    window.location.href = "/about";
  };
  const handleResume = () => {
    window.location.href = "/resume";
  };
  const handleProjects = () => {
    window.location.href = "/projects";
  };
  const handleBlog = () => {
    window.location.href = "/blog";
  };
  const handleContact = () => {
    window.location.href = "/contact";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 text-white transition-colors duration-300 ${
        isScrolled ? "bg-gray-800/70 backdrop-blur shadow" : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <button onClick={handleHome} className="mr-4">
          Home
        </button>
        <button onClick={handleAbout} className="mr-4">
          About
        </button>
        <button onClick={handleResume} className="mr-4">
          Resume
        </button>
        <button onClick={handleProjects} className="mr-4">
          Projects
        </button>
        <button onClick={handleContact} className="mr-4">
          Contact
        </button>
        <button onClick={handleBlog} className="mr-4">
          Blog
        </button>
      </div>
    </nav>
  );
}
