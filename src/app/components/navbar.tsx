"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    setIsMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex flex-wrap items-center justify-between pt-8 px-8 font-semibold text-lg">
      <div>
      </div>
      <div className="hidden md:flex space-x-8">
        <a
          href="#who"
          className="hover:text-purple-500 duration-100 ease-in-out"
          onClick={(e) => handleNavigation(e, "who")}
        >
          Who?
        </a>
        <a
          href="#team"
          className="hover:text-purple-500 duration-100 ease-in-out"
          onClick={(e) => handleNavigation(e, "team")}
        >
          Our Team
        </a>
        <a
          href="#contact"
          className="hover:text-purple-500 duration-100 ease-in-out"
          onClick={(e) => handleNavigation(e, "contact")}
        >
          Contact
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none hover:text-purple-500 duration-100 ease-in-out"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMenu}
        >
        </div>
      )}

      {isMenuOpen && (
        <div className="fixed top-16 right-4 p-4 rounded-md shadow-md z-50 bg-white md:hidden flex flex-col space-y-4">
          <a
            href="#who"
            className="hover:text-purple-500 duration-100 ease-in-out"
            onClick={(e) => handleNavigation(e, "who")}
          >
            Who?
          </a>
          <a
            href="#team"
            className="hover:text-purple-500 duration-100 ease-in-out"
            onClick={(e) => handleNavigation(e, "team")}
          >
            Our Team
          </a>
          <a
            href="#contact"
            className="hover:text-purple-500 duration-100 ease-in-out"
            onClick={(e) => handleNavigation(e, "contact")}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
