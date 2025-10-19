import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
};
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

const navItems = [
{ name: "Home", href: "/" },
{ name: "About", href: "/about" },
{ name: "Contact", href: "/contact" },
{ name: "Privacy Policy", href: "/privacy-policy" },
];

return (
<div
className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg backdrop-blur-md bg-opacity-80"
          : "bg-transparent"
      }`}
> <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
{/* Logo */} <Link to="/" className="flex items-center space-x-2"> <img
         src="https://placehold.co/40x40/1E8449/ffffff?text=L"
         alt="Logo"
         className="rounded-lg transition-transform duration-300 hover:scale-110"
       /> <span className="text-xl font-bold text-emerald-600 transition-colors duration-300 hover:text-emerald-800">
Gap-O-Taran </span> </Link>

```
    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className="text-gray-600 hover:text-emerald-600 transition-colors duration-300 font-medium"
        >
          {item.name}
        </Link>
      ))}
    </div>

    {/* Desktop Buttons */}
    <div className="hidden md:flex space-x-4">
      <Link
        to="/login"
        className="px-6 py-2 border-2 border-transparent text-gray-600 font-semibold rounded-full hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="px-6 py-2 bg-emerald-500 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105"
      >
        Sign Up
      </Link>
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden text-emerald-600 focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </nav>

  {/* Mobile Dropdown Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
      <div className="flex flex-col items-center space-y-4 py-6">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-emerald-600 font-medium"
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/login"
          onClick={() => setMenuOpen(false)}
          className="px-6 py-2 border border-emerald-500 text-emerald-600 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300"
        >
          Login
        </Link>
        <Link
          to="/register"
          onClick={() => setMenuOpen(false)}
          className="px-6 py-2 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )}
</div>

);
};

export default Navbar;
