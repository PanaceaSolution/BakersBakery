import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/assets/HeroSection/one.png",
    heading: "Bake Your Dreams Into Reality",
    subtext:
      "Find the perfect treat for every celebration — made with love, baked to perfection.",
    primaryBtn: { text: "Customize your Cake", link: "/customize" },
    secondaryBtn: { text: "Order Now", link: "/shop" },
  },
  {
    image: "/assets/HeroSection/two.png",
    heading: "Make Their Day Memorable",
    subtext: "Free candles and message card on all birthday cakes",
    primaryBtn: { text: "Shop Birthday Cakes", link: "/birthday-cakes" },
    secondaryBtn: { text: "Explore More", link: "/shop" },
  },
  {
    image: "/assets/HeroSection/three.png",
    heading: "Modal Cakes: Fashionably Delicious",
    subtext:
      "Introducing our exclusive collection of limited-edition, designer-inspired cakes.",
    primaryBtn: { text: "Order Limited Edition Now", link: "/modal-cakes" },
    secondaryBtn: { text: "Explore More", link: "/shop" },
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[494px] overflow-hidden">
      {/* Background Image */}
      <img
        src={slide.image}
        alt={slide.heading}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug ">
              {slide.heading}
            </h1>
            <p className="text-[20px] leading-[1] tracking-normal font-poppins font-normal text-white/90">
              {slide.subtext}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-[48px]">
            <Link
              to={slide.primaryBtn.link}
              className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] bg-[#D12C58] text-white font-medium text-center hover:bg-[#b61946] transition-colors"
            >
              {slide.primaryBtn.text}
            </Link>

            <Link
              to={slide.secondaryBtn.link}
              className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] border border-white text-white font-medium text-center hover:bg-white hover:text-black transition-colors"
            >
              {slide.secondaryBtn.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
