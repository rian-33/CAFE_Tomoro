import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Tomoro <span>COFFEE</span>
      </div>

      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#suasana">Suasana</a>
          </li>
          <li>
            <a href="#lokasi">Lokasi</a>
          </li>
          <li>
            <a href="#booking">Booking</a>
          </li>
        </ul>

        <button
          type="button"
          className="btn-elegan"
          onClick={() => document.getElementById("booking")?.scrollIntoView()}
        >
          Pesan Sekarang
        </button>
      </div>
    </nav>
  );
}
