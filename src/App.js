import React, { useEffect, useState } from "react";
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

  const [scrollDir, setScrollDir] = useState("none");
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      // Só define visibilidade se já passou um pouquinho
      setAtTop(currentScrollY < 10);
  
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDir("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDir("up");
      }
  
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="App">
      <Header scrollDir={scrollDir} atTop={atTop}/>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
