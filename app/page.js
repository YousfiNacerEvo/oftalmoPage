import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import '../styles/globals.css'
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-10"> 
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <MapSection></MapSection>
      <Footer></Footer>
    </div>
  );
}
