import React from "react";
import world from "../assets/world.svg";
import user from "../assets/user.svg";
import tech from "../assets/laptop.svg";

const Feature = () => {
  return (
    <section class="text-gold font-lato font-semibold bg-mate3">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gold sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img className="w-20 h-20" src={world} alt="icon" />
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-white text-lg title-font font-semibold mb-2">
              Lorem, ipsum.
            </h2>
            <p class="leading-relaxed text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem officiis nesciunt amet ab quo ipsum.
            </p>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gold sm:flex-row flex-col">
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-white text-lg title-font font-semibold mb-2">
              Lorem, ipsum.
            </h2>
            <p class="leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quas praesentium quod deserunt illum qui!
            </p>
          </div>
          <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
            <img className="w-20 h-20" src={user} alt="icon" />
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img className="w-20 h-20" src={tech} alt="icon" />
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 class="text-white text-lg title-font font-semibold mb-2">
              Lorem, ipsum.
            </h2>
            <p class="leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur voluptates autem optio laboriosam dolor. Repudiandae!
            </p>
          </div>
        </div>
        <button class="flex mx-auto mt-20  text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-6 focus:outline-none text-lg font-semibold hover:text-mate hover:bg-gold">
          Continuar
        </button>
      </div>
    </section>
  );
};

export default Feature;
