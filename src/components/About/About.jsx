import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex justify-center gap-x-10 mb-10 bg-[url('../../assets/image/bg2.png')] md:bg-contain bg-cover bg-no-repeat py-20"
    >
      <div className="w-96 lg:block hidden">
        <img
          src="./image/about.png"
          alt="about"
          className="animate-move object-cover w-full h-full"
        />
      </div>
      <div className="sm:w-[500px] w-[400px]">
        <h3 className="text-[#f55f8d] lg:text-left text-center text-3xl font-bold mb-3">
          ABOUT ME
        </h3>
        <h4 className="text-[#070120] text-xl lg:text-left text-center mb-3 font-semibold">
          A dedicated Front-end Developer based in Ho Chi Minh city,Viet Nam.📍
        </h4>
        <p className="text-[#6b7280] text-lg text-left sm:px-0 px-5">
          As a Fresher Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Angular, Tailwind, and SCSS. I
          excel in designing and maintaining responsive websites that offer a
          smooth user experience. My expertise lies in crafting dynamic,
          engaging interfaces through writing clean and optimized code and
          utilizing cutting-edge development tools and techniques.
        </p>
      </div>
    </div>
  );
};

export default About;
