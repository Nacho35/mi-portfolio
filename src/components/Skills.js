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

const Skills = () => {
  return (
    <section className="bg-mate3 font-lato w-full min-h-screen md:min-h-screen lg:min-h-screen">
      <h2 className=" text-white flex justify-center py-2 font-semibold text-3xl">
        Mis Skills
      </h2>
      <div className="w-full">
        <div className="flex justify-center py-6 md:space-x-16 lg:space-x-44">
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={html}
              width="150px"
              alt="icon"
            />
            <p className=" absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              HTML
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={css}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              CSS
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={javascript}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              JavaScript
            </p>
          </div>
        </div>
        <div className="flex justify-center relative py-6 md:space-x-16 lg:space-x-44">
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={react}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              React
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={mongo}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              MongoDB
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={ex}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              Express
            </p>
          </div>
        </div>
        <div className="flex justify-center relative py-6 md:space-x-16 lg:space-x-44">
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={nodejs}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              Node.js
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={git}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              Git
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={github}
              width="150px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold text-center">
              GitHub
            </p>
          </div>
        </div>
      </div>
      <Link
        to="/gallery"
        className="flex justify-center mx-auto mt-12 border-none text-white bg-transparent border-2 border-gold px-6 focus:outline-none text-4xl font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
        <img className="w-10 h-10" src={arrow} alt="icon" />
      </Link>
    </section>
  );
};

export default Skills;
