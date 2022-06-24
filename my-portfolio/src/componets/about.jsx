//this is the same as hero

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
    return (
        <div name="hero" className="bg-[#999999] w-full h-screen">
         
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-grey-600">Hey there, i'm</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#D5A6BD]">
                Sarah Thompson</h1>
            <p>
            I am a 26 year old North Carolina native. I moved to Charlotte 4 years ago to gain experince as the sales director for a merchant services start up. I take pride in being a data-driven and solution oriented sales professional with over 8 years of direct sales experience and five years of management experience. Advanced experience building and strengthening a team of sales professionals to provide unique campaigns that reach target audiences and engages users. Strong and adaptable manager looking to bring my leadership skills to a new team of driven employees.
        In my personal time I enjoy hiking with my dog, Oliver. I am also an avid equestrian and show on the 'AA' hunter/jumper circuit with my two horses, Titus and Monty. I am currently enrolled in a full stack course through UNCC where I plan to make a career change in 2022.
            </p>
            <div>
                <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-pink-600 hover:border-pink-600">View Work <HiArrowNarrowRight/></button>
            </div>
          </div>
        </div>
      );
    };
    
    export default About;