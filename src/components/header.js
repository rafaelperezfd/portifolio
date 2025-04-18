import React, { useState } from "react";
import "../css/header.css";

function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo"><img src="/MinhaLogo.png" alt="img"></img></div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={closeMenu}>Sobre</a>
        <a href="#projects" onClick={closeMenu}>Projetos</a>
        <a href="#contact" onClick={closeMenu}>Contato</a>
      </nav>

      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
