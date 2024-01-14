import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Index from "../components/Index";
import About from "../components/About";
import Feature from "../components/Feature";
import Gallery from "../components/Gallery";
import Skills from "../components/Skills";
import Form from "../components/Form";

const index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} exact />
				<Route path="/about" element={<About />} />
				<Route path="/feature" element={<Feature />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/form" element={<Form />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
