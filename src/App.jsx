import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project from './components/Project'
import Service from './components/Service'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
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
      <Footer />
    </div>
  );
};

export default App;
