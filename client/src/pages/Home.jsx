// pages/Home.jsx
import ProductCard from "../components/ProductCard";
import cake from "../assets/cake.json";
import SliderCards from "../components/SliderCards";
import SliderSection from "../components/SliderSection";
import ProductHolder from "../components/ProductHolder";

const data = {
  Title: "This Week’s Special Offers",
  subTitle: "Don’t Miss Out — Limited-Time Deals Just for You!",
};



const bannerDetail = [
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

const Home = () => {
  return (
    <div className="space-y-10">
      <section className="">
        <SliderSection />
        <ProductHolder {...data} banner={bannerDetail[0]} />

        <h2 className="text-2xl font-bold mb-4">Popular Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard {...cake} />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Welcome to Baker’s Bakery
        </h2>
        <p className="text-gray-600">
          Delicious cakes and items made fresh every day!
        </p>
      </section>
    </div>
  );
};

export default Home;
