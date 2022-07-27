import React from "react";
import Findpet from '../assets/adoptapet.png';
import Workday from '../assets/workday.png';
import Notes from '../assets/notetaker.png';

const Projects = () => {
    return (
      <div
        name="projects"
        className="w-full md:h-screen text-gray-300 bg-[#999999]"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center text-center w-full h-full">
          <div className="pb-8">
          <p className="text-4xl font-bold inline text-center border-b-4 border-pink-600">My Work</p>
            <p className="py-6 text-2xl">Scroll your mouse over a block to take a look at some of my work.</p>
          </div>
          {/* Container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Grid */}
            <div
              style={{ backgroundImage: `url(${Findpet})` }}
              className="object-contain shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
            >
              {/* Hover */}
              <div className="opacity-0 group-hover:opacity-100 text-center text-[rgb(31,40,51)]">
                <span className="text-2xl font-bold text-[rgb(31,40,51)] tracking-wide">
                  Find A Pet
                </span>
                <p>
                  Interactive Front-End application{" "}
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
            <div
              style={{ backgroundImage: `url(${Notes})` }}
              className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
            >
              {/* Hover */}
              <div className="opacity-0 group-hover:opacity-100 text-center text-[rgb(31,40,51)]">
                <span className="text-2xl font-bold text-[rgb(31,40,51)] tracking-wide">
                  Note Taker
                </span>
                <p>
                  Simple Express.JS application{" "}
                </p>
                <div className="pt-8 text-center">
                  <a
                    href="https://mighty-gorge-13486.herokuapp.com/notes"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Check it out
                    </button>
                  </a>
                  <a
                    href="https://github.com/ScottieTee/Note-Taker"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${Workday})` }}
              className="shadow-lg shadow-[rgb(15,15,15)] group container rounded-md flex justify-center items-center mx-auto project-div"
            >
              {/* Hover */}
              <div className="opacity-0 group-hover:opacity-100 text-center text-[rgb(31,40,51)]">
                <span className="text-2xl font-bold text-[rgb(31,40,51)] tracking-wide">
                  Work Day Scheduler
                </span>
                <p>
                  Third Party API application{" "}
                </p>
                <div className="pt-8 text-center">
                  <a
                    href="https://scottietee.github.io/Work-Day-Scheduler/"
                    target="_blank"
                  >
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Check it out
                    </button>
                  </a>
                  <a
                    href="https://github.com/ScottieTee/Work-Day-Scheduler"
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