import React from "react";

const logoList = [
  {
    name: "HTML 5",
    src: "./image/html.png",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS 3",
    src: "./image/css.png",
    link: "https://www.w3schools.com/css/default.asp",
  },
  {
    name: "JAVASCRIPT",
    src: "./image/javascript.png",
    link: "https://www.w3schools.com/js/default.asp",
  },
  {
    name: "REACT",
    src: "./image/react.png",
    link: "https://react.dev/",
  },
  {
    name: "ANGULAR",
    src: "./image/angular.png",
    link: "https://angular.io/",
  },
  {
    name: "PUG",
    src: "./image/pug.png",
    link: "https://pugjs.org/api/getting-started.html",
  },
  {
    name: "TAILWIND",
    src: "./image/tailwind.png",
    link: "https://tailwindcss.com/",
  },
  {
    name: "SASS/SCSS",
    src: "./image/sass.png",
    link: "https://sass-lang.com/",
  },
  {
    name: "REDUX",
    src: "./image/redux.png",
    link: "https://redux.js.org/",
  },
  {
    name: "NGRX",
    src: "./image/ngrx.png",
    link: "https://ngrx.io/",
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
    <div className="bg-[url('../../assets/image/bg1.png')] md:bg-contain bg-cover bg-no-repeat sm:py-16 py-8 sm:pt-40 pt-20">
      <div className="flex lg:flex-row flex-col-reverse items-center justify-center lg:gap-x-10 gap-y-10 mb-10">
        <div className="md:w-[500px]">
          <h1 className="text-[#6b7280] sm:text-6xl text-4xl lg:text-left text-center font-bold mb-5 font-serif select-none">
            Front-End Developer
          </h1>
          <p className="font-mono text-xl mb-8  lg:text-left text-center select-none ">
            Hi, I'm{" "}
            <span className="text-[#f55f8d] font-semibold ">Ma Thanh Khoi</span>
            . A passionate Front-end Developer based in Ho Chi Minh city,Viet
            Nam.
          </p>

          <div className="flex items-center gap-x-10 lg:justify-start justify-center">
            <span className="font-sans font-medium text-4xl hover:text-[#f55f8d] transition-all ease-linear">
              <a href="https://github.com/Khoi300399">
                <i className="fa-brands fa-github"></i>
              </a>
            </span>
            <div>
              <button
                className="btn-download transition-all ease-linear px-5 py-3 rounded-3xl text-white font-semibold font-mono shadow-lg"
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
        <p className="border-r-2 border-r-[#6b7280] sm:pr-10 sm:mr-10 text-lg font-sans font-semibold sm:block hidden">
          Tech Stack
        </p>
        <ul className="flex items-center justify-center flex-wrap sm:gap-x-8 gap-4">
          {logoList.map(({ name, src, link }) => {
            return (
              <li
                key={name}
                title={name}
                className="md:w-16 md:h-16 w-14 h-14 bg-white flex items-center justify-center rounded-full cursor-pointer shadow-lg"
              >
                <a href={link} target="_blank">
                  {" "}
                  <img
                    src={src}
                    alt={name}
                    className="md:w-10 md:h-10 w-5 h-5"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Intro;
