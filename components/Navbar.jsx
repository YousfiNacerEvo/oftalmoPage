import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-3 px-4 sm:py-4 sm:px-6 lg:px-8 bg-white shadow-sm rounded-lg">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-lg sm:text-xl font-bold text-gray-900">LensLuxe</span>
      </div>
      {/* Navigation Links - Hidden on mobile */}
      <div className="hidden md:flex space-x-6 lg:space-x-8">
        <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">À propos</a>
        <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">Nos services</a>
        <a href="#map" className="text-gray-700 hover:text-gray-900 font-medium">Nous trouver</a>
      </div>
      {/* Book Demo Button */}
      <div>
        <a href="/contact" className="bg-black text-white px-3 py-2 sm:px-6 sm:py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition text-sm sm:text-base">contacter nous</a>
      </div>
    </nav>
  );
} 