import React from "react";
import monty from "../assets/monty.png";

const About = () => {
    return (
        <div
      name="about"
      className="w-full h-screen bg-[#999999] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
        <img src="monty.png" height="400" />
          </div>
          <div>
            <p>
            I am a 26 year old North Carolina native. I moved to Charlotte 4 years ago to gain experince 
            as the sales director for a merchant services start up. I take pride in being a data-driven and solution oriented sales professional 
            with over 8 years of direct sales experience and five years of management experience. Advanced experience building and strengthening 
            a team of sales professionals to provide unique campaigns that reach target audiences and engages users. Strong and adaptable manager 
            looking to bring my leadership skills to a new team of driven employees.
        In my personal time I enjoy hiking with my dog, Oliver. I am also an avid equestrian and show on the 'AA' hunter/jumper circuit with my two horses,
         Titus and Monty. I am currently enrolled in a full stack course through UNCC where I plan to make a career change in 2022.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
