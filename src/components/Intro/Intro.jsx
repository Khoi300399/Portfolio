import React from "react";

const logoList = [
  {
    name: "HTML 5",
    src: "./image/html.png",
  },
  {
    name: "CSS 3",
    src: "./image/css.png",
  },
  {
    name: "JAVASCRIPT",
    src: "./image/javascript.png",
  },
  {
    name: "REACT",
    src: "./image/react.png",
  },
  {
    name: "TAILWIND",
    src: "./image/tailwind.png",
  },
  {
    name: "SASS/SCSS",
    src: "./image/sass.png",
  },
];

const Intro = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "./file/CV_MATHANHKHOI_FRONTENDDEVELOPER.pdf";
    link.setAttribute("download", "CV_MATHANHKHOI_FRONTENDDEVELOPER.pdf");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="bg-[url('../../assets/image/bg1.png')] md:bg-cover bg-no-repeat sm:py-16 py-8 sm:pt-40 pt-20">
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-x-10 gap-y-10 mb-10">
        <div className="md:w-[500px]">
          <h1 className="text-[#6b7280] sm:text-6xl text-4xl lg:text-left text-center font-bold mb-5 font-serif select-none">
            Front-End Developer
          </h1>
          <p className="font-mono text-xl mb-8  lg:text-left text-center select-none ">
            Hi, I'm{" "}
            <span className="text-[#f55f8d] font-semibold ">Ma Thanh Khoi</span>
            . A passionate Front-end React Developer based in Ho Chi Minh
            city,Viet Nam.📍
          </p>

          <div className="flex items-center gap-x-10 lg:justify-start justify-center">
            <span className="font-sans font-medium text-4xl hover:text-[#f55f8d] transition-all ease-linear">
              <a href="https://github.com/Khoi300399">
                <i className="fa-brands fa-github"></i>
              </a>
            </span>
            <div>
              <button
                className="btn-download transition-all ease-linear px-5 py-3 rounded-3xl text-white font-semibold font-mono"
                onClick={downloadCV}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-[350px] sm:h-[350px] w-[250px] h-[250px] rounded-full ">
          <img
            src="./image/avatar.jpg"
            alt=""
            className="object-cover w-full h-full rounded-full animate-morph"
          />
        </div>
      </div>

      <div className="flex items-center justify-center mb-10">
        <p className="border-r-2 border-r-[#6b7280] pr-10 text-lg font-sans font-semibold sm:block hidden">
          Tech Stack
        </p>
        <ul className="flex items-center sm:gap-x-8 gap-4">
          {logoList.map(({ name, src }) => {
            return (
              <li
                key={name}
                title={name}
                className="md:w-16 md:h-16 w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg"
              >
                <img src={src} alt={name} className="md:w-10 md:h-10 w-5 h-5" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Intro;
