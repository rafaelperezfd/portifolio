import React from "react";
import "../css/project.css";

function Projects() {
  return (
    <section id="projects"  data-aos="zoom-in" className="projects">
      <h2>Projetos</h2>
      <div className="project-list">
      <div className="project-card">
          <h3>WebSite Eccomerce Reserva</h3>
          <p>Desenvolvido com Django para treinar as habilidades Back-end em python.</p>
          <div className="video-container">
          <video width="100%" autoPlay muted loop>
            <source src="/Ecommerce Reserva - Google Chrome 2025-03-26 01-02-16.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          </div>
        </div>

        <div className="project-card">
          <h3>List To Do</h3>
          <p>Desenvolvido com Html, Css e JavaScript puro, afim de lista e adicionar tarefas diárias</p>
          <div className="video-container">
          <video width="100%" autoPlay muted loop>
            <source src="video\Ecommerce Reserva - Google Chrome 2025-03-26 01-02-16.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          </div>
        </div>

        <div className="project-card">
          <h3>WebSite Eccomerce Reserva</h3>
          <p>Desenvolvido com Django para treinar as habilidades Back-end em python.</p>
          <div className="video-container">
          <video width="100%" autoPlay muted loop>
            <source src="video/Ecommerce Reserva - Google Chrome 2025-03-26 01-02-16.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          </div>
        </div>

        <div className="project-card">
          <h3>WebSite Eccomerce Reserva</h3>
          <p>Desenvolvido com Django para treinar as habilidades Back-end em python.</p>
          <div className="video-container">
          <video width="100%" autoPlay muted loop>
            <source src="video/Ecommerce Reserva - Google Chrome 2025-03-26 01-02-16.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
