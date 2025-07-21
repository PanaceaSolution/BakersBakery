import { Button } from "@mui/material";
import ProductCard from "./ProductCard";
import cake from "../assets/cake.json";
import { Link } from "react-router-dom";

const ProductHolder = ({ Title, subTitle, banner }) => {
  return (
    <div className="w-screen">
      {banner && (
        <section
          className="relative w-full max-w-max-[1920px] h-[387px] overflow-hidden mb-16"
        >
          {/* Background Image */}
          <img
            src={banner.image}
            alt={banner.heading}
            className="absolute inset-0 w-screen h-full object-cover transition-opacity duration"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
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
                  {banner.heading}
                </h1>
                <p className="text-[20px] leading-[1] tracking-normal font-poppins font-normal text-white/90">
                  {banner.subtext}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-[48px]">
                <Link
                  to={banner.primaryBtn.link}
                  className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] bg-[#D12C58] text-white font-medium text-center hover:bg-[#b61946] transition-colors"
                >
                  {banner.primaryBtn.text}
                </Link>

                <Link
                  to={banner.secondaryBtn.link}
                  className="w-[244px] h-[44px] rounded-[10px] px-[10px] py-[10px] border border-white text-white font-medium text-center hover:bg-white hover:text-black transition-colors"
                >
                  {banner.secondaryBtn.text}
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="flex flex-col gap-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <h2 className="font-semibold text-2xl">{Title}</h2>
            <p className="text-gray-600">{subTitle}</p>
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#CF294A",
              borderRadius: "10px",
              padding: "10px 20px",
              height: "44px",
              minWidth: "153px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#a1263d",
              },
            }}
          >
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-21">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx}>
              <ProductCard {...cake} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductHolder;
