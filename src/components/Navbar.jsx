// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <nav>
  <div className="nav-logo">Explorador de Películas</div>
  <div className="nav-links">
    <a href="/">Inicio</a>
    <a href="/popular">Populares</a>
    <a href="/contact">Contacto</a>
  </div>
</nav>

  );
}
