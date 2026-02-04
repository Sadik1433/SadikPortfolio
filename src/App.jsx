import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Skills from "./Component/Skills";
import About from "./Component/About";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
    </div>
  );
};

export default App;
