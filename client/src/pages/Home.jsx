import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";
import { setHeroByCategory } from "../features/hero/heroSlice";
import ProductHolder from "../components/ProductHolder";
import Banner from "../components/Banner";
import SweetDeliverySection from "../components/SweetDeliverySection";
import SubscribeSection from "../components/SubscribeSection";
import GoogleMap from "../components/GoogleMap";
import UserReviewCard from "../components/UserReviewCard";

const data = {
  Title: "This Week's Special Offers",
  subTitle: "Don't Miss Out — Limited-Time Deals Just for You!",
  banner: {
    image: "/assets/HeroSection/offer-banner.jpg",
    heading: "Fresh Bakes, Amazing Deals!",
    subtext: "Grab your favorite cakes at discounted prices now.",
    primaryBtn: {
      text: "Shop Now",
      link: "/cakes",
    },
    secondaryBtn: {
      text: "View All Cakes",
      link: "/cakes",
    },
  },
};

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeroByCategory("home"));
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="space-y-10 max-w-[1920px]">
      {/* Product Holder Section */}
      <section className="overflow-hidden">
        <ProductHolder {...data} />
      </section>

      {/* Banners */}
      <Banner
        image="/assets/HeroSection/two.png"
        heading="Make Their Day Memorable"
        subtext="Free candles and message card on all birthday cakes"
        buttonText="Shop Birthday Cakes"
        buttonLink="/birthday-cakes"
      />

      <Banner
        image="/assets/HeroSection/three.png"
        heading="Modal Cakes: Fashionably Delicious"
        subtext="Introducing our exclusive collection of limited-edition, designer-inspired cakes."
        buttonText="Order Limited Edition Now"
        buttonLink="/birthday-cakes"
      />

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

      <Banner
        image="/assets/HeroSection/seven.png"
        heading="Pastry Perfection in Every Bite"
        subtext="Sweet, soft, and sensational — just the way pastries should be."
        buttonText="Shop Pasteries Now !"
        buttonLink="/birthday-cakes"
      />

      <Banner
        image="/assets/HeroSection/six.png"
        heading="Your Daily Dose of Delicious"
        subtext="Craving a quick bite or a cozy treat? Our bakery items have something for everyone."
        buttonText="Order Fresh Bakes"
        buttonLink="/birthday-cakes"
      />

      <Banner
        image="/assets/HeroSection/y.png"
        heading="Your Cake, Your Rules"
        subtext="Stack it high, shape it bold, flavor it your way — custom cakes made just for you."
        buttonText="Create Your Cake Now"
        buttonLink="/birthday-cakes"
      />

      <Banner
        image="/assets/HeroSection/eight.png"
        heading="Delivered with Love & Care"
        subtext="From oven to doorstep — fresh, safe, and right on time for your celebration."
        buttonText="Schedule a Delivery"
        buttonLink="/birthday-cakes"
      />

      {/* Other Sections */}
      <GoogleMap />
      <SweetDeliverySection />
      <SubscribeSection />
      <UserReviewCard />

      <section id="customize"></section>
    </div>
  );
};

export default Home;
