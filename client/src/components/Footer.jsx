import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdAccessTime, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 font-poppins text-sm pt-[64px] pb-[64px] px-8 lg:px-[91px] lg:h-[631px] border">
      {/* Outer Container */}
      <div className="max-w-[1920px] mx-auto h-full flex flex-col justify-between">
        {/* Inner Content */}
        <div className="w-full lg:w-[1741px] lg:h-[503px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-[48px] overflow-hidden">
          {/* Left Section */}
          <div className="flex flex-col gap-6">
            <img src="/assets/logo.png" alt="Logo" className="w-[80px] h-[80px] mb-2" />
            <ul className="space-y-1 text-gray-700">
              <li>🎂 Freshly baked cakes made with love</li>
              <li>👩🏻‍🍳 Based in Kathmandu, serving happiness daily</li>
              <li>🍰 Quality, Creativity, Timely Delivery.</li>
            </ul>
            <div>
              <p className="font-semibold text-xs mb-1">Social Media:</p>
              <div className="flex space-x-3 text-base text-gray-600">
                <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
                <FaInstagram className="hover:text-pink-600 cursor-pointer" />
                <FaTiktok className="hover:text-black cursor-pointer" />
                <FaWhatsapp className="hover:text-green-600 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold mb-4 text-[#8B1732]">Links</h4>
            <ul className="space-y-3 text-gray-800">
              <li><Link to="/" className="hover:text-[#c71544]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#c71544]">About Us</Link></li>
              <li><Link to="/customize" className="hover:text-[#c71544]">Customize your Cake</Link></li>
              <li><Link to="/shop" className="hover:text-[#c71544]">Shop / Order Online</Link></li>
              <li><Link to="/bakery-items" className="hover:text-[#c71544]">Bakery Items</Link></li>
              <li><Link to="/faqs" className="hover:text-[#c71544]">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-[#c71544]">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-gray-800">
            <div className="flex items-start gap-3">
              <MdCall className="text-lg flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-500 text-sm">01-5909911</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdEmail className="text-lg flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-500 text-sm">abc@xyz.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdAccessTime className="text-lg flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Bakery opening and Closing Time</p>
                <p className="text-gray-500 text-sm">7:00 A.M to 9:00 P.M</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdLocationOn className="text-lg flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Shankhamul Marga</p>
                <p className="text-gray-500 text-sm">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-lg mb-2 text-[#8B1732]">Stay in the Loop</h4>
            <p className="text-gray-600 text-xs mb-4 leading-relaxed">
              Get 10% off your first order — sign up for exclusive deals!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B1732]"
              />
              <button className="bg-[#8B1732] hover:bg-[#7a1429] text-white px-5 text-sm rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />
        {/* Footer Bottom */}
        <div className="text-center text-xs text-gray-500 tracking-wide leading-relaxed">
          © 2025 Bakers Bakery. All rights reserved. | Designed with ❤️ in Nepal
        </div>
      </div>
    </footer>
  );
};

export default Footer;
