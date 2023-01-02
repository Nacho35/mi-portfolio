import "./App.css";
import About from "./components/About";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <About />
      <Skills />
      <Gallery />
    </>
  );
}

export default App;
