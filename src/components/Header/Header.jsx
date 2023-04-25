import React, { useEffect, useRef, useState } from "react";
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
  const [isMenu, setIsMenu] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleOutside(e) {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        setIsMenu(false);
      }
    }

    document.addEventListener("click", handleOutside);

    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, []);
  return (
    <div className="fixed top-0 right-0 left-0">
      <div className="flex items-center justify-between max-w-full sm:px-16 px-3 py-1 shadow-md">
        <div className="w-12">
          <img
            src="./image/logo.png"
            alt="logo"
            className="object-cover w-full h-full"
          />
        </div>

        <div
          ref={nodeRef}
          className="lg:hidden text-2xl"
          onClick={() => {
            setIsMenu(true);
          }}
        >
          <i className="fa-solid fa-bars-staggered"></i>
        </div>

        <ul className="lg:flex lg:items-baseline lg:justify-between lg:gap-x-8 text-lg font-semibold text-[#070120]  hidden">
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
        <ul
          ref={nodeRef}
          className={`text-lg font-semibold text-[#070120] fixed top-0 right-0 bottom-0 bg-white w-[300px] block py-10 shadow-lg text-center transition-all ease-linear ${
            isMenu ? "" : "translate-x-full"
          } `}
        >
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
