//same as hero

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Projects = () => {
    return (
        <div name="hero" className="bg-[#999999] w-full h-screen">
          <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-grey-600">Hey there, i'm</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#D5A6BD]">
                PROJECTS</h1>
            <p>
            STUFF ABOUT PROJECTS
            </p>
            <div>
                <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-pink-600 hover:border-pink-600">View Work <HiArrowNarrowRight/></button>
            </div>
          </div>
        </div>
      );
    };
    
    export default Projects;