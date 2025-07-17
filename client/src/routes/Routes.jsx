// routes/Routes.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Shop from "../pages/Shop";
import CustomizeCake from "../pages/CustomizeCake";
import BakeryItems from "../pages/BakeryItems";
import FAQs from "../pages/FAQs";
import ContactUs from "../pages/ContactUs";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Wrap everything inside the Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="customize" element={<CustomizeCake />} />
        <Route path="bakery-items" element={<BakeryItems />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
