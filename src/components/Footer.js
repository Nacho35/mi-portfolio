import React from "react";
import mail from "../assets/email.svg";
import phone from "../assets/phone.svg";
import map from "../assets/map.svg";
import insta from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import linkedin from "../assets/linkedin.svg";
import github2 from "../assets/github2.svg";

const Footer = () => {
	return (
		<footer className="font-lato bg-mate3 w-full h-auto pt-10">
			<div className="flex flex-col justify-center w-full h-auto ">
				<div className="border border-solid border-gold "></div>
			</div>
			<div className="md:flex md:flex-row md:justify-center md:py-4">
				<div className="m-auto flex justify-center my-4 md:p-2 md:m-auto md:w-full bg-mate lg:p-2 lg:w-full">
					<div className="flex flex-row items-center p-4 md:m-auto">
						<img src={mail} alt="email" width="35px" />
						<a
							href="mailto:ignacionahuelmorales@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							className="flex font-lato cursor-pointer font-semibold text-gold hover:text-white mx-3 whitespace-nowrap">
							ignacionahuelmorales@gmail.com
						</a>
					</div>
				</div>
				<div className="m-auto flex justify-center my-4 md:p-2 md:m-auto md:w-full bg-mate lg:p-2 lg:w-full">
					<div className="flex flex-row items-center p-4 md:m-auto">
						<img src={phone} alt="telefono" width="35px" />
						<a
							href="tel:+542224456653"
							target="_blank"
							rel="noopener noreferrer"
							className="flex font-lato cursor-pointer font-semibold text-gold hover:text-white mx-3 whitespace-nowrap">
							+54 9 2224 45-6653
						</a>
					</div>
				</div>
				<div className="m-auto flex justify-center my-4 md:p-2 md:m-auto md:w-full bg-mate lg:p-2 lg:w-full">
					<div className="flex flex-row items-center p-4 md:m-auto">
						<img src={map} alt="ubicacion" width="35px" />
						<a
							href="https://www.google.com/maps?q=Bs+As,San+Vicente"
							target="_blank"
							rel="noopener noreferrer"
							className="flex font-lato cursor-pointer font-semibold text-gold hover:text-white mx-3 whitespace-nowrap">
							Buenos Aires, San Vicente
						</a>
					</div>
				</div>
			</div>
			<div className="flex flex-row w-full h-auto justify-center py-4">
				<div className="flex flex-col w-full justify-center">
					<div className="border border-solid border-gold"></div>
				</div>
				<a
					href="https://www.instagram.com/nacho_ignacio3/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col mx-4 justify-center md:w-20 lg:w-20 btn-footer btn-footer-animation">
					<img src={insta} alt="instagram" width="150px" />
				</a>
				<a
					href="https://wa.me/5492224456653"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col mx-4 justify-center md:w-20 lg:w-20 btn-footer btn-footer-animation">
					<img src={whatsapp} alt="whatsapp" width="150px" />
				</a>
				<a
					href="https://www.linkedin.com/in/ignacio-morales35/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col mx-4 justify-center md:w-20 lg:w-20 btn-footer btn-footer-animation">
					<img src={linkedin} alt="linkedin" width="150px" />
				</a>
				<a
					href="https://github.com/Nacho35"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col mx-4 justify-center md:w-20 lg:w-20 btn-footer btn-footer-animation">
					<img src={github2} alt="github" width="150px" />
				</a>
				<div className="flex flex-col w-full justify-center">
					<div className="border border-solid border-gold"></div>
				</div>
			</div>
			<div>
				<h2 className="flex justify-center text-gold font-merriweather font-semibold text-lg">
					❝Gracias Por Su Tiempo❞
				</h2>
			</div>
		</footer>
	);
};

export default Footer;
