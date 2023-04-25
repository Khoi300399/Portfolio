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
    <div className="bg-[url('../../assets/image/bg1.png')] bg-contain bg-no-repeat py-16 pt-40">
      <div className="flex items-center justify-center gap-x-10 mb-10">
        <div className="w-[500px]">
          <h1 className="text-[#6b7280] text-6xl font-bold mb-5 font-serif select-none">
            Front-End Developer
          </h1>
          <p className="font-mono text-xl mb-8 select-none">
            Hi, I'm{" "}
            <span className="text-[#f55f8d] font-semibold">Ma Thanh Khoi</span>.
            A passionate Front-end React Developer based in Ho Chi Minh
            city,Viet Nam.📍
          </p>

          <div className="flex items-center gap-x-10">
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

        <div className="w-[350px] h-[350px] rounded-full ">
          <img
            src="./image/avatar.jpg"
            alt=""
            className="object-cover w-full h-full rounded-full animate-morph"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-10 mb-10">
        <p className="border-r-2 border-r-[#6b7280] pr-10 text-lg font-sans font-semibold">
          Tech Stack
        </p>
        <ul className="flex items-center gap-8">
          {logoList.map(({ name, src }) => {
            return (
              <li
                key={name}
                title={name}
                className="w-16 h-16 bg-white flex items-center justify-center rounded-full shadow-lg"
              >
                <img src={src} alt={name} className="w-10 h-10" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Intro;
