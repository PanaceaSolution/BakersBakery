import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Shop from "../pages/Shop";
import CustomizeCake from "../pages/CustomizeCake";
import BakeryItems from "../pages/BakeryItems";
import FAQs from "../pages/FAQs";
import ContactUs from "../pages/ContactUs";
import CategoryPage from "../pages/CategoryPage";
import MiniCakeCategory from "../pages/MiniCakeCategory";
import BirthdayCakeCategory from "../pages/BirthdayCakeCategory";
import WeddingCakeCategory from "../pages/WeddingCakeCategory";
import ModelCakeCategory from "../pages/ModelCakeCategory";
import BabyShowerCakeCategory from "../pages/BabyShowerCakeCategory";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="customize" element={<CustomizeCake />} />
        <Route path="bakery-items" element={<BakeryItems />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<ContactUs />} />
        
        {/* Specific category routes */}
        <Route path="category/mini-cake" element={<MiniCakeCategory />} />
        <Route path="category/birthday-cake" element={<BirthdayCakeCategory />} />
        <Route path="category/wedding-cake" element={<WeddingCakeCategory />} />
        <Route path="category/model-cake" element={<ModelCakeCategory />} />
        <Route path="category/baby-shower-cake" element={<BabyShowerCakeCategory />} />
        
        {/* Fallback for any other categories */}
        <Route path="category/:slug" element={<CategoryPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
