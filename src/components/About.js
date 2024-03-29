import React from "react";
import me from "../assets/yo.webp";

const About = ({ id }) => {
	return (
		<section id={id} className="bg-mate3 font-lato w-full pb-6">
			<div className="container max-h-fit w-full mx-auto flex px-5  md:flex-col flex-col items-center lg:flex-row md:flex md:text-center">
				<div className="lg:flex-grow md:w-full lg:pr-24 md:pt-14 flex flex-col md:items-center lg:items-start md:text-justify mb-6 py-4 lg:my-24 md:mb-auto items-center text-center">
					<h1 className="sm:text-4xl text-3xl mb-4 font-semibold text-white">
						Acerca de mí
					</h1>
					<p className="mb-8 leading-loose text-gold font-semibold text-justify">
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
					</p>
				</div>
				<div className="lg:max-w-lg lg:w-full md:w-3/4/2 md:flex md:justify-center md:pt-10 w-5/6">
					<img
						className="object-cover object-center rounded-lg"
						alt="hero"
						src={me}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
