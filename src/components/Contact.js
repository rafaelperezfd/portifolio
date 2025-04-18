import React from "react";
import "../css/contato.css";

function Contact() {
  return (
    <section id="contact" data-aos="fade-up" className="contact">
      <h2>Contato</h2>
      <p>Entre em contato comigo para colaborações ou oportunidades!</p>
      <form className="contact-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu email" required />
        <textarea placeholder="Sua mensagem" rows="5" required></textarea>
        <button type="submit" className="btn">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
