import { useState } from "react";
import type { FormEvent } from "react";
import "./Reservasi.css";

const WA_NUMBER = "628123456789";

interface ReservationForm {
  nama: string;
  noWa: string;
  tanggal: string;
  waktu: string;
  catatan: string;
}

const initialForm: ReservationForm = {
  nama: "",
  noWa: "",
  tanggal: "",
  waktu: "",
  catatan: "",
};

export default function Reservasi() {
  const [form, setForm] = useState<ReservationForm>(initialForm);

  const handleChange = (field: keyof ReservationForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.nama || !form.noWa || !form.tanggal || !form.waktu) {
      return;
    }

    const pesan = `Halo, saya ${form.nama}. Ingin booking meja pada ${form.tanggal} jam ${form.waktu}.`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="reservasi-section">
      <h3>RESERVASI</h3>
      <h2>Siap Work From Cafe?</h2>
      <p>
        Booking meja sekarang dan nikmati pengalaman kerja terbaik. Gratis,
        tanpa minimal pemesanan.
      </p>

      <form onSubmit={handleSubmit} className="form-reservasi-modern">
        <div className="input-grid">
          <input
            type="text"
            name="nama"
            placeholder="Nama kamu"
            aria-label="Nama kamu"
            required
            value={form.nama}
            onChange={(e) => handleChange("nama", e.target.value)}
          />
          <input
            type="text"
            name="noWa"
            placeholder="No. WA"
            aria-label="No. WA"
            required
            value={form.noWa}
            onChange={(e) => handleChange("noWa", e.target.value)}
          />
          <input
            type="date"
            name="tanggal"
            aria-label="Tanggal"
            required
            value={form.tanggal}
            onChange={(e) => handleChange("tanggal", e.target.value)}
          />
          <input
            type="time"
            name="waktu"
            aria-label="Waktu"
            required
            value={form.waktu}
            onChange={(e) => handleChange("waktu", e.target.value)}
          />
        </div>
        <textarea
          name="catatan"
          placeholder="Catatan (opsional)"
          aria-label="Catatan (opsional)"
          value={form.catatan}
          onChange={(e) => handleChange("catatan", e.target.value)}
        ></textarea>
        <button type="submit" className="btn-booking-modern">
          Booking Meja
        </button>
      </form>
      <p className="wa-link">
        Atau hubungi kami langsung via{" "}
        <a href={`https://wa.me/${WA_NUMBER}`}>WhatsApp</a>
      </p>
    </section>
  );
}
