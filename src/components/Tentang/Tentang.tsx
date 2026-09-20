import foto6 from "@/assets/FOTO-6.jpeg";
import CountUp from "@/components/CountUp/CountUp";
import "./Tentang.css";

export default function Tentang() {
  return (
    <section id="tentang" className="tentang-section">
      <div className="tentang-grid">
        <div className="tentang-gambar">
          <img src={foto6} alt="Interior Kafe" className="main-img" />
        </div>
        <div className="tentang-teks">
          <h3>TENTANG</h3>
          <h2>Bekerja Jadi Lebih Produktif &amp; Menyenangkan</h2>
          <p>
            Tomoro Coffee hadir sebagai ruang kerja premium yang nyaman dan
            estetik.
          </p>
          <div className="stats">
            <div>
              <CountUp className="stat-value" value={100} suffix="+" />
              <br />
              Tempat Duduk
            </div>
            <div>
              <CountUp className="stat-value" value={2} />
              <br />
              Lantai
            </div>
            <div>
              <CountUp className="stat-value" value={2023} />
              <br />
              Berdiri
            </div>
            <div>
              <CountUp className="stat-value" value={4} decimals={1} />
              <br />
              Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
