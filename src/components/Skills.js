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

const Skills = ({ id }) => {
	return (
		<section id={id} className="bg-mate3 font-lato w-full pb-16">
			<div className="flex justify-center md:py-10">
				<h2 className=" text-white flex justify-center py-2 font-semibold text-3xl">
					Habilidades
				</h2>
			</div>
			<div className="w-full">
				<div className="flex justify-center py-6 md:space-x-16 lg:space-x-44">
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={html}
							width="150px"
							alt="icon"
						/>
						<p className=" absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							HTML
						</p>
					</div>
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={css}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							CSS
						</p>
					</div>
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={javascript}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							JavaScript
						</p>
					</div>
				</div>
				<div className="flex justify-center relative py-6 md:flex-row md:space-x-16 lg:space-x-44 lg:flex-row lg:justify-center">
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={typescript}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							TypeScript
						</p>
					</div>
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={sql}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							MySQL
						</p>
					</div>
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={next}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							Next.js
						</p>
					</div>
				</div>
				<div className="flex justify-center relative py-6 md:space-x-16 lg:space-x-44">
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={react}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							React
						</p>
					</div>
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={mongo}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							MongoDB
						</p>
					</div>
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={ex}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							Express.js
						</p>
					</div>
				</div>
				<div className="flex justify-center relative py-6 md:space-x-16 lg:space-x-44">
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={nodejs}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							Node.js
						</p>
					</div>
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={git}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							Git
						</p>
					</div>
					<div className="relative flex justify-center bg-transparent px-8 skill skill-animation">
						<img
							className="ml-auto mr-auto my-7"
							src={github}
							width="150px"
							alt="icon"
						/>
						<p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
							GitHub
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
