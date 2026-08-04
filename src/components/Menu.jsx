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
        {[
          {
            title: "Signature Espresso",
            desc: "Perpaduan biji arabika pilihan.",
            badge: "BEST SELLER",
            img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
          },
          {
            title: "Ice Coffee Latte",
            desc: "Latte creamy yang segar.",
            badge: "FAVORIT",
            img: "https://images.unsplash.com/photo-1507133750040-4a8f57021571",
          },
          {
            title: "Monolog Big Breakfast",
            desc: "All day breakfast lengkap.",
            badge: "HEAVY MEAL",
            img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
          },
          {
            title: "Pasta Aglio Olio",
            desc: "Pasta dengan bawang putih.",
            badge: "SIGNATURE",
            img: "https://images.unsplash.com/photo-1559925393-8be07eac6725",
          },
        ].map((item, index) => (
          <div key={index} className="kartu-menu">
            <div className="gambar-container">
              <span className="badge">{item.badge}</span>
              <img src={item.img} alt={item.title} />
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
