import React from "react";
import bg from "../assets/bg.mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="font-lato relative w-full min-h-full">
      <video src={bg} autoPlay loop muted></video>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center absolute justify-center bottom-0 top-0 left-0 right-0 lg:absolute lg:bottom-0 lg:top-0 lg:left-0 lg:right-0">
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1, duration: 3 }}
          className="lg:flex-grow lg:items-center md:w-full flex flex-col md:items-center md:text-center items-center text-center">
          <div className="text-base font-semibold text-white lg:text-3xl text-center md:text-2xl">
            Hola Soy!{" "}
            <h1 className="flex flex-col text-3xl text-gold font-semibold my-2  lg:text-7xl lg:text-center md:text-6xl">
              Ignacio Morales
            </h1>
            <br className="hidden lg:inline-block" />
            <h2 className="flex justify-center mb-8 leading-relaxed text-xl text-white font-semibold lg:text-4xl md:text-3xl">
              Full Stack Developer
            </h2>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex justify-center">
              <Link
                to="/form"
                className="inline-flex border-2 border-gold rounded border-solid py-2 px-6 mb-2 focus:outline-none text-base lg:text-xl md:text-lg font-semibold text-mate bg-gold">
                Contactame!
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
