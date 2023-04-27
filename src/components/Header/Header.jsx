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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const nodeRef = useRef(null);
  const Ref = useRef(null);
  useEffect(() => {
    function handleOutside(e) {
      if (
        nodeRef.current &&
        Ref.current &&
        !nodeRef.current.contains(e.target) &&
        !Ref.current.contains(e.target)
      ) {
        setIsMenu(false);
      }
    }

    document.addEventListener("click", handleOutside);

    return () => {
      document.removeEventListener("click", handleOutside);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset;
      const threshold = 50; // ngưỡng cuộn trang để thêm class
      setIsScrolled(scrollTop > threshold);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <div
        className={`flex items-center justify-between max-w-full sm:px-16 px-3 py-1 ${
          isScrolled ? "shadow-md backdrop-blur-lg" : ""
        } `}
      >
        <div className="w-12">
          <img
            src="./image/logo.png"
            alt="logo"
            className="object-cover w-full h-full"
          />
        </div>

        <div
          ref={Ref}
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
          className={`text-lg font-semibold text-[#070120] fixed top-0 right-0 bottom-0 bg-white w-[300px] block py-10 shadow-lg text-center transition-all ease-linear duration-200  ${
            isMenu ? "translate-x-0" : "translate-x-full"
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
