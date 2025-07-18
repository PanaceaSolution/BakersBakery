// pages/Home.jsx
import ProductCard from "../components/ProductCard";
import SweetDeliverySection from "../components/SweetDeliverySection";

const Home = () => {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Welcome to Baker’s Bakery</h2>
        <p className="text-gray-600">Delicious cakes and items made fresh every day!</p>
      </section>


      <SweetDeliverySection/>

    </div>
  );
};

export default Home;
