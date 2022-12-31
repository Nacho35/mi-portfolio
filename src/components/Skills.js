import React from "react";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import javascript from "../assets/javascript.svg";
import mongo from "../assets/mongo.svg";
import nodejs from "../assets/node-js.svg";
import react from "../assets/reacts.svg";

const Skills = () => {
  return (
    <div className=" bg-mate font-lato">
      <h2 className=" text-white flex justify-center py-6 font-semibold text-3xl">
        Mis Skills
      </h2>
      <div className="w-full">
        <div className="flex justify-center py-6 md:space-x-16 lg:space-x-44">
          <div className="relative flex justify-center">
            <img
              className="ml-auto mr-auto my-7"
              src={html}
              width="100px"
              alt="icon"
            />
            <p className=" absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-6">
              HTML
            </p>
          </div>
          <div className="relative flex justify-center">
            <img
              className="ml-auto mr-auto my-7"
              src={css}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-8">
              CSS
            </p>
          </div>
          <div className="relative flex justify-center">
            <img
              className="ml-auto mr-auto my-7"
              src={javascript}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-3">
              JavaScript
            </p>
          </div>
          <div className="relative flex justify-center">
            <img
              className="ml-auto mr-auto my-7"
              src={react}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-8">
              React
            </p>
          </div>
        </div>
        <div className="flex justify-center relative py-6 md:space-x-16 lg:space-x-44">
          <div className="flex justify-center relative">
            <img
              className="ml-auto mr-auto my-7"
              src={nodejs}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-5">
              Node.js
            </p>
          </div>
          <div className="flex justify-center relative">
            <img
              className="ml-auto mr-auto my-7"
              src={mongo}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-3">
              MongoDB
            </p>
          </div>
          <div className="flex justify-center relative">
            <img
              className="ml-auto mr-auto my-7"
              src={git}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-10">
              Git
            </p>
          </div>
          <div className="flex justify-center relative">
            <img
              className="ml-auto mr-auto my-7"
              src={github}
              width="100px"
              alt="icon"
            />
            <p className="absolute left-0 right-0 bottom-0 text-white font-merriweather font-semibold mx-6">
              GitHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
