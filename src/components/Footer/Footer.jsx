import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#2d2e32] py-5 flex items-center justify-around text-white">
      <span className="font-sans font-medium sm:text-lg text-xs">
        Copyright © 2023. All rights are reserved
      </span>
      <span className="font-sans font-medium text-2xl hover:text-blue-500 transition-all ease-linear">
        <a href="https://github.com/Khoi300399">
          <i className="fa-brands fa-github"></i>
        </a>
      </span>
    </div>
  );
};

export default Footer;
