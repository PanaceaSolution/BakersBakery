import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import HeroCarousel from "./HeroCarousel";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import SliderSection from "./Sliders/SliderSection";

const Layout = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isCategory = location.pathname.startsWith("/category/");
  {/*Hidden Hero section in these routes*/}
    const hideHeroOnRoutes = ["/cart", "/checkout", "/login"];

  const shouldShowHero = isHome || isCategory; // show only on home & category
  const shouldHideHero = hideHeroOnRoutes.includes(location.pathname);

  return (
    <>
      <NavBar />
      
      {/* Show HeroSection & SliderSection only where needed */}
      {shouldShowHero && !shouldHideHero && (
        <>
          <HeroSection />
          <SliderSection />
        </>
      )}

      <main className="pt-0">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
