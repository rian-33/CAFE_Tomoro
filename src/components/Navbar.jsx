export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Tomoro <span>COFFEE</span>
      </div>

      {/* Semua menu dan tombol sekarang dibungkus dalam div 'nav-right' */}
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#suasana">Suasana</a>
          </li>
          {/* Menambahkan menu Lokasi sesuai permintaan */}
          <li>
            <a href="#lokasi">Lokasi</a>
          </li>
          <li>
            <a href="#booking">Booking</a>
          </li>
        </ul>

        {/* Tombol Pesan Sekarang dengan kelas CSS yang baru */}
        <button
          className="btn-elegan"
          onClick={() => document.getElementById("booking").scrollIntoView()}
        >
          Pesan Sekarang
        </button>
      </div>
    </nav>
  );
}
