import React from "react";
import AboutusIMG from "../assets/aboutUs.jpg";
import AboutusIMG2 from "../assets/aboutus2.jpg";
import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/Shop");
  };
  return (
    <div className="mt-15 md:mt-0  flex flex-col items-center gap-2 md:gap-7">
      <h1 className="font-bold text-2xl">About Us</h1>
      <div className="grid grid-row-1 md:grid-cols-2 gap-5 px-20 items-center">
        <div className="flex flex-col gap-3 items-start ">
          <h2 className="text-lg md:text-4xl px-5 pl-5">
            We are fast growing branc that connects fashion enthusiasts to local
            and uthentic desgners
          </h2>
          <button className="bg-gray-300 p-1 md:p-3 rounded md:rounded-xl">
            Meet the Designers
          </button>
        </div>
        <img src={AboutusIMG} alt="" />
      </div>
      <div className="flex flex-col items-center my-5 gap-2">
        <h1 className="font-bold text-2xl">Shop</h1>
        <img src={AboutusIMG2} alt="" className="px-20 pb-3" />
      </div>
      <div className="flex flex-row items-end justify-end text-end w-full p-3">
        <button
          className="p-2 border border-2 border-blue-400 rounded"
          onClick={goToShop}
        >
          Continue to Shop
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
