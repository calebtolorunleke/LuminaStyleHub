import React, { useState } from "react";
import Logo from "../assets/cloth.jpg";

const Header = () => {
  //   const displayMenu = () => {
  //     console.log("menu clicked");
  //   };

  const [displayMenu, setMenudisplay] = useState(false);
  return (
    <>
      <div className="px-4 py-2 md:px-20 md:py-5  flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-1">
          <img
            src={Logo}
            alt=""
            className="w-5 h-5 md:w-10 md:h-10 rounded-full"
          />
          <h1>
            <span className="font-bold text-sm md:text-lg">Lumina</span>StyleHub{" "}
          </h1>
        </div>
        <nav className="hidden md:flex flex-row">
          <ul className="flex flex-row gap-9">
            <li>Homepage</li>
            <li>About Us</li>
            <li>Shop</li>
            <li>Contact Us</li>
          </ul>
        </nav>

        <button
          className="md:hidden border rounded px-0.5"
          onClick={() => setMenudisplay(!displayMenu)}
        >
          ☰
        </button>
      </div>
      {displayMenu && (
        <ul className="absolute flex flex-col gap-1 bg-green-300 right-4 rounded">
          <li>Homepage</li>
          <li>About Us</li>
          <li>Shop</li>
          <li>Contact Us</li>
        </ul>
      )}
      <hr className="mx-10 my-3 md:mx-40 md:my-5 text-gray-200" />
    </>
  );
};

export default Header;
