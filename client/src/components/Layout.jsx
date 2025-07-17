// components/Layout.jsx
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import HeroCarousel from "./HeroCarousel";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <NavBar />
      {isHome && <HeroCarousel />}
      <main className="pt-20 px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
