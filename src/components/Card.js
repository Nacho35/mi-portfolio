import React from "react";

const Card = ({ title, description, image, projectLink, footer }) => {
	const handleClick = () => {
		window.open(projectLink, "_blank");
	};

	return (
		<div
			className="pb-10 pt-10 md:pb-10 lg:pb-10 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:grayscale duration-300 cursor-pointer outline-none"
			onClick={handleClick}>
			<div className="container bg-black rounded-b-lg h-full">
				<div className="flex flex-row justify-center">
					<img className="bg-cover border-none" src={image} alt={title} />
				</div>
				<div className="p-6">
					<h5 className="mb-4 text-2xl font-medium leading-relaxed">{title}</h5>
					<p className="mb-4 text-base">{description}</p>
					<h5 className="text-sm">{footer}</h5>
				</div>
			</div>
		</div>
	);
};

export default Card;
