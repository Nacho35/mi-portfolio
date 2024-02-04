import React from "react";
import Card from "./Card";
import ecommerce from "../assets/e-commerce.svg";
import books from "../assets/bookstorage.svg";
import diary from "../assets/fastdiary.svg";
import db from "../assets/leafdb.svg";

const Gallery = ({ id }) => {
	const projects = [
		{
			image: diary,
			projectLink: "https://youtu.be/mKcAH-AFvO4",
			title: "Fast Diary App",
			description:
				"Fast Diary es una app web de gestión del tiempo con Calendario, Lista de Tareas, Reloj, Temporizador y Asistente. Organiza tu rutina diaria para un estilo de vida organizado y productivo. ¡Optimiza tu tiempo con herramientas poderosas y un asistente dedicado!",
			footer: "Creado con React.js & Next.js",
		},
		{
			image: ecommerce,
			projectLink: "https://youtu.be/oWTLtwmS6NU",
			title: "E-commerce App",
			description:
				"Este proyecto es un sitio web de restaurante con diseño responsive. El frontend utiliza React con Styled Components para el diseño y React Slick para mostrar imágenes. El backend almacena productos en una base de datos JSON y utiliza Axios para manejar peticiones HTTP en el carro de compras.",
			footer: "Creado con React.js",
		},
		{
			image: db,
			projectLink: "https://youtu.be/AHKRMf78B7E",
			title: "Leaf DB App",
			description:
				"Este proyecto consiste en una app web que se conecta a una base de datos SQL para almacenar y gestionar información sobre productos. Este backend proporcionará una interfaz y lógica de programación que permitirá a los usuarios realizar operaciones de creación, lectura, actualización y eliminación de productos en la base de datos.",
			footer: "Creado con Express.js & Node.js",
		},
		{
			image: books,
			projectLink: "https://youtu.be/NpLSt0Ly7wg",
			title: "Books Storage App",
			description:
				"Proyecto CRUD de libros: Plataforma informativa para agregar, obtener y eliminar datos de libros. Interfaz intuitiva para gestionar eficientemente la información bibliográfica. Ideal para la gestión de bibliotecas o colecciones de libros, con operaciones de GET, POST y DELETE habilitadas.",
			footer: "Creado con Express.js & Node.js",
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
