import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const { image, heading, subtext, primaryBtn, secondaryBtn } = useSelector(
    (state) => state.hero
  );

  return (
    <section className="relative w-full h-[494px] overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={heading}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content - centered vertically & horizontally */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div
          className="flex flex-col items-center text-center text-white"
          style={{
            width: "813px",
            height: "231px",
            gap: "78px",
            opacity: 1,
            transform: "rotate(0deg)",
          }}
        >
          {/* Heading and Subtext */}
          <div className="space-y-[7px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              {heading}
            </h1>
            <p className="text-[20px] leading-[1] tracking-normal font-poppins font-normal text-white/90">
              {subtext}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-[48px]">
            <Link
              to={primaryBtn.link}
              className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] bg-[#D12C58] text-white font-medium text-center hover:bg-[#b61946] transition-colors"
            >
              {primaryBtn.text}
            </Link>

            <Link
              to={secondaryBtn.link}
              className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] border border-white text-white font-medium text-center hover:bg-white hover:text-black transition-colors"
            >
              {secondaryBtn.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
