import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-4 bg-gray-200 py-6 text-gray-800">
      <div className="grid grid-cols-2 gap-8 text-center md:text-left">
        <ul className="space-y-2">
          <li>Home</li>
          <li>About Us</li>
          <li>Shop</li>
          <li>Contact Us</li>
        </ul>
        <ul className="space-y-2">
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Live Events</li>
          <li>Style Tips</li>
        </ul>
      </div>
      <span className="text-sm mt-4">&copy; 2025 All rights reserved</span>
    </div>
  );
};

export default Footer;
