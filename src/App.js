import "./App.css";
import About from "./components/About";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import Footer from "./components/Footer";
import AppRouter from "./routes/index.js";

function App() {
  return (
    <AppRouter>
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Skills />
      <Gallery />
      <Form />
      <Footer />
    </AppRouter>
  );
}

export default App;
