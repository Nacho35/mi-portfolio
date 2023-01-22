import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-lato font-semibold bg-gold">
      <div className="max-w-full mr-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16 lg:w-full lg:grid grid-cols-2">
          <NavLink
            className="text-mate3 lg:flex justify-start hover:bg-mate3 hover:text-gold px-3 py-2 mr-8 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white lg:text-center"
            to="/home">
            INM
          </NavLink>
          <div className="flex items-center lg:grid grid-cols-1">
            <div className="hidden md:block">
              <div className="ml-4 flex justify-end flex-row space-x-4 lg:flex lg:items-center">
                <NavLink
                  to="/about"
                  className="text-mate3 hover:bg-mate3 hover:text-gold px-3 py-2 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white">
                  Acerca de
                </NavLink>
                <NavLink
                  to="/skills"
                  className="text-mate3 hover:bg-mate3 hover:text-gold px-3 py-2 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white">
                  Skills
                </NavLink>
                <NavLink
                  to="/gallery"
                  className="text-mate3 hover:bg-mate3 hover:text-gold px-3 py-2 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white">
                  Proyectos
                </NavLink>
                <NavLink
                  to="/form"
                  className="text-mate3 hover:bg-mate3 hover:text-gold px-3 py-2 rounded-md text-xl lg:hover:bg-transparent lg:hover:text-white">
                  Contacto
                </NavLink>
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
              <NavLink
                to="/about"
                className="text-mate3 hover:bg-mate3 hover:text-gold block px-2 py-4 rounded-md text-xl">
                Acerca de
              </NavLink>
              <NavLink
                to="/skills"
                className="text-mate3 hover:bg-mate3 hover:text-gold block  px-2 py-4 rounded-md text-xl">
                Skills
              </NavLink>
              <NavLink
                to="/gallery"
                className="text-mate3 hover:bg-mate3 hover:text-gold block px-2 py-4 rounded-md text-xl">
                Proyectos
              </NavLink>
              <NavLink
                to="/form"
                className="text-mate3 hover:bg-mate3 hover:text-gold block px-2 py-4 rounded-md text-xl">
                Contacto
              </NavLink>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
