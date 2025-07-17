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

const Home = () => {
  return (
    <div className="space-y-10">
      <section>
        <SliderSection />
        <ProductHolder {...data} />

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
