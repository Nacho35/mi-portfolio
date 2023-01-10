import React from "react";

const Form = () => {
  return (
    <section className="text-white font-lato bg-mate3 relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="text-3xl mb-4 text-white font-semibold">Contacto</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="nombre"
                  className="leading-7 text-sm text-white">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  autoComplete="off"
                  required
                  className="w-full bg-mate bg-opacity-50 rounded-lg border border-gold border-solid focus:border-mate focus:bg-white font-merriweather focus:text-black focus:ring-2 focus:ring-gold text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  required
                  className="w-full bg-mate bg-opacity-50 rounded-lg border border-gold border-solid focus:border-mate focus:bg-white font-merriweather focus:text-black focus:ring-2 focus:ring-gold text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="mensaje"
                  className="leading-7 text-sm text-white">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  autoComplete="off"
                  required
                  className="w-full bg-mate bg-opacity-50 rounded-lg border border-gold border-solid focus:border-mate focus:bg-white font-merriweather focus:text-black focus:ring-2 focus:ring-gold h-48 text-base outline-none text-white py-1 px-3 resize-y leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto mt-20 text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-20 focus:outline-none text-base font-semibold hover:text-mate hover:bg-gold lg:px-44 md:px-44 md:text-lg lg:text-lg">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
