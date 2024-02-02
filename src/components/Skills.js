import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import javascript from "../assets/javascript.svg";
import mongo from "../assets/mongo.svg";
import nodejs from "../assets/node-js.svg";
import react from "../assets/reacts.svg";
import ex from "../assets/express.svg";
import typescript from "../assets/typescript.svg";
import sql from "../assets/mysql.svg";
import next from "../assets/nextjs.svg";
import vite from "../assets/vite.svg";

const Skills = ({ id }) => {
	return (
		<section id={id} className="bg-mate3 font-lato w-full pb-8">
			<div className="flex justify-center">
				<h2 className="text-white flex justify-center py-2 font-semibold text-3xl">
					Habilidades
				</h2>
			</div>
			<div className="w-full">
				{/* Frontend */}
				<div>
					<h3 className="text-gold text-2xl font-semibold my-10 text-center">
						Frontend
					</h3>
					<div className="flex flex-wrap justify-center">
						{/* HTML */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={html}
									width="150px"
									alt="HTML icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									HTML
								</p>
							</div>
						</div>
						{/* CSS */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={css}
									width="150px"
									alt="CSS icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									CSS
								</p>
							</div>
						</div>
						{/* JavaScript */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={javascript}
									width="150px"
									alt="JavaScript icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									JavaScript
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Backend */}
				<div>
					<h3 className="text-gold text-2xl font-semibold my-10 text-center">
						Backend
					</h3>
					<div className="flex flex-wrap justify-center">
						{/* TypeScript */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={typescript}
									width="150px"
									alt="TypeScript icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									TypeScript
								</p>
							</div>
						</div>
						{/* Express.js */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={ex}
									width="150px"
									alt="Express.js icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									Express.js
								</p>
							</div>
						</div>
						{/* Node.js */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={nodejs}
									width="150px"
									alt="Node.js icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									Node.js
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Base de Datos */}
				<div>
					<h3 className="text-gold text-2xl font-semibold my-10 text-center">
						Base de Datos
					</h3>
					<div className="flex flex-wrap justify-center">
						{/* MongoDB */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={mongo}
									width="150px"
									alt="MongoDB icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									MongoDB
								</p>
							</div>
						</div>
						{/* MySQL */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={sql}
									width="150px"
									alt="MySQL icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									MySQL
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Librerías y Frameworks */}
				<div>
					<h3 className="text-gold text-2xl font-semibold my-10 text-center">
						Librerías y Frameworks
					</h3>
					<div className="flex flex-wrap justify-center">
						{/* React */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={react}
									width="150px"
									alt="React icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									React
								</p>
							</div>
						</div>
						{/* Next.js */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={next}
									width="150px"
									alt="Next.js icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									Next.js
								</p>
							</div>
						</div>
						{/* Vite */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={vite}
									width="150px"
									alt="Vite icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									Vite
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Herramientas */}
				<div>
					<h3 className="text-gold text-2xl font-semibold my-10 text-center">
						Herramientas
					</h3>
					<div className="flex flex-wrap justify-center">
						{/* Git */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={git}
									width="150px"
									alt="Git icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									Git
								</p>
							</div>
						</div>
						{/* GitHub */}
						<div className="mb-4 mr-4">
							<div className="relative flex justify-center bg-transparent px-8 lg:px-12 skill skill-animation">
								<img
									className="ml-auto mr-auto my-7"
									src={github}
									width="150px"
									alt="GitHub icon"
								/>
								<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
									GitHub
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
