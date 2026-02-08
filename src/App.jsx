import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Contact from './Component/Contact';
import Service from "./Component/Service";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <Service />
      <Contact />
    </div>
  );
};

export default App;
