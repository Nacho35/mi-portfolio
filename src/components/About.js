import React from "react";
import { Link } from "react-router-dom";
import me from "../assets/yo.jpg";

const About = () => {
  return (
    <section className="bg-mate3 font-lato">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-justify mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-4xl text-3xl mb-4 font-semibold text-white">
            Acerca de
          </h1>
          <p className="mb-8 leading-relaxed text-gold font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, atque
            veritatis facere neque aliquam provident? Sapiente, quisquam?
            Explicabo mollitia accusamus qui excepturi doloremque harum, dicta
            beatae nobis? Asperiores fugiat sunt facere dolore nulla laborum
            consequatur. Beatae aspernatur sapiente commodi? Dolorum aspernatur
            accusantium dicta dignissimos nisi! Rem alias eius placeat
            molestiae? Quasi dignissimos fugit quo, eligendi architecto ex
            expedita, unde consectetur nemo magni temporibus perferendis
            veritatis, reiciendis nobis ab porro perspiciatis.
          </p>
          <div className="flex justify-center">
            <Link
              to="/feature"
              className="flex mx-auto text-gold bg-transparent border-2 border-gold rounded border-solid py-2 px-6 focus:outline-none text-lg font-semibold hover:text-mate hover:bg-gold">
              Continuar
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src={me}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
