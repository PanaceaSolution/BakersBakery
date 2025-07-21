import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdAccessTime, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 font-poppins text-sm pt-16 pb-16 border-t border-gray-200">
      <div className="w-full flex flex-col justify-between h-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] lg:w-[1741px] lg:h-[503px] mx-auto px-8 lg:px-0">
          {/* Left Section - Brand Info & Social Media */}
          <div className="flex flex-col gap-[29px] lg:w-[406px] lg:h-[289px]">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="w-[80px] h-[80px] mb-2 rounded-lg"
            />
            <ul className="space-y-1 text-gray-700">
              <li>🎂 Freshly baked cakes made with love</li>
              <li>👩🏻‍🍳 Based in Kathmandu, serving happiness daily</li>
              <li>🍰 Quality, Creativity, Timely Delivery.</li>
            </ul>
            <div>
              <p className="font-semibold text-xs mb-2">Social Media:</p>
              <div className="flex space-x-3 text-base text-gray-600">
                <FaFacebookF className="hover:text-blue-700 cursor-pointer transition-colors duration-200" />
                <FaInstagram className="hover:text-pink-600 cursor-pointer transition-colors duration-200" />
                <FaTiktok className="hover:text-black cursor-pointer transition-colors duration-200" />
                <FaWhatsapp className="hover:text-green-600 cursor-pointer transition-colors duration-200" />
              </div>
            </div>
          </div>

          {/* Links Section */}

          <div className="flex flex-col gap-[23px] lg:w-[170px] lg:h-[359px]">
            <h4 className="font-semibold mb-4 text-[#8B1732] text-base">
              Links
            </h4>
            <ul className="space-y-3 text-gray-800">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#c71544] transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#c71544] transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/customize"
                  className="hover:text-[#c71544] transition-colors duration-200"
                >
                  Customize your Cake
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-[#c71544] transition-colors duration-200"
                >
                  Shop / Order Online
                </Link>
              </li>
              <li>
                <Link
                  to="/bakery-items"
                  className="hover:text-[#c71544] transition-colors duration-200"
                >
                  Bakery Items
                </Link>
              </li>
              <li>
                <Link
                  to="/faqs"
                  className="hover:text-[#c71544] transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#c71544] transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}

          <div className="flex flex-col gap-[65px] lg:w-[286px] lg:h-[403px]">
            <h4 className="font-semibold mb-4 text-[#8B1732] text-base">
              Contact Info
            </h4>
            <div className="flex items-start gap-3">
              <MdCall className="text-lg flex-shrink-0 mt-1 text-[#8B1732]" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-500 text-sm">01-5909911</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdEmail className="text-lg flex-shrink-0 mt-1 text-[#8B1732]" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-500 text-sm">abc@xyz.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdAccessTime className="text-lg flex-shrink-0 mt-1 text-[#8B1732]" />
              <div>
                <p className="font-semibold">Bakery opening and Closing Time</p>
                <p className="text-gray-500 text-sm">7:00 A.M to 9:00 P.M</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MdLocationOn className="text-lg flex-shrink-0 mt-1 text-[#8B1732]" />
              <div>
                <p className="font-semibold">Shankhamul Marga</p>
                <p className="text-gray-500 text-sm">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[40px] lg:w-[381px] lg:h-[165px]">
            <h4 className="font-semibold text-base mb-4 text-[#8B1732]">
              Stay in the Loop
            </h4>
            <p className="text-gray-600 text-xs mb-4 leading-relaxed">
              Get 10% off your first order — sign up for exclusive deals!
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8B1732]"
              />
              <button className="bg-[#8B1732] hover:bg-[#7a1429] text-white px-5 text-sm rounded-r-full transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="my-12 border-gray-300 lg:w-[1741px] mx-auto" />

        <div className="text-center text-xs text-gray-500 tracking-wide leading-relaxed lg:w-[1741px] mx-auto px-8 lg:px-0">
          © 2025 Bakers Bakery. All rights reserved. | Designed with ❤️ in
          Nepal
        </div>
      </div>
    </footer>
  );
};

export default Footer;
