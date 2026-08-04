export default function Reservasi() {
  return (
    <section id="booking" className="reservasi-section">
      <h3>RESERVASI</h3>
      <h2>Siap Work From Cafe?</h2>
      <p>
        Booking meja sekarang dan nikmati pengalaman kerja terbaik. Gratis,
        tanpa minimal pemesanan.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const nama = e.target[0].value;
          const wa = e.target[1].value;
          const tgl = e.target[2].value;
          const waktu = e.target[3].value;
          const pesan = `Halo, saya ${nama}. Ingin booking meja pada ${tgl} jam ${waktu}.`;
          window.open(
            `https://wa.me/628123456789?text=${encodeURIComponent(pesan)}`,
            "_blank",
          );
        }}
        className="form-reservasi-modern"
      >
        <div className="input-grid">
          <input type="text" placeholder="Nama kamu" required />
          <input type="text" placeholder="No. WA" required />
          <input type="date" required />
          <input type="time" required />
        </div>
        <textarea placeholder="Catatan (opsional)"></textarea>
        <button type="submit" className="btn-booking-modern">
          Booking Meja
        </button>
      </form>
      <p className="wa-link">
        Atau hubungi kami langsung via{" "}
        <a href="https://wa.me/628123456789">WhatsApp</a>
      </p>
    </section>
  );
}
