import React from "react";
import user from "../assets/user.svg";
import users from "../assets/users.svg";
import tech from "../assets/laptop.svg";

const Feature = () => {
	return (
		<section className="text-gold font-lato font-semibold bg-mate3 w-full md:h-auto">
			<div className="container px-5  mx-auto w-full py-16">
				<div className="w-full flex justify-center mb-14">
					<h2 className="text-white flex justify-center font-semibold text-3xl">
						Experiencia
					</h2>
				</div>
				<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gold sm:flex-row flex-col">
					<div className="w-20 h-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
						<img className="w-20 h-20" src={tech} alt="icon" />
					</div>
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<h2 className="text-white text-lg title-font font-semibold mb-2">
							Tecnologías
						</h2>
						<p className="leading-relaxed text-base">
							"Soy un desarrollador Full Stack con especialización en el
							desarrollo de front-end. Tengo experiencia trabajando con
							tecnologías como JavaScript, React, HTML y CSS. Estoy capacitado
							en usar estas tecnologías para crear interfaces responsivas y
							fáciles de usar. Siempre estoy buscando mantenerme actualizado con
							las últimas tendencias y herramientas del mercado para poder
							ofrecer resultados de alta calidad."
						</p>
					</div>
				</div>
				<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gold sm:flex-row flex-col">
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<h2 className="text-white text-lg title-font font-semibold mb-2">
							Trabajo en equipo
						</h2>
						<p className="leading-relaxed text-base">
							"Soy un desarrollador Full Stack con experiencia trabajando en
							equipos multidisciplinarios. Me considero una persona
							colaborativa, proactiva y comprometida. Disfruto trabajar en
							ambientes de equipo y creo que la comunicación y el trabajo en
							equipo son clave para lograr el éxito en cualquier proyecto. Mi
							experiencia laboral incluye trabajar en equipos de diferentes
							tamaños y en diferentes etapas del proyecto, desde la
							planificación hasta el lanzamiento."
						</p>
					</div>
					<div className="w-20 h-20 sm:ml-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
						<img className="w-20 h-20" src={users} alt="icon" />
					</div>
				</div>
				<div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
					<div className="w-20 h-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
						<img className="w-20 h-20" src={user} alt="icon" />
					</div>
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<h2 className="text-white text-lg title-font font-semibold mb-2">
							Trabajo individual
						</h2>
						<p className="leading-relaxed text-base">
							"Como desarrollador Full Stack, me siento cómodo tanto trabajando
							en equipo como de manera independiente. Soy capaz de gestionar mi
							tiempo eficazmente y priorizar tareas para cumplir con los plazos.
							Soy un aprendiz autodirigido y disfruto investigando nuevas
							tecnologías y técnicas para mejorar mis habilidades. Puedo
							resolver problemas y depurar errores de manera eficiente. Mi gran
							atención al detalle y capacidad de pensar críticamente me permite
							entregar código de alta calidad y bien probado. Me siento cómodo
							trabajando de manera independiente y tomando responsabilidad de
							mis proyectos."
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Feature;
