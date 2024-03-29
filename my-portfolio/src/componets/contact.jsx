import React from "react";
import { FaGithub, FaLinkedin, FaGoogleDrive } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';


const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-[rgb(31,40,51)] flex justify-center items-center p-4"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact Me</p>
            </div>
          <div className= "text-white text-center">
            <p>
            I love collaborating with people on new projects, I would love to dicuss your vision.
            Let's chat! 
            </p>
          </div>
            <a className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center" target="_blank" href="https://docs.google.com/document/d/17Ktq0yUSlJXg5lrDWvDxI1ypvRMHquXCd0Tqt65nJ0o/edit?usp=sharing/sarah-thompson-0b9234191/">Resume<FaGoogleDrive size={30} /></a>
            <a className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center" target="_blank" href="https://www.linkedin.com/in/sarah-thompson-0b9234191/">LinkedIn<FaLinkedin size={30} /></a>
            <a className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center" target="_blank" href="https://github.com/ScottieTee">Github<FaGithub size={30} /></a>
            <a className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center" target="_blank" href="mailto:sscotthompson@gmail.com">Email<HiOutlineMail size={30} /></a>
        </div>
        </div>
    );
  };

export default Contact;
