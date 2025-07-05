import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-white shadow-sm rounded-4xl">
      {/* Logo */}
      <div className="flex items-center">
        {/* Ajoute ici le logo si besoin */}
        <span className="text-xl font-bold text-gray-900">LensLuxe</span>
      </div>
      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">À propos</a>
        <a href="#services" className="text-gray-700 hover:text-gray-900 font-medium">Nos services</a>
        <a href="#map" className="text-gray-700 hover:text-gray-900 font-medium">Nous trouver</a>
      
      </div>
      {/* Book Demo Button */}
      <div>
        <a href="/contact" className="bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition">contacter nous</a>
      </div>
    </nav>
  );
} 