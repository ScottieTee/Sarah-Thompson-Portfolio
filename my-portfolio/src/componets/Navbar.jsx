import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[rgb(16,20,26)] text-gray-300">
            <div>
                <img src={logo} alt="logo" style={{ width: "75px" }} />
            </div>


            <ul className="hidden md:flex">
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="hero" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div onClick={handleClick} className="md:hidden">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>



            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[rgb(16,20,26)]"
                }>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>


            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[rgb(10,102,194)]">
                        <a className="flex justify-between items-center w-full text-gray-300" target="_blank" href="https://www.linkedin.com/in/sarah-thompson-0b9234191/">LinkedIn<FaLinkedin size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300" target="_blank" href="https://github.com/ScottieTee">Github<FaGithub size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a className="flex justify-between items-center w-full text-gray-300" target="_blank" href="mailto:sscotthompson@gmail.com">Email<HiOutlineMail size={30} /></a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className="flex justify-between items-center w-full text-gray-300" href="#">Resume<BsFillPersonLinesFill size={30} /></a>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;
