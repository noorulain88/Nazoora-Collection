

import Button from "@/Component/button";
import FooterSection from "@/Component/FooterSection";
import Header from "@/Component/Header";
import HeroSection from "@/Component/HeroSection";
import Navbar from "@/Component/Navbar";
import ProductSection from "@/Component/ProductSection";


export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      <Header />
      <Button />
      <HeroSection />
      <ProductSection />
  
      <FooterSection/>
    </div>

  );
}