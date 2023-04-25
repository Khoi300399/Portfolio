import React from "react";
import { Link } from "react-scroll";

const linkList = [
  {
    title: "Home",
    url: "home",
  },
  {
    title: "About me",
    url: "about",
  },
  {
    title: "Projects",
    url: "projects",
  },
  {
    title: "Contact",
    url: "contact",
  },
];
const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between max-w-full px-16 py-1 shadow-md">
        <div className="w-12">
          <img
            src="./image/logo.png"
            alt="logo"
            className="object-cover w-full h-full"
          />
        </div>
        <ul className="flex items-baseline justify-between gap-x-8 text-lg font-semibold text-[#070120] ">
          {linkList.map(({ title, url }) => {
            return (
              <li
                key={title}
                className="hover:text-[#f55f8d] transition-all animate-up py-5 select-none"
              >
                <Link
                  to={url}
                  smooth={true}
                  duration={500}
                  className="select-none cursor-pointer"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
