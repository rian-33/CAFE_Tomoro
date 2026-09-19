import foto3 from "@/assets/FOTO-3.png";
import foto4 from "@/assets/FOTO-5.png";
import foto2 from "@/assets/FOTO-2.jpeg";
import foto5 from "@/assets/FOTO-4.jpeg";
import foto7 from "@/assets/FOTO-7.jpeg";
import "./Suasana.css";

export default function Suasana() {
  return (
    <section id="suasana" className="suasana-section">
      <div className="suasana-header">
        <h3>GALERI</h3>
        <h2>Suasana yang Bikin Betah</h2>
      </div>
      <div className="suasana-grid">
        <div className="grid-item">
          <img src={foto4} alt="Interior 1" />
        </div>
        <div className="grid-item">
          <img src={foto3} alt="Interior 2" />
        </div>
        <div className="grid-item">
          <img src={foto2} alt="Interior 3" />
        </div>
        <div className="grid-item">
          <img src={foto5} alt="Interior 4" />
        </div>
        <div className="grid-item">
          <img src={foto7} alt="Interior 5" />
        </div>
      </div>
    </section>
  );
}
