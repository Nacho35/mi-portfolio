import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import About from "../components/About";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Parent from "../components/Parent";
import Skills from "../components/Skills";
import Index from "../components/Index";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/form" element={<Parent />} />
        <Route path="/footer" element={<Parent />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
