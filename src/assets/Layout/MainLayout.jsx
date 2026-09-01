import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NabarHeader } from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export const MainLayout = () => {
  const location = useLocation();

  const isPokemonDetails =
    location.pathname.startsWith("/pokdetails/");

  return (
    <>
      {!isPokemonDetails && <NabarHeader />}

      <Outlet />

      {!isPokemonDetails && <Footer />}

      <ScrollToTop />
    </>
  );
};