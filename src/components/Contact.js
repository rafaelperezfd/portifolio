import React from "react";
import "../css/contato.css";

function Contact() {
  return (
    <section id="contact" data-aos="fade-up" className="contact">
      <h2>Contato</h2>
      <p>Entre em contato comigo para colaborações ou oportunidades!</p>
        <form
          className="contact-form"
          action="https://formspree.io/f/xzzelgqq"
          method="POST"
        >
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea name="message" placeholder="Sua mensagem" rows="5" required></textarea>
          <button type="submit" className="btn">Enviar</button>
        </form>
    </section>
  );
}

export default Contact;
