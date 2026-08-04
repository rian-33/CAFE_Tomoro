// 1. Mengimpor foto dari folder assets agar bisa dibaca oleh React
import fotoUtama from "../assets/FOTO-6.jpeg";

export default function Hero() {
  return (
    <section
      className="hero-section"
      // 2. Memanggil fotoUtama dan menambahkan efek gradasi gelap secara langsung
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
        className="btn-utama"
        onClick={() => document.getElementById("booking").scrollIntoView()}
      >
        Booking Sekarang
      </button>
    </section>
  );
}
