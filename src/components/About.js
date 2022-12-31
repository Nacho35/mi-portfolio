import React from "react";
import arrow from "../assets/down.svg";

const About = () => {
  return (
    <div className="font-lato bg-mate">
      <h2 className="flex justify-start font-semibold text-4xl p-3 pl-10 text-white">
        About Me
      </h2>
      <p className="flex text-start font-semibold text-gold ml-2 text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis labore rem
        quibusdam deserunt possimus est hic, fuga eveniet quidem cumque, impedit
        maiores qui unde, incidunt distinctio neque minima repellendus
        veritatis. Quibusdam minima aliquam natus blanditiis ratione, alias
        rerum praesentium necessitatibus facere, tempore rem voluptates ad
        voluptatem aperiam non voluptatibus aspernatur omnis cum. Accusamus
        magnam perspiciatis ex, autem debitis facilis dicta soluta rem, harum
        nemo odio aliquid molestiae asperiores architecto unde in dignissimos,
        fugiat incidunt sed sint quisquam possimus veniam mollitia atque! Eaque
        doloremque qui est similique soluta? Deleniti necessitatibus repellat
        enim natus sit, sunt iusto atque. Rerum enim porro tempora.
      </p>
      <button class="flex mx-auto mt-12 border-none text-white bg-transparent border-2 border-gold  py-2 px-6 focus:outline-none text-4xl font-semibold transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
        <img className="w-10 h-10" src={arrow} alt="icon" />
      </button>
    </div>
  );
};

export default About;
