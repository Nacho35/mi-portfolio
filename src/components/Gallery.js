import React from "react";
import Card from "./Card";
import prueba from "../assets/prueba.jpg";

const Gallery = ({ id }) => {
	const projects = [
		{
			image: prueba,
			projectLink: "https://youtu.be/mKcAH-AFvO4",
			title: "Fast Diary App",
			description:
				"Fast Diary es una app web de gestión del tiempo con Calendario, Lista de Tareas, Reloj, Temporizador y Asistente. Organiza tu rutina diaria para un estilo de vida organizado y productivo. ¡Optimiza tu tiempo con herramientas poderosas y un asistente dedicado!",
			footer: "Creado con React.js & Next.js",
		},
		{
			image: prueba,
			projectLink: "https://youtu.be/oWTLtwmS6NU",
			title: "E-commerce App",
			description:
				"Este proyecto es un sitio web de restaurante con diseño responsive. El frontend utiliza React con Styled Components para el diseño y React Slick para mostrar imágenes. El backend almacena productos en una base de datos JSON y utiliza Axios para manejar peticiones HTTP en el carro de compras.",
			footer: "Creado con React.js",
		},
		{
			image: prueba,
			projectLink: "https://youtu.be/AHKRMf78B7E",
			title: "Leaf DB App",
			description:
				"Este proyecto consiste en una app web que se conecta a una base de datos SQL para almacenar y gestionar información sobre productos. Este backend proporcionará una interfaz y lógica de programación que permitirá a los usuarios realizar operaciones de creación, lectura, actualización y eliminación de productos en la base de datos.",
			footer: "Creado con Express.js & Node.js",
		},
		{
			image: prueba,
			projectLink: "",
			title: "TravelN App",
			description:
				"La app es una agencia de viajes que ofrece paquetes mundiales. conecta con una base de datos JSON. Permite seleccionar paquetes, ver ofertas, gestionar el carro, simular costos de vacaciones. Al hacer clic en seleccionar fecha, completa un formulario, genera un modal de confirmación y, al hacer clic en agregar, actualiza el carro.",
			footer: "Creado con React.js",
		},
	];

	return (
		<section
			id={id}
			className="text-gold font-lato font-semibold bg-mate3 w-full">
			<div className="container px-5 py-4 mx-auto w-full">
				<div className="flex flex-col text-center w-full mb-8">
					<h2 className="text-3xl mb-4 text-white">Proyectos</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
					{projects.map((project, index) => (
						<Card key={index} {...project} />
					))}
				</div>
				<a
					href="https://drive.google.com/file/d/13kIAPHqpxjyujXM8VdOwtFvzxqoT87MU/view?usp=share_link"
					target="_blank"
					rel="noopener noreferrer"
					className="flex my-10 mx-auto w-fit items-center text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-6 focus:outline-none text-lg font-semibold hover:text-mate hover:bg-gold down down-animation">
					Descargar CV
				</a>
			</div>
		</section>
	);
};

export default Gallery;
