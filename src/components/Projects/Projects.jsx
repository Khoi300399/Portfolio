import React from "react";
import ProjectItem from "./ProjectItem.jsx";

const projectList = [
  {
    image: "./image/jira.png",
    code: "https://github.com/Khoi300399/BC35E_Capstone-Jira_MaThanhKhoi",
    demo: "https://monkey-jira.vercel.app/",
    desc: "Monkey Jira is an online website that allows users to easily manage their projects and tasks.",
    name: "MONKEY JIRA",
    tech: ["React", "Typescript", "Tailwind"],
    status: "hover:-translate-y-[0%]",
  },
  {
    image: "./image/blog.png",
    code: "https://github.com/Khoi300399/monkey-blogging-template",
    demo: "https://monkey-blogging-template.vercel.app/",
    desc: "Monkey Blogging is an online website that allows users to share their personal blogs.",
    name: "MONKEY BLOGGING",
    tech: ["React", "Typescript", "SCSS"],
    status: "hover:-translate-y-[0%]",
  },
  {
    image: "./image/shoes.png",
    code: "https://github.com/Khoi300399/BC35E_Capstone-ReactJS",
    demo: "https://shoes-shop-gamma.vercel.app/",
    desc: "The Shoes Shop is an online platform that allows users to easily and conveniently purchase shoes according to their preferences.",
    name: "THE SHOES SHOP",
    tech: ["React", "SCSS"],
    status: "hover:-translate-y-[0%]",
  },
  {
    image: "./image/masterwork.png",
    code: "https://github.com/Khoi300399/masterwork",
    demo: "https://masterwork-sigma.vercel.app/",
    desc: "Masterwork is a website interface written using HTML5 and CSS3.",
    name: "MASTERWORK",
    tech: ["HTML5", "CSS3"],
    status: "hover:-translate-y-[88%]",
  },
  {
    image: "./image/samar.png",
    code: "https://github.com/Khoi300399/Samar",
    demo: "https://khoi300399.github.io/Samar/",
    desc: "Samar is a website interface written using HTML5 and CSS3.",
    name: "SAMAR",
    tech: ["HTML5", "CSS3"],
    status: "hover:-translate-y-[90%]",
  },
  {
    image: "./image/meipaly.png",
    code: "https://github.com/Khoi300399/Meipaly",
    demo: "https://khoi300399.github.io/Meipaly/",
    desc: "Meipaly is a website interface written using HTML5 and CSS3.",
    name: "MEIPALY",
    tech: ["HTML5", "CSS3"],
    status: "hover:-translate-y-[89%]",
  },
  {
    image: "./image/tabula.png",
    code: "https://github.com/Khoi300399/Tabula",
    demo: "https://khoi300399.github.io/Tabula/",
    desc: "Tabula is a website interface written using HTML5 and CSS3.",
    name: "TABULA",
    tech: ["HTML5", "SCSS"],
    status: "hover:-translate-y-[70%]",
  },
  {
    image: "./image/anipat.png",
    code: "https://github.com/Khoi300399/Anipat",
    demo: "https://khoi300399.github.io/Anipat/",
    desc: "Anipat is a website interface written using HTML5 and CSS3.",
    name: "ANIPAT",
    tech: ["HTML", "CSS"],
    status: "hover:-translate-y-[85%]",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <div className="text-center flex flex-col items-center">
        <h3 className="text-[#f55f8d] text-3xl font-bold mb-3">PROJECTS</h3>
        <h4 className="text-[#070120] text-xl mb-3 font-semibold">
          Each project is a unique piece of development
        </h4>
      </div>
      {projectList?.map((data) => {
        return <ProjectItem key={data?.name} data={data}></ProjectItem>;
      })}
    </div>
  );
};

export default Projects;
