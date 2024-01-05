import React from "react";
import mail from "../assets/email.svg";
import phone from "../assets/phone.svg";
import map from "../assets/map.svg";
import insta from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import linkedin from "../assets/linkedin.svg";
import github2 from "../assets/github2.svg";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<footer className="font-lato bg-mate3 w-full h-auto pt-10">
			<div className="flex flex-col justify-center w-full h-auto ">
				<h2 className="border border-solid border-gold "></h2>
			</div>
			<div className="md:flex md:flex-row md:justify-center md:py-4">
				<div className="px-14 flex justify-center py-4 md:p-5">
					<motion.div
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 10,
							delay: 0.5,
						}}
						className="flex flex-row items-center py-4 px-4 bg-mate rounded-lg">
						<img src={mail} alt="email" width="35px" />
						<h2 className="flex font-lato cursor-default font-semibold text-gold hover:text-white py-2 mx-1 md:mx-2 lg:mx-4">
							ignacionahuelmorales@gmail.com
						</h2>
					</motion.div>
				</div>
				<div className="px-14 flex justify-center py-4 md:p-5">
					<motion.div
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 10,
							delay: 1,
						}}
						className="flex flex-row items-center py-4 px-4 bg-mate rounded-lg">
						<img src={phone} alt="telefono" width="35px" />
						<h2 className="flex font-lato cursor-default font-semibold text-gold hover:text-white py-2 mx-1 md:mx-2 lg:mx-4">
							+54 9 2224 45-6653
						</h2>
					</motion.div>
				</div>
				<div className="px-14 flex justify-center py-4 md:p-5">
					<motion.div
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 10,
							delay: 1.5,
						}}
						className="flex flex-row items-center py-4 px-4 bg-mate rounded-lg">
						<img src={map} alt="ubicacion" width="35px" />
						<h2 className="flex font-lato cursor-default font-semibold text-gold hover:text-white py-2 mx-1 md:mx-2 lg:mx-4">
							Bs As, San Vicente
						</h2>
					</motion.div>
				</div>
			</div>
			<div className="flex flex-row w-full h-auto justify-center py-4">
				<div className="flex flex-col w-full justify-center">
					<h2 className="border border-solid border-gold"></h2>
				</div>
				<motion.a
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 20,
						delay: 0.5,
					}}
					whileHover={{
						scale: 1.5,
					}}
					href="https://www.instagram.com/nacho_ignacio3/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col mx-4 justify-center md:w-20 lg:w-20">
					<img src={insta} alt="instagram" width="150px" />
				</motion.a>
				<motion.a
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 20,
						delay: 1,
					}}
					whileHover={{
						scale: 1.5,
					}}
					href="https://wa.me/5492224456653"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col mx-4 justify-center md:w-20 lg:w-20">
					<img src={whatsapp} alt="whatsapp" width="150px" />
				</motion.a>
				<motion.a
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 20,
						delay: 1.5,
					}}
					whileHover={{
						scale: 1.5,
					}}
					href="https://www.linkedin.com/in/ignacio-morales35/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col mx-4 justify-center md:w-20 lg:w-20">
					<img src={linkedin} alt="linkedin" width="150px" />
				</motion.a>
				<motion.a
					initial={{ y: -100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 20,
						delay: 2,
					}}
					whileHover={{
						scale: 1.5,
					}}
					href="https://github.com/Nacho35"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-col mx-4 justify-center md:w-20 lg:w-20">
					<img src={github2} alt="github" width="150px" />
				</motion.a>
				<div className="flex flex-col w-full justify-center">
					<h2 className="border border-solid border-gold"></h2>
				</div>
			</div>
			<motion.div
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					type: "spring",
					stiffness: 10,
				}}>
				<h2 className="flex justify-center text-gold font-merriweather font-semibold text-lg">
					❝Gracias Por Su Tiempo❞
				</h2>
			</motion.div>
		</footer>
	);
};

export default Footer;
