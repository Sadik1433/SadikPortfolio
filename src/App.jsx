import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Skills from "./Component/Skills";
import About from "./Component/About";
import Project from "./Component/Project";

const App = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Project />
      <About />
    </div>
  );
};

export default App;
