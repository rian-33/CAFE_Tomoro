export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Tomoro <span>COFFEE</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#suasana">Suasana</a>
        </li>
        <li>
          <a href="#booking">Booking</a>
        </li>
      </ul>
      <button className="btn-pesan">Pesan Sekarang</button>
    </nav>
  );
}
