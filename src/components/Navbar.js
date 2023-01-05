import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import bg from "../assets/bg.mp4";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="font-lato font-semibold bg-mate3">
      <div className="max-w-full mr-auto px-4 sm:px-6 lg:ml-auto">
        <div className="flex items-center justify-center h-16 space-x-5 lg:w-full lg:grid grid-cols-2">
          <a
            className="text-gold lg:flex justify-center hover:bg-gold hover:text-mate px-3 py-2 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white lg:text-center"
            href="#">
            Ignacio Morales
          </a>
          <div className="flex items-center lg:grid grid-cols-1">
            <div className="hidden md:block">
              <div className="ml-16 flex items-center flex-row space-x-4 lg:flex lg:items-center">
                <a
                  href="#"
                  className="text-gold hover:bg-gold hover:text-mate px-3 py-2 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white">
                  Inicio
                </a>

                <a
                  href="#"
                  className="text-gold hover:bg-gold hover:text-mate px-3 py-2 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white">
                  Acerca de
                </a>

                <a
                  href="#"
                  className="text-gold hover:bg-gold hover:text-mate px-3 py-2 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white">
                  Proyectos
                </a>

                <a
                  href="#"
                  className="text-gold hover:bg-gold hover:text-mate px-3 py-2 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white">
                  Contacto
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gold hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gold"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-gold hover:bg-gold hover:text-mate block px-2 py-4 rounded-md text-xl">
                Inicio
              </a>

              <a
                href="#"
                className="text-gold hover:bg-gold hover:text-mate block  px-2 py-4 rounded-md text-xl">
                Acerca de
              </a>

              <a
                href="#"
                className="text-gold hover:bg-gold hover:text-mate block px-2 py-4 rounded-md text-xl">
                Proyectos
              </a>

              <a
                href="#"
                className="text-gold hover:bg-gold hover:text-mate block px-2 py-4 rounded-md text-xl">
                Contacto
              </a>
            </div>
          </div>
        )}
      </Transition>
      <section className="font-lato relative w-full h-full">
        <video src={bg} autoPlay loop muted></video>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center absolute justify-center bottom-0 top-0 left-0 right-0 lg:absolute lg:bottom-0 lg:top-0 lg:left-0 lg:right-0">
          <div className="lg:flex-grow lg:items-center md:w-full flex flex-col md:items-center md:text-center items-center text-center">
            <div className="text-base font-semibold text-white lg:text-3xl text-center md:text-2xl">
              Hola Soy!{" "}
              <span className="flex flex-col text-3xl text-gold font-semibold my-2  lg:text-7xl lg:text-center md:text-6xl">
                Ignacio Morales
              </span>
              <br className="hidden lg:inline-block" />
              <h2 className="flex justify-center mb-8 leading-relaxed text-xl text-white font-semibold lg:text-4xl md:text-3xl">
                Full Stack Developer
              </h2>
              <div className="flex justify-center">
                <button className="inline-flex border-2 border-gold rounded border-solid py-2 px-6 mb-2 focus:outline-none text-base lg:text-xl md:text-lg font-semibold text-mate bg-gold">
                  Contáctame
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
