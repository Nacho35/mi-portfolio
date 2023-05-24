import React from "react";
import { Link } from "react-router-dom";
import me from "../assets/yo.jpg";
import { motion } from "framer-motion";

const About = () => {
	return (
		<section className="bg-mate3 font-lato w-full pb-10">
			<div className="container max-h-fit w-full mx-auto flex px-5 md:flex-col flex-col items-center lg:flex-row md:flex md:text-center">
				<div className="lg:flex-grow md:w-full lg:pr-24 md:pt-14 flex flex-col md:items-center lg:items-start md:text-justify mb-16 py-4 lg:my-24 md:mb-auto items-center text-center">
					<motion.h1
						initial={{ opacity: 0, scale: 1, x: 50 }}
						animate={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							type: "spring",
							stiffness: 10,
						}}
						className="sm:text-4xl text-3xl mb-4 font-semibold text-white">
						Acerca de mí
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, scale: 1, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							stiffness: 10,
						}}
						className="mb-8 leading-relaxed text-gold font-semibold">
						Hola, mi nombre es Ignacio y soy un desarrollador apasionado por la
						tecnología. Mi objetivo a largo plazo es seguir creciendo
						profesionalmente en el desarrollo web, y en un futuro ingresar al
						desarrollo de software. Mi meta es contribuir al desarrollo de
						proyectos innovadores y útiles para la sociedad, y trabajar en
						equipos multidisciplinarios para lograrlo. Mi historia con la
						programación comenzó como adulto, me interesaba mucho cómo
						funcionaba internet y cómo se creaban sitios web, entonces decidí
						aprender HTML y CSS. Con el tiempo me di cuenta de que quería ir más
						allá y empecé a aprender JavaScript, este fue el lenguaje que me
						enamoró de la programación. Mi experiencia se centra en JavaScript,
						React, HTML, CSS, Node.js, MongoDB y Express. Me considero una
						persona empática, responsable y comprometida en cada proyecto en el
						que participo. Disfruto de las pequeñas cosas de la vida y me
						esfuerzo constantemente por mejorar mis habilidades y conocimientos
						técnicos. Me considero una persona curiosa y siempre dispuesta a
						aprender cosas nuevas.
					</motion.p>
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							stiffness: 12,
						}}
						whileHover={{
							scale: 1.1,
						}}
						className="flex justify-center">
						<Link
							to="/feature"
							className="flex mx-auto text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-6 focus:outline-none text-lg font-semibold hover:text-mate hover:bg-gold">
							Saber Mas!
						</Link>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						type: "spring",
						stiffness: 10,
						delay: 0.5,
					}}
					className="lg:max-w-lg lg:w-full md:w-3/4/2 md:flex md:justify-center md:pt-20 w-5/6">
					<img
						className="object-cover object-center rounded-lg"
						alt="hero"
						src={me}
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
