import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <HeaderSection link="outerwear--section" text="Outerwear" />
      <ProductSection />
      <HeaderSection link="tops--section" text="Tops" />
      <ProductSection />
      <HeaderSection link="bottoms--section" text="Bottoms" />
      <ProductSection />
      <HeaderSection link="accessories--section" text="Accessories" />
      <ProductSection />
      <FooterSection />
    </div>
  );
}

export default App;
