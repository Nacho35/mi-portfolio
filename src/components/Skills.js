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

const Skills = () => {
  return (
    <div className="bg-mate font-lato w-full">
      <h2 className=" text-white flex justify-center py-6 font-semibold text-3xl">
        Mis Skills
      </h2>
      <div className="w-full">
        <div className="flex justify-center py-6 md:space-x-16 lg:space-x-44">
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={html}
              width="100px"
              alt="icon"
            />
            <p className=" absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-7 md:mx-14 lg:mx-14">
              HTML
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={css}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-10 md:mx-16 lg:mx-16">
              CSS
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={javascript}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-4 md:mx-10 lg:mx-10">
              JavaScript
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={react}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-8 md:mx-16 lg:mx-16">
              React
            </p>
          </div>
        </div>
        <div className="flex justify-center relative py-6 md:space-x-16 lg:space-x-44">
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={nodejs}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-6 md:mx-14 lg:mx-14">
              Node.js
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={mongo}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-3 md:mx-12 lg:mx-12">
              MongoDB
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={git}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-10 md:mx-16 lg:mx-16">
              Git
            </p>
          </div>
          <div className="relative flex justify-center bg-transparent px-8 rounded-lg md:hover:bg-obscure lg:hover:bg-obscure">
            <img
              className="ml-auto mr-auto my-7"
              src={github}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-6 md:mx-14 lg:mx-14">
              GitHub
            </p>
          </div>
        </div>
      </div>
      <button class="flex mx-auto mt-12 border-none text-white bg-transparent border-2 border-gold  py-2 px-6 focus:outline-none text-4xl font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
        <img className="w-10 h-10" src={arrow} alt="icon" />
      </button>
    </div>
  );
};

export default Skills;
