import { useState } from "react";

export default function Fasilitas() {
  const [activeId, setActiveId] = useState(null);

  const fasilitasData = [
    { id: 1, icon: "💻", title: "WiFi 100Mbps", desc: "Kencang & stabil." },
    { id: 2, icon: "🔌", title: "Stopkontak", desc: "Setiap meja tersedia." },
    { id: 3, icon: "❄️", title: "AC Nyaman", desc: "Suhu 22 derajat." },
    { id: 4, icon: "🏢", title: "Ruang Meeting", desc: "Lengkap TV & board." },
    { id: 5, icon: "🌙", title: "Mushola", desc: "Bersih & nyaman." },
    { id: 6, icon: "🚗", title: "Parkir Luas", desc: "Aman dan gratis." },
  ];

  return (
    <section className="kontainer-fasilitas">
      <h2>Lengkap Buat Produktivitas</h2>
      <div className="grid-fasilitas">
        {fasilitasData.map((f) => (
          <div
            key={f.id}
            className={`kartu-fasilitas ${activeId === f.id ? "aktif" : ""}`}
            onClick={() => setActiveId(f.id)}
          >
            <div className="ikon">{f.icon}</div>
            <div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
