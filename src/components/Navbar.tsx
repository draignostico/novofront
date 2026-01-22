import "../styles/navbar.css";
import logoSrc from "../img/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logoSrc} alt="Logotipo" />
          <span>
            Dr.<strong>AI</strong>gnóstico
          </span>
        </div>

        <nav className="nav-links">
          <a href="#sobre">Sobre nós</a>
          <a href="#planos">Nossos Planos</a>
          <a href="/login" className="btn-login">Login</a>
        </nav>
      </div>
    </header>
  );
}
