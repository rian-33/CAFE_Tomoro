import { useState } from "react";
import "./index.css";

function App() {
  const dataMenuTomoro = [
    {
      id: 1,
      title: "Tomoro Aren Latte",
      description: "Kopi susu dengan gula aren asli yang manis dan legit.",
      image:
        "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Matcha Oat Latte",
      description: "Paduan matcha premium Jepang dengan susu oat yang sehat.",
      image:
        "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Butterscotch Americano",
      description: "Kopi hitam pekat dengan sentuhan sirup butterscotch.",
      image:
        "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [menuKopi] = useState(dataMenuTomoro);

  return (
    <div>
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="logo">
          Tomoro <span>COFFEE</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#tentang">Tentang</a>
          </li>
          <li>
            <a href="#suasana">Suasana</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#lokasi">Lokasi</a>
          </li>
        </ul>

        <button className="btn-pesan">Pesan Sekarang</button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="subtitle">TOMORO COFFEE • MAKASSAR</p>
          <h1 className="hero-title">
            Ruang Kerja Premium.
            <br />
            Rasa Kopi Terbaik.
          </h1>
          <p className="hero-desc">
            Tempat kerja nyaman dengan WiFi kencang, kopi spesial, dan atmosfer
            yang bikin kamu betah berjam-jam.
          </p>

          <div className="hero-buttons">
            <button className="btn-utama">Booking Sekarang</button>
            <button className="btn-kedua">Lihat Suasana</button>
          </div>
        </div>
      </section>

      {/* --- BAGIAN MENU --- */}
      <main id="menu" className="kontainer-menu">
        <h2 className="judul-menu">Menu Andalan Kami</h2>
        <div className="grid-menu">
          {menuKopi.map((kopi) => (
            <div key={kopi.id} className="kartu-kopi">
              <img src={kopi.image} alt={kopi.title} className="gambar-kopi" />
              <h3 className="nama-kopi">{kopi.title}</h3>
              <p className="deskripsi-kopi">{kopi.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
