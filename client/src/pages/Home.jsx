import ProductCard from "../components/ProductCard";

import SweetDeliverySection from "../components/SweetDeliverySection";

import cake from "../assets/cake.json";
import SliderCards from "../components/SliderCards";
import SliderSection from "../components/SliderSection";
import ProductHolder from "../components/ProductHolder";
import HeroSection from "../components/HeroSection";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeroByCategory } from "../features/hero/heroSlice";
import Banner from "../components/Banner";
import SubscribeSection from "../components/SubscribeSection";
import GoogleMap from "../components/GoogleMap";

const data = {
  Title: "This Week's Special Offers",
  subTitle: "Don't Miss Out — Limited-Time Deals Just for You!",
};

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the hero content for home page
    dispatch(setHeroByCategory("home"));
  }, [dispatch]);

  return (
    <>
      <div className="space-y-10">
        <section className="overflow-hidden">
          <ProductHolder {...data} />
          {/* <h2 className="text-2xl font-bold mb-4">Popular Products</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <ProductCard {...cake} />
  </div> */}
        </section>

        {/* First Banner */}
        <Banner
          image="/assets/HeroSection/two.png"
          heading="Make Their Day Memorable"
          subtext="Free candles and message card on all birthday cakes"
          buttonText="Shop Birthday Cakes"
          buttonLink="/birthday-cakes"
        />

        {/* Second Banner */}
        <Banner
          image="/assets/HeroSection/three.png"
          heading="Modal Cakes: Fashionably Delicious"
          subtext="Introducing our exclusive collection of limited-edition, designer-inspired cakes."
          buttonText="Order Limited Edition Now"
          buttonLink="/birthday-cakes"
        />

        {/* Third Banner */}

        <Banner
          image="/assets/HeroSection/five.png"
          heading="Because Every Love Story Deserves a Beautiful Cake"
          subtext="From minimal chic to royal grandeur — we craft your cake, your way."
          buttonText="Design Your Dream Cake"
          buttonLink="/birthday-cakes"
        />

        <Banner
          image="/assets/HeroSection/four.png"
          heading="A Slice of Joy for Your Little One"
          subtext="From pastel dreams to tiny toes, our baby shower cakes are as precious as the moment itself."
          buttonText="Celebrate with Cakes"
          buttonLink="/birthday-cakes"
        />

        {/* Fourth Banner */}
        <Banner
          image="/assets/HeroSection/seven.png"
          heading="Pastry Perfection in Every Bite"
          subtext="Sweet, soft, and sensational — just the way pastries should be."
          buttonText="Shop Pasteries Now !"
          buttonLink="/birthday-cakes"
        />

        {/* Fifth Banner */}
        <Banner
          image="/assets/HeroSection/six.png"
          heading="Your Daily Dose of Delicious"
          subtext="Craving a quick bite or a cozy treat? Our bakery items have something for everyone."
          buttonText="Order Fresh Bakes"
          buttonLink="/birthday-cakes"
        />

        {/*Sixth Banner*/}

        {/*Seventh Banner*/}
        <Banner
          image="/assets/HeroSection/y.png"
          heading="Your Cake, Your Rules"
          subtext="Stack it high, shape it bold, flavor it your way — custom cakes made just for you."
          buttonText="Create Your Cake Now"
          buttonLink="/birthday-cakes"
        />

        {/*Seventh Banner*/}
        <Banner
          image="/assets/HeroSection/eight.png"
          heading="Delivered with Love & Care"
          subtext="From oven to doorstep — fresh, safe, and right on time for your celebration."
          buttonText="Schedule a Delivery"
          buttonLink="/birthday-cakes"
        />
        <GoogleMap />

        <SweetDeliverySection />
        <SubscribeSection />
      </div>
    </>
  );
};

export default Home;
