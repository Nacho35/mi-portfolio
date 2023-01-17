import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "../components/About";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Form from "../components/Form";
import Skills from "../components/Skills";
import Home from "../components/Home";

const index = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/form" element={<Form />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default index;
