import React from "react";
import "tw-elements";
import bar from "../assets/bar.png";
import bookstorage from "../assets/bookstorage.png";
import bookstorage2 from "../assets/bookstorage2.png";
import ongbird from "../assets/ongbird.png";
import travel from "../assets/TravelN.png";

const Gallery = ({ id }) => {
	return (
		<section
			id={id}
			className="text-gold font-lato font-semibold bg-mate3 w-full pb-16">
			<div className="container px-5 py-4 mx-auto w-full">
				<div className="flex flex-col text-center w-full mb-16">
					<h2 className="text-3xl mb-4 text-white">Proyectos</h2>
				</div>
				<div
					id="carouselExampleCaptions"
					className="carousel slide relative"
					data-bs-ride="carousel">
					<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="0"
							className="active"
							aria-current="true"
							aria-label="Slide 1"></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="1"
							aria-label="Slide 2"></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="2"
							aria-label="Slide 3"></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="3"
							aria-label="Slide 4"></button>
						<button
							type="button"
							data-bs-target="#carouselExampleCaptions"
							data-bs-slide-to="4"
							aria-label="Slide 5"></button>
					</div>
					<div className="carousel-inner relative w-full overflow-hidden">
						<div className="carousel-item active relative float-left w-full">
							<img src={travel} className="block w-full" alt="..." />
						</div>
						<div className="carousel-item relative float-left w-full">
							<img src={bookstorage} className="block w-full" alt="..." />
						</div>
						<div className="carousel-item relative float-left w-full">
							<img src={bookstorage2} className="block w-full" alt="..." />
						</div>
						<div className="carousel-item relative float-left w-full">
							<img src={ongbird} className="block w-full" alt="..." />
						</div>
						<div className="carousel-item relative float-left w-full">
							<img src={bar} className="block w-full" alt="..." />
						</div>
					</div>
					<button
						className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="prev">
						<span
							className="carousel-control-prev-icon inline-block bg-no-repeat"
							aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
						type="button"
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide="next">
						<span
							className="carousel-control-next-icon inline-block bg-no-repeat"
							aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
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
