import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/down.svg";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <section className="text-gold font-lato font-semibold bg-mate3 w-full min-h-screen lg:min-h-max md:min-h-max">
      <div className="container px-5 py-4 mx-auto w-full min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 600 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 10,
          }}
          className="flex flex-col text-center w-full mb-16">
          <h2 className="text-3xl mb-4 text-white">Proyectos</h2>
        </motion.div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <motion.div
              initial={{ y: -600 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 10,
                delay: 1,
              }}
              className="flex relative">
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
            </motion.div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <motion.div
              initial={{ y: -600 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 10,
                delay: 1.5,
              }}
              className="flex relative">
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
            </motion.div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <motion.div
              initial={{ y: -600 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 10,
                delay: 2,
              }}
              className="flex relative">
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
            </motion.div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <motion.div
              initial={{ y: -600 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 10,
                delay: 1,
              }}
              className="flex relative">
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
            </motion.div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <motion.div
              initial={{ y: -600 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 10,
                delay: 1.5,
              }}
              className="flex relative">
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
            </motion.div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <motion.div
              initial={{ y: -600 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 10,
                delay: 2,
              }}
              className="flex relative">
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
            </motion.div>
          </div>
          <motion.a
            initial={{ y: -600 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 12,
            }}
            whileHover={{
              scale: 1.1,
            }}
            href="https://drive.google.com/file/d/13kIAPHqpxjyujXM8VdOwtFvzxqoT87MU/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex mx-auto mt-20 text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-6 focus:outline-none text-lg font-semibold hover:text-mate hover:bg-gold">
            Descargar CV
          </motion.a>
        </div>
      </div>
      <Link
        to="/form"
        className="flex justify-center mx-auto mt-12 border-none text-white bg-transparent border-2 border-gold px-6 focus:outline-none text-4xl font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
        <img className="w-12 h-12" src={arrow} alt="icon" />
      </Link>
    </section>
  );
};

export default Gallery;
