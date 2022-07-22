import React from "react";
import Monty from "../assets/monty.png";

const About = () => {
    return (
        <div
      name="about"
      className="w-full h-screen bg-[rgb(31,40,51)] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
          <img src={Monty} alt="logo" style={{ width: "400px" }} />
          </div>
          <div>
          <div>
                        <h1 className="text-3xl sm:text-6xl font-bold text-[#f7c5dd]" >
                            Hey there,</h1>
                        <h2 className="text-2xl sm:text-5xl font-bold text-[#D5A6BD]">
                            Nice to meet you!
                        </h2>
            <p>
            I am a 27 year old North Carolina native. I made the move to Charlotte 4 years ago where I gained professional experience at a merchant services start up. During my time there I discovered my passion for coding and knew it was the career I wanted to pursue. To create software that improves processes and allows people to focus on the job at hand is exciting. Solving day-to-day issues with innovative software is fascinating and at the core of what I want to achieve with anyone I work with. I take pride in being a well-rounded team player with over 8 years of direct sales experience and 5 years of management experience. I have enjoyed leveraging these skills during my time at UNCC and aim to continue helping businesses!
        In my personal life I enjoy being active with my loyal companion, Oliver, who is lovingly known as “white dog”. I am also an avid equestrian and compete on the 'AA' hunter/jumper circuit with my young horse, Monty. 
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
