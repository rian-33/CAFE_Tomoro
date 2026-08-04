import "./index.css";

// Mengimpor semua komponen dari folder components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import Suasana from "./components/Suasana";
import Menu from "./components/Menu";
import Fasilitas from "./components/Fasilitas";
import Lokasi from "./components/Lokasi";
import Testimoni from "./components/Testimoni";
import Reservasi from "./components/Reservasi";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      {/* Efek tekstur bintik halus khas Monolog */}
      <div className="grain-overlay" />

      {/* Susunan komponen web Anda */}
      <Navbar />
      <Hero />
      <Tentang />
      <Suasana />
      <Menu />
      <Fasilitas />
      <Lokasi />
      <Testimoni />
      <Reservasi />
      <Footer />
    </div>
  );
}
