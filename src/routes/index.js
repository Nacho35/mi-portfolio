import React from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Parent from "../components/Parent";
import Index from "../components/Index";
import Parent2 from "./../components/Parent2";
import Parent3 from "../components/Parent3";
import Parent4 from "./../components/Parent4";
import Parent5 from "./../components/Parent5";

const index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} exact />
				<Route path="/about" element={<Parent2 />} />
				<Route path="/feature" element={<Parent3 />} />
				<Route path="/gallery" element={<Parent5 />} />
				<Route path="/skills" element={<Parent4 />} />
				<Route path="/form" element={<Parent />} />
				<Route path="/footer" element={<Parent />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default index;
