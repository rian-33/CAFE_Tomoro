import foto6 from "@/assets/FOTO-6.jpeg";
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
              <strong>100+</strong>
              <br />
              Tempat Duduk
            </div>
            <div>
              <strong>2</strong>
              <br />
              Lantai
            </div>
            <div>
              <strong>2023</strong>
              <br />
              Berdiri
            </div>
            <div>
              <strong>4.0</strong>
              <br />
              Rating
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
