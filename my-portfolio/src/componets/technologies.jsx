import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/csslogo.png";
import Mongo from "../assets/mongodb.png";
import Nodee from "../assets/node.png";
import Gql from "../assets/graphql.png";
import Github from "../assets/github.png";
import Reactt from "../assets/react.png";
import Jquery from "../assets/graphql.png";
import Heroku from "../assets/heroku.png";
import Insomnia from "../assets/insomnia.png";
import Javascript from "../assets/javascipt.png";
import Mysql from "../assets/mysql.png";




const Tech = () => {
    return (
        <div
            name="tech"
            className="w-full h-screen bg-[rgb(31,40,51)] flex justify-center items-center p-4"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Tech Knowledge</p>
            </div>
          <div className= "text-white text-center">
            <p>
            Below are some of the technologies I have worked with. As the development world is an ever changing environment, I continue to seek out learning opportunities through new languages and tools. My stack isn't limited to just what is listed here, if your project scope requires more I would love to dicuss your needs.
            </p>
          </div>
          <div className="max-w-[1000px] w-full flex flex-row sm:grid-cols-2 gap-8 px-4">
          <div className=" grid grid-cols-4 gap-4">
          <img src={Html} alt="logo" style={{ width: "50px" }} />
          <img src={Css} alt="logo" style={{ width: "50px" }} />
          <img src={Javascript} alt="logo" style={{ width: "50px" }} />
          <img src={Mongo} alt="logo" style={{ width: "50px" }} />
          <img src={Nodee} alt="logo" style={{ width: "50px" }} />
          <img src={Mysql} alt="logo" style={{ width: "50px" }} />
          <img src={Gql} alt="logo" style={{ width: "50px" }} />
          <img src={Reactt} alt="logo" style={{ width: "50px" }} />
          <img src={Jquery} alt="logo" style={{ width: "50px" }} />
          <img src={Github} alt="logo" style={{ width: "50px" }} />
          <img src={Heroku} alt="logo" style={{ width: "50px" }} />
          <img src={Insomnia} alt="logo" style={{ width: "50px" }} />
          </div>
          </div>
           
        </div>
        </div>
    );
  };

export default Tech;

//html
//css mongodb mongoose node express tailwindreactapollo 
