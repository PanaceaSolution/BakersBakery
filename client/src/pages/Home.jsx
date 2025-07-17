import React from "react";
import ProductCard from "../components/ProductCard";
import cake from "../assets/cake.json"
import SliderSection from "../components/SliderSection";


const Home = () => {
  return (
    <div>
      Home

      <div className="flex justify-center items-center space-x-3">

      <ProductCard {...cake}  />
      </div>

      <div>

        <SliderSection/>

      </div>
    </div>
  );
};

export default Home;
