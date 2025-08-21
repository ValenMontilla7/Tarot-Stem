import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🧿</span>
          <span className="logo-text">Tarot STEM</span>
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">
            🧿Inicio🧿
          </Link>
          <Link to="/cards" className="navbar-item">
            🧿Cartas🧿
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;