import "./App.css";
import About from "./components/About";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Feature />
      <Skills />
      <Gallery />
      <Form />
      <Footer />
    </>
  );
}

export default App;
