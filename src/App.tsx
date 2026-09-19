import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

const Tentang = lazy(() => import("@/components/Tentang/Tentang"));
const Suasana = lazy(() => import("@/components/Suasana/Suasana"));
const Menu = lazy(() => import("@/components/Menu/Menu"));
const Fasilitas = lazy(() => import("@/components/Fasilitas/Fasilitas"));
const Lokasi = lazy(() => import("@/components/Lokasi/Lokasi"));
const Testimoni = lazy(() => import("@/components/Testimoni/Testimoni"));
const Reservasi = lazy(() => import("@/components/Reservasi/Reservasi"));
const Footer = lazy(() => import("@/components/Footer/Footer"));

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Tentang />
        <Suasana />
        <Menu />
        <Fasilitas />
        <Lokasi />
        <Testimoni />
        <Reservasi />
        <Footer />
      </Suspense>
    </div>
  );
}
