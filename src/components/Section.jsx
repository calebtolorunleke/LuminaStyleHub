import React from "react";
import clothIMG1 from "../assets/clothIMG1.jpg";
import clothIMG2 from "../assets/clothIMG2.jpg";
import clothIMG3 from "../assets/clothIMG3.jpg";

const Section = () => {
  return (
    <>
      <div className="grid grid-rows-1 space-y-5 md:grid-cols-2 font-serif px-9 md:px-20 justify-center items-center ">
        <div>
          <h1 className="font-bold md:text-2xl ">
            <span className="md:text-6xl ">Welcome</span> <br />
            to Lumina SytleHub
          </h1>
          <h2 className="md:py-5 md:font-bold">
            "Where culture meets corture"
          </h2>
        </div>
        <div className="relative flex flex-col  items-end justify-end h-60 md:h-80">
          <img
            src={clothIMG1}
            alt=""
            className="w-40 h-40 rounded-full border-2 border-blue-400 absolute top-0 right-0 md:right-0"
          />
          <img
            src={clothIMG2}
            alt=""
            className="w-40 h-40 rounded-full border-2 border-blue-400 absolute top-16 right-10 md:right-20"
          />
          <img
            src={clothIMG3}
            alt=""
            className="w-40 h-40 rounded-full border-2 border-blue-400 absolute top-32 right-24 md:right-40"
          />
        </div>
      </div>
    </>
  );
};

export default Section;
