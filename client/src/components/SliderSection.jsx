import React, { useRef, useState, useEffect } from "react";
import SliderCards from "./SliderCards";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cakes = [
  {
    id: "mini-cake",
    name: "Mini Cake",
    image: "/assets/SliderSection/mini.png",
  },
  {
    id: "birthday-cake",
    name: "Birthday Cake",
    image: "/assets/SliderSection/birthday.png",
  },
  {
    id: "wedding-cake",
    name: "Wedding Cake",
    image: "/assets/SliderSection/wedding.png",
  },
  {
    id: "model-cake",
    name: "Model Cake",
    image: "/assets/SliderSection/model.png",
  },
  {
    id: "baby-shower-cake",
    name: "Baby Shower Cake",
    image: "/assets/SliderSection/baby.png",
  },
];

const SliderSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild.offsetWidth || 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex items-center">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 bg-[#8C1C32] text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <div ref={scrollRef} className="flex overflow-x-auto gap-4 px-8 py-4">
        {cakes.map((cake) => (
          <div
            key={cake.id}
            onClick={() => navigate(`/category/${cake.id}`)}
            className="cursor-pointer"
          >
            <SliderCards {...cake} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 bg-[#8C1C32] text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default SliderSection;
