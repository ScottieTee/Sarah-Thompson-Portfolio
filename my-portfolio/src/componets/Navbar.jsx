import React from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[rgb(16,20,26)] text-gray-300">
      <div>
        <img src={logo} alt="logo" style={{ width: "75px" }} />
      </div>

      {/* menue */}

        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>


      {/* */}
      <div className="md:hidden">
        <FaBars />
      </div>

      {/* Mobile Men */}
      <ul className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[rgb(16,20,26)]">
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden"></div>

    </div>
  );
};

export default Navbar;
