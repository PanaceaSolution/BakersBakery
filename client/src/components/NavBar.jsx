import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", url: "/" },
  { label: "About Us", url: "/about" },
  { label: "Shop", url: "/shop" },
  { label: "Customize your Cake", url: "/customize" },
  { label: "Bakery Items", url: "/bakery-items" },
  { label: "FAQs", url: "/faqs" },
  { label: "Contact Us", url: "/contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md z-50 relative">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 md:px-[90px] py-[22px] h-[108px]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-[80px] w-[80px]"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-[45px]">
          {navLinks.map(({ label, url }) => (
            <Link
              key={label}
              to={url}
              className="text-[16px] font-poppins font-medium leading-none tracking-normal hover:text-[#8C1C32] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <FiSearch className="text-[#353147] text-xl cursor-pointer hover:text-[#8C1C32]" />
          <FiShoppingCart className="text-[#353147] text-xl cursor-pointer hover:text-[#8C1C32]" />
          <FiUser className="text-[#353147] text-xl cursor-pointer hover:text-[#8C1C32]" />

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {menuOpen ? (
              <FiX
                onClick={() => setMenuOpen(false)}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <FiMenu
                onClick={() => setMenuOpen(true)}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-6 bg-white shadow-md">
          {navLinks.map(({ label, url }) => (
            <Link
              key={label}
              to={url}
              onClick={() => setMenuOpen(false)}
              className="text-black text-[16px] font-medium font-poppins hover:text-[#8C1C32] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;
