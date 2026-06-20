import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import ShopAll from "../components/ShopAll";
import OurBrand from "../components/OurBrand";
import PopularFormats from "../components/PopularFormats";
import Footer from "../components/Footer";
import PopupForm from "../components/PopupForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PopupForm />

      <Navbar />
      <Hero />
      <About />
      <ShopAll />
      <OurBrand />
      <PopularFormats />
      <Footer />
    </div>
  );
}
