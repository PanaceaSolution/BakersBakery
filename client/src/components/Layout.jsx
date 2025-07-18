import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import HeroCarousel from "./HeroCarousel";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import SliderSection from "./SliderSection";

const Layout = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isCategory = location.pathname.startsWith("/category/");

  return (
    <>
      <NavBar />
      <HeroSection />
      <SliderSection />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
