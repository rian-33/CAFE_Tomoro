import { useState } from "react";
import { menuCategories, menuItems } from "@/data/menu";
import "./Menu.css";

export default function Menu() {
  const [activeKategori, setActiveKategori] = useState<string>("Semua");

  const filteredItems =
    activeKategori === "Semua"
      ? menuItems
      : menuItems.filter((item) => item.kategori === activeKategori);

  return (
    <main id="menu" className="menu-unggulan-section">
      <div className="menu-header">
        <h3>MENU UNGGULAN</h3>
        <h2>Temani Produktivitasmu</h2>
        <p>
          Dari kopi spesial hingga makanan berat — semua dibuat dengan bahan
          terbaik.
        </p>
      </div>

      <div className="menu-tabs" role="tablist" aria-label="Kategori menu">
        {menuCategories.map((kategori) => (
          <button
            key={kategori}
            type="button"
            role="tab"
            aria-selected={activeKategori === kategori}
            className={`menu-tab ${activeKategori === kategori ? "aktif" : ""}`}
            onClick={() => setActiveKategori(kategori)}
          >
            {kategori}
          </button>
        ))}
      </div>

      <div className="grid-menu-unggulan">
        {filteredItems.map((item, index) => (
          <div
            key={`${activeKategori}-${item.id}`}
            className="kartu-menu"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="gambar-container">
              <span className="badge">{item.badge}</span>
              <img src={item.img} alt={item.title} loading="lazy" />
            </div>
            <div className="menu-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="menu-footer">
        *Harga tersedia di menu. Tanyakan pada staff untuk rekomendasi.
      </p>
    </main>
  );
}