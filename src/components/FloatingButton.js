import React from "react";
import arrowup from "../assets/up-arrow.svg";
import { Link } from "react-scroll";

function FloatingButton() {
	return (
		<Link
			to="home"
			spy={true}
			smooth={true}
			offset={-70}
			duration={2000}
			className="fixed bottom-5 right-8 z-50 border-none outline-none bg-mate cursor-pointer p-4 rounded-full hover:bg-gold">
			<img src={arrowup} alt="arrow" />
		</Link>
	);
}

export default FloatingButton;
