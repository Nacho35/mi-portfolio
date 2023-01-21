import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import javascript from "../assets/javascript.svg";
import mongo from "../assets/mongo.svg";
import nodejs from "../assets/node-js.svg";
import react from "../assets/reacts.svg";
import arrow from "../assets/down.svg";
import ex from "../assets/express.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="bg-mate3 font-lato w-full min-h-screen md:min-h-screen lg:min-h-screen">
      <div className="flex justify-center md:py-10">
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 1000 }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 10,
          }}
          className="flex">
          <h2 className=" text-white flex justify-center py-2 font-semibold text-3xl">
            Habilidades
          </h2>
        </motion.div>
      </div>
      <div className="w-full">
        <div className="flex justify-center py-6 md:space-x-16 lg:space-x-44">
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 1,
              delay: 1,
            }}
            className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={html}
              width="150px"
              alt="icon"
            />
            <p className=" absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              HTML
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 1.5,
              delay: 1.5,
            }}
            className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={css}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              CSS
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 1.7,
              delay: 1.7,
            }}
            className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={javascript}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              JavaScript
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center relative py-6 md:space-x-16 lg:space-x-44">
          <motion.div
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 1.2,
              delay: 1.2,
            }}
            className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={react}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              React
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 1.7,
              delay: 1.7,
            }}
            className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={mongo}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              MongoDB
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -700 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 2,
              delay: 2,
            }}
            className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={ex}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              Express
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center relative py-6 md:space-x-16 lg:space-x-44">
          <motion.div
            initial={{ y: -900 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 2.2,
              delay: 2.2,
            }}
            className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={nodejs}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              Node.js
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -900 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 2.5,
              delay: 2.5,
            }}
            className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={git}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              Git
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -900 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 3,
              delay: 3,
            }}
            className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={github}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              GitHub
            </p>
          </motion.div>
        </div>
        <Link
          to="/gallery"
          className="flex justify-center mx-auto mt-12 border-none text-white bg-transparent border-2 border-gold px-6 focus:outline-none text-4xl font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
          <img className="w-12 h-12" src={arrow} alt="icon" />
        </Link>
      </div>
    </section>
  );
};

export default Skills;
