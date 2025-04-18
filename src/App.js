import React, { useEffect } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // tempo da animação (ms)
      once: false,     // anima só uma vez
    });
  }, []);

  return (
    <div className="App">
      <Header  />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
