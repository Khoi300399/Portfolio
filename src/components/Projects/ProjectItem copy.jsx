import React from "react";

const ProjectItem = () => {
  return (
    <div className="w-[990px] h-[400px] flex items-center justify-center gap-5 mx-auto shadow-lg px-5 my-10 rounded-md">
      <div className="min-w-[530px] max-h-[300px] h-auto overflow-hidden rounded-2xl shadow-md">
        <a href="https://khoi300399.github.io/Samar/">
          <img
            src="./image/samar.png"
            alt="jira"
            className="object-cover w-full h-auto rounded-lg translate-y-[0%] transition-all ease-in-out duration-[10s] hover:-translate-y-[90%]"
          />
        </a>
      </div>
      <div>
        <h5 className="text-center text-lg font-semibold mb-5">MONKEY JIRA</h5>
        <p className="text-[#6b7280] text-center mb-5">
          A car rental website is an online platform that allows users to rent
          cars for personal or business use. The website provides an interface
          for searching, comparing, and reserving cars.
        </p>
        <div className="flex items-center justify-center gap-x-5 mb-10">
          <span className="px-3 py-2 rounded-sm shadow-md">React</span>
          <span className="px-3 py-2 rounded-sm shadow-md">SCSS</span>
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <a
            href="/"
            className="text-lg text-[#070120] hover:text-[#f55f8d] cursor-pointer transition-all"
          >
            Code <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="/"
            className="text-lg text-[#070120] hover:text-[#f55f8d] cursor-pointer transition-all"
          >
            Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
