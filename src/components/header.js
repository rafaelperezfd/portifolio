import React, { useState, useEffect } from "react";
import "../css/header.css";
  
function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-mode');
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Define o tema no body
  useEffect(() => {
    document.body.classList.add(theme);
    return () => document.body.classList.remove(theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Detecta rolagem para esconder/exibir header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // rolando para baixo
      } else {
        setShowHeader(true); // rolando para cima
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="logo">
        {/* <img src="/MinhaLogo.png" alt="Logo" /> */}
      </div>
      <nav className="nav">
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
      <button className="dark-mode-toggle" onClick={toggleTheme}>
        {theme === 'light-mode' ? 'Modo Escuro' : 'Modo Claro'}
      </button>
    </header>
  );
}

export default Header;
