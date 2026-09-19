import { useState } from "react";
import { facilities } from "@/data/fasilitas";
import "./Fasilitas.css";

export default function Fasilitas() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="kontainer-fasilitas">
      <h2>Lengkap Buat Produktivitas</h2>
      <div className="grid-fasilitas">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className={`kartu-fasilitas ${activeId === facility.id ? "aktif" : ""}`}
            role="button"
            tabIndex={0}
            onClick={() => setActiveId(facility.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setActiveId(facility.id);
              }
            }}
          >
            <div className="ikon">{facility.icon}</div>
            <div>
              <h3>{facility.title}</h3>
              <p>{facility.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
