import React from "react";
import bghome2 from "../assets/bg-home2.webp";
import { Link as ScrollLink } from "react-scroll";
import FloatingButton from "./FloatingButton";

const Home = ({ id }) => {
	return (
		<section id="home" className="font-lato relative w-full min-h-full">
			<img className="bg-cover bg-center" src={bghome2} alt="bg" />
			<div className="bg-black bg-opacity-50 absolute inset-0"></div>
			<div
				id={id}
				className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center absolute justify-center bottom-0 top-0 left-0 right-0 lg:absolute lg:bottom-0 lg:top-0 lg:left-0 lg:right-0">
				<div className="lg:flex-grow lg:items-center md:w-full flex flex-col md:items-center md:text-center items-center text-center">
					<div className="text-base font-semibold text-white mb-8 lg:text-3xl text-center md:text-2xl lg:mb-96">
						<h3>Hola Soy!</h3>
						<h1 className="flex flex-col text-3xl text-white font-semibold my-2  lg:text-7xl lg:text-center md:text-6xl">
							Ignacio Morales
						</h1>
						<br className="hidden lg:inline-block" />
						<h2 className="flex justify-center mb-8 leading-relaxed text-xl text-white font-semibold lg:text-4xl md:text-3xl">
							Full Stack Developer
						</h2>
						<div className="flex justify-center">
							<ScrollLink
								to="form"
								spy={true}
								smooth={true}
								offset={-70}
								duration={2000}
								className="inline-flex border-2 border-gold rounded border-solid py-2 px-6 mb-2 focus:outline-none text-base lg:text-xl md:text-lg font-semibold text-mate bg-gold cursor-pointer button-home">
								Contacto
							</ScrollLink>
						</div>
					</div>
				</div>
			</div>
			<FloatingButton />
		</section>
	);
};

export default Home;
