import "./Lokasi.css";

export default function Lokasi() {
  return (
    <section id="lokasi" className="lokasi-section">
      <div className="lokasi-grid">
        <div className="lokasi-teks">
          <h3>LOKASI</h3>
          <h2>Mudah Dijangkau</h2>
          <p>
            Berada di jantung kawasan strategis, Tomoro Coffee mudah diakses
            dari mana saja. Dekat dengan pusat bisnis dan fasilitas umum.
          </p>

          <div className="info-item">
            <strong>Alamat:</strong>
            <br />
            Jl. Racing Center, Makassar
          </div>
          <div className="info-item">
            <strong>Jam Operasional:</strong>
            <br />
            Senin – Jumat: 08:00 - 22:00
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="btn-utama"
          >
            Buka Google Maps
          </a>
        </div>

        <div className="lokasi-peta">
          <iframe
            title="Lokasi Tomoro Coffee"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.7456789!2d119.45!3d-5.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDknMDAuMCJTIDExOXKwMjcnMDAuMCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
