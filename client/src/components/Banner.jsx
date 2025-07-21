import React from "react";
import { Link } from "react-router-dom";

const Banner = ({ image, heading, subtext, buttonText, buttonLink }) => {
  return (
    <section className="relative w-full h-[387px] overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={heading}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div
          className="flex flex-col items-center text-center text-white max-w-[813px] w-full gap-[78px]"
          style={{ height: "231px", opacity: 1 }}
        >
          {/* Heading + Subtext */}
          <div
            className="flex flex-col w-full gap-[7px]"
            style={{ height: "109px" }}
          >
            <h2
              className="text-center"
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "48px",
                fontStyle: "normal",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              {heading}
            </h2>
            <p
              className="text-center"
              style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "20px",
                fontStyle: "normal",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              {subtext}
            </p>
          </div>

          {/* Button */}
          <Link
            to={buttonLink}
            className="w-[244px] h-[44px] px-[10px] py-[10px] bg-[#D82B5D] text-white text-center rounded-[10px] font-medium hover:bg-[#b02149] transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
