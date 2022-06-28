import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-[rgb(31,40,51)] flex justify-center items-center p-4"
        >
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                <p className="text-gray-300 p-4">I would love to connect with you!</p>
            </div>
            <a className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center" target="_blank" href="https://www.linkedin.com/in/sarah-thompson-0b9234191/">LinkedIn<FaLinkedin size={30} /></a>
            <a className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center" target="_blank" href="https://www.linkedin.com/in/sarah-thompson-0b9234191/">LinkedIn<FaLinkedin size={30} /></a>
            <a className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center" target="_blank" href="https://www.linkedin.com/in/sarah-thompson-0b9234191/">LinkedIn<FaLinkedin size={30} /></a>
            <a className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center" target="_blank" href="https://www.linkedin.com/in/sarah-thompson-0b9234191/">LinkedIn<FaLinkedin size={30} /></a>
        </div>
    );
  };

export default Contact;
