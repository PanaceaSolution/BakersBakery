import React, { useRef, useState, useEffect } from "react";
import SliderCards from "../components/SliderCards";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cakeu from "../assets/cak.jpg";

const cakes = Array.from({ length: 9 }, (_, index) => ({
  id: `cake-${index + 1}`,
  name: `Chocolate Truffle Cake ${index + 1}`,
  price: 1200 + index * 50,
  images: "",
}));

const SliderSection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition(); // initial
    }
    return () => {
      if (slider) {
        slider.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current?.firstChild?.offsetWidth || 300;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full relative flex items-center">
      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="absolute left-2 z-10 bg-[#8C1C32] shadow rounded-full p-2 hover:bg-white transition-colors text-white duration-200"
        >
          <ChevronLeft size={24} className="hover:text-gray-700 text-white" />
        </button>
      )}

      {/* Cards Container */}
      <div className="w-full max-w-[95%] mx-auto px-6 ">
        <div
          ref={scrollRef}
                  className="flex gap-[88px] overflow-x-auto scroll-smooth py-4 snap-x snap-mandatory hide-scrollbar sm:gap-6
          lg:space-x-3 
             mx-9 "
        >
          {cakes.map((cake) => (
            <div
              key={cake.id}
              className="snap-start flex-shrink-0 flex justify-center items-center"
            >
              <SliderCards
                {...cake}
                image={cakeu}
                className="w-[75vw] sm:w-[200px] md:w-[220px] lg:w-[240px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="absolute right-2 z-10 bg-[#8C1C32] shadow rounded-full p-2 hover:bg-white transition-colors text-white duration-200"
        >
          <ChevronRight size={24} className="hover:text-gray-700 text-white" />
        </button>
      )}
    </section>
  );
};

export default React.memo(SliderSection);
