import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import "../css/hero.css";

function Hero() {
  return (
    <section className="hero">
      
      <h2>Olá, sou Rafael!</h2>
       <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>
        <Typewriter
          words={[
            'Desenvolvedor FullStack',
            'Python, PHP, JavaScript, React',
            'Criador de interfaces incríveis',
            'Apaixonado por tecnologia',
          ]}
          loop={0} // 0 = infinito
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </span>
      <p>Desenvolvedor focado em criar experiências web incríveis!</p>
      <a href="/rcurriculo Rafael Perez Profissional.pdf" download className="btn">Baixar Currículo</a>
    </section>
  );
}

export default Hero;
