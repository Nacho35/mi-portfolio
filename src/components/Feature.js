import React from "react";
import world from "../assets/world.svg";
import user from "../assets/user.svg";
import tech from "../assets/laptop.svg";
import arrow from "../assets/down.svg";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <section className="text-gold font-lato font-semibold bg-mate3">
      <div className="container px-5 py-24 mx-auto w-full min-h-fit lg:min-h-screen lg:py-4 md:min-h-screen md:py-4">
        <div className="w-full flex justify-center mb-14">
          <h2 className=" text-white flex justify-center font-semibold text-3xl">
            Mis Características
          </h2>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gold sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img className="w-20 h-20" src={world} alt="icon" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-semibold mb-2">
              Lorem, ipsum.
            </h2>
            <p className="leading-relaxed text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem officiis nesciunt amet ab quo ipsum.
            </p>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gold sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-semibold mb-2">
              Lorem, ipsum.
            </h2>
            <p className="leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quas praesentium quod deserunt illum qui!
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img className="w-20 h-20" src={user} alt="icon" />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img className="w-20 h-20" src={tech} alt="icon" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-white text-lg title-font font-semibold mb-2">
              Lorem, ipsum.
            </h2>
            <p className="leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur voluptates autem optio laboriosam dolor. Repudiandae!
            </p>
          </div>
        </div>
        <Link
          to="/skills"
          className="flex justify-center mx-auto mt-12 border-none text-white bg-transparent border-2 border-gold px-6 focus:outline-none text-4xl font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
          <img className="w-10 h-10" src={arrow} alt="icon" />
        </Link>
      </div>
    </section>
  );
};

export default Feature;
