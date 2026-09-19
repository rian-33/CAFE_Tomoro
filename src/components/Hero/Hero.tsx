import fotoUtama from "@/assets/FOTO-6.jpeg";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(46, 32, 27, 0.7), rgba(46, 32, 27, 0.7)), url(${fotoUtama})`,
      }}
    >
      <h1 className="hero-title">
        Ruang Kerja Premium.
        <br />
        Rasa Kopi Terbaik.
      </h1>
      <button
        type="button"
        className="btn-utama"
        onClick={() => document.getElementById("booking")?.scrollIntoView()}
      >
        Booking Sekarang
      </button>
    </section>
  );
}
