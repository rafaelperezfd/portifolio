import React from "react";
import "../css/footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Transformando ideias em experiências digitais incríveis.</p>
        <p>Gmail: rafaperezlife@gmail.com</p>
        <div className="socials">
          <a href="https://github.com/rafaelperezfd" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} style={{ marginRight: '8px' }} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rafa-perez-a508a6326" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} style={{ marginRight: '8px' }} />
            LinkedIn
          </a>
          <a href="https://www.instagram.com/perezzrafaa/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} style={{ marginRight: '8px' }} />
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rafael Perez. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
