import React from "react";
import arrowup from "../assets/up-arrow.svg";

function FloatingButton() {
	return (
		<button
			onClick={scrollToTop}
			className="fixed bottom-5 right-8 z-50 border-none outline-none bg-mate cursor-pointer p-4 rounded-full  hover:bg-gold">
			<img src={arrowup} alt="arrow" />
		</button>
	);
}
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
export default FloatingButton;
