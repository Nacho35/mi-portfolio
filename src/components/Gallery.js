import React from "react";
import arrow from "../assets/down.svg";

const Gallery = () => {
  return (
    <section class="text-gold font-lato font-semibold bg-mate3">
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-16">
          <h1 class="sm:text-3xl text-3xl font-lg title-font mb-4 text-white">
            Portfolio
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p class="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/601x361"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p class="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/603x363"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p class="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/602x362"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p class="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/605x365"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p class="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <img
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/606x366"
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p class="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <button class="flex mx-auto mt-20  text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-6 focus:outline-none text-lg font-semibold hover:text-mate hover:bg-gold">
            Descargar CV
          </button>
        </div>
      </div>
      <button class="flex mx-auto mt-12 border-none text-white bg-transparent border-2 border-gold px-6 focus:outline-none text-4xl font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
        <img className="w-10 h-10" src={arrow} alt="icon" />
      </button>
    </section>
  );
};

export default Gallery;
