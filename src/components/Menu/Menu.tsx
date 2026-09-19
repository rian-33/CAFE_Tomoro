import { menuItems } from "@/data/menu";
import "./Menu.css";

export default function Menu() {
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

      <div className="grid-menu-unggulan">
        {menuItems.map((item) => (
          <div key={item.id} className="kartu-menu">
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
