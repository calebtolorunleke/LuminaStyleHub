import React, { useState } from "react";
import Logo from "../assets/cloth.jpg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [displayMenu, setMenudisplay] = useState(false);

  const goHome = () => {
    navigate("/");
  };

  const goAboutUs = () => {
    navigate("/About");
  };

  const goToShop = () => {
    navigate("/Shop");
  };

  return (
    <>
      <div className="px-4 py-2 md:px-20 md:py-5 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-1">
          <img
            src={Logo}
            alt=""
            className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          />
          <h1>
            <span className="font-bold text-sm md:text-lg">Lumina</span>
            StyleHub
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-9 text-gray-700 text-base md:text-lg font-medium">
            <li
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              onClick={goHome}
            >
              Homepage
            </li>
            <li
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              onClick={goAboutUs}
            >
              About Us
            </li>
            <li
              className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              onClick={goToShop}
            >
              Shop
            </li>
            <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden border rounded px-2 py-1 text-xl"
          onClick={() => setMenudisplay(!displayMenu)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {displayMenu && (
        <ul className="absolute right-4 top-16 w-40 flex flex-col gap-1 bg-blue-300 text-gray-800 rounded-lg shadow-lg z-50 p-2">
          <li
            className="hover:bg-green-400 px-3 py-2 rounded cursor-pointer transition-colors duration-200"
            onClick={goHome}
          >
            Homepage
          </li>
          <li
            className="hover:bg-green-400 px-3 py-2 rounded cursor-pointer transition-colors duration-200"
            onClick={goAboutUs}
          >
            About Us
          </li>
          <li
            className="hover:bg-green-400 px-3 py-2 rounded cursor-pointer transition-colors duration-200"
            onClick={goToShop}
          >
            Shop
          </li>
          <li className="hover:bg-green-400 px-3 py-2 rounded cursor-pointer transition-colors duration-200">
            Contact Us
          </li>
        </ul>
      )}

      <hr className="mx-10 my-3 md:mx-40 md:my-5 text-gray-200" />
    </>
  );
};

export default Header;
