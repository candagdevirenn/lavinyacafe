import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  useEffect(() => {
    document.title = "Lavinya — Şehrin Sıcak Köşesi | Esenyurt İstanbul";
    const desc = "Esenyurt, İstanbul'da sıcak amber ışıklı lounge. Türk kahvesi, ev yapımı tatlılar, taze yemekler — gece 01:00'a kadar açık.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    document.documentElement.lang = "tr";
  }, []);

  return (
    <main className="bg-cream text-charcoal">
      <SplashScreen />
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CallButton />
    </main>
  );
};

export default Index;
