import React, { Fragment } from "react";
import Feature from "./Feature";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Gallery from "./Gallery";
import Form from "./Form";
import Footer from "./Footer";

const Index = () => {
	return (
		<Fragment>
			<Navbar />
			<Home id="home" />
			<About id="about" />
			<Feature />
			<Skills id="skills" />
			<Gallery id="gallery" />
			<Form id="form" />
			<Footer />
		</Fragment>
	);
};

export default Index;
