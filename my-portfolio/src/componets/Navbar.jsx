import React, { useState } from "react";
import oliverlogo from "../assets/oliverlogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[rgb(31,40,51)] text-pink-300">
            <div>
                <img src={oliverlogo} alt="logo" style={{ width: "75px" }} />
            </div>


            <ul className="hidden md:flex">
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className="hover:text-[#3faec1] hover:scale-105">
                    <Link to="tech" smooth={true} duration={500}>
                        Technology
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
        </div>
    );
};

export default Navbar;
