import React from "react";
import arrow from "../assets/down.svg";

const Gallery = () => {
  return (
    <section className="text-gold font-lato font-semibold bg-mate3">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h2 className="text-3xl mb-4 text-white">Portfolio</h2>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/600x360"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/601x361"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/603x363"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/602x362"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/605x365"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src="https://dummyimage.com/606x366"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gold bg-mate opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-md title-font font-lg text-gold mb-6">
                  Lorem, ipsum dolor.
                </h2>
                <p className="leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur magni, nihil quaerat quibusdam deleniti fugiat.
                </p>
              </div>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/13kIAPHqpxjyujXM8VdOwtFvzxqoT87MU/view?usp=share_link"
            target="_blank"
            className="flex mx-auto mt-20 text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-6 focus:outline-none text-lg font-semibold hover:text-mate hover:bg-gold">
            Descargar CV
          </a>
        </div>
      </div>
      <button className="flex mx-auto mt-12 border-none text-white bg-transparent border-2 border-gold px-6 focus:outline-none text-4xl font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
        <img className="w-10 h-10" src={arrow} alt="icon" />
      </button>
    </section>
  );
};

export default Gallery;
