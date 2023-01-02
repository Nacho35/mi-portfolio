import React from "react";
import pic from "../assets/prueba.jpg";

const Hero = () => {
  return (
    <section class="bg-mate font-lato">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font text-xl sm: mb-4 font-semibold text-white lg:text-3xl">
            Hola Soy!{" "}
            <span className="flex flex-col text-5xl text-gold font-semibold my-2  lg:text-6xl md:text-4xl">
              Ignacio Morales
            </span>
            <br class="hidden lg:inline-block" />
          </h1>
          <p class="mb-8 leading-relaxed text-2xl text-white font-semibold lg:text-4xl">
            Full Stack Developer
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-6 focus:outline-none text-lg font-semibold hover:text-mate hover:bg-gold">
              Contáctame
            </button>
          </div>
        </div>
        <div class="lg:max-w-fit lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-contain object-center rounded-lg"
            alt="Foto"
            src={pic}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
