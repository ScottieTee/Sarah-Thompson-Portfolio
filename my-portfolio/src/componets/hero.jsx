import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Me from "../assets/me.png";
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div name="hero" className="bg-[#999999] w-full h-screen">

            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-around h-full">
                <div id="content">
                    <div>
                        <h1 className="text-4xl sm:text-7xl font-bold text-[#f7c5dd]" >
                            Sarah Thompson</h1>
                        <h2 className="text-3xl sm:text-6xl font-bold text-[#D5A6BD]">
                            Full-stack developer
                        </h2>
                        <p className="text-gray-300 py-4 max-w-[700px]"></p>
                        <p className="text-gray-300 py-4 max-w-[700px]">
                            I’ve always been someone who has both a creative and a logical side. When I discovered full-stack development, I realized it would be the perfect fit. I don’t think people should settle for generic applications or forego their overall vision due to dated programming restraints. I could use my creative side to design and my logical side to code. As a bonus, being both a designer and developer allows me to make sure no detail is lost in translation. Take a look at some of my work             </p>
                        <div className= "flex flex-row py-4 justify-around">
                            <div>
                            <Link to="/work" smooth={true} duration={700}>
                                <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#C90076] hover:border-[#3faec1] duration-300">
                                    View Work
                                    <span className="group-hover duration-300">
                                        <HiArrowNarrowRight className="ml-3" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/contact" smooth={true} duration={700}>
                                <button className="text-white group border-2 px-6 py-2 flex items-center hover:bg-[#C90076] hover:border-[#3faec1] duration-300">
                                    Let's collaborate!
                                    <span className="group-hover duration-300">
                                        <HiArrowNarrowRight className="ml-3" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div><img class="float-right pl-6" src={Me} alt="logo" style={{ width: "300px" }} /></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

