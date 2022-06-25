import React from "react";
import FAP from '../assets/petfinder.png';

const Projects = () => {
    return (
      <div
        name="projects"
        className="w-full md:h-screen text-gray-300 bg-[#999999]"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
          <p className="text-4xl font-bold inline justify-center border-b-4 border-pink-600">My Work</p>
            <p className="py-6 text-2xl">Take a look at some of my work</p>
          </div>
          {/* Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Grid */}
            <div
              style={{ backgroundImage: `url(${FAP})` }}
              className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
            >
              {/* Hover */}
              <div className="opacity-0 group-hover:opacity-100 text-center">
                <span className="text-2xl font-bold text-[rgb(31,40,51)] tracking-wide">
                  Interactive Front-End Application
                </span>
                <p>
                  Search for adoptable pets in your area{" "}
                </p>
                <div className="pt-8 text-center">
                  <a
                    href="https://scottietee.github.io/Find-A-Pet/index.html"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Check it out
                    </button>
                  </a>
                  <a
                    href="https://github.com/ScottieTee/Find-A-Pet"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;