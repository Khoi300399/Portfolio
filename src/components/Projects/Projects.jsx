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
    image: "./image/movie.png",
    code: "https://github.com/Khoi300399/angular-movie-project",
    demo: "https://mtk-cinema.vercel.app/",
    desc: "MTK Cinema is an online website that allows users to share their personal blogs.",
    name: "MTK CINEMA",
    tech: ["Angular", "Typescript", "SCSS"],
    status: "hover:-translate-y-[78%]",
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
    image: "./image/vicodin.png",
    code: "https://github.com/Khoi300399/vicodin",
    demo: "https://vicodin-five.vercel.app/",
    desc: "Vicodin is a website interface written using PUG and SCSS.",
    name: "VICODIN",
    tech: ["PUG", "SCSS"],
    status: "hover:-translate-y-[90%]",
  },
  {
    image: "./image/samar.png",
    code: "https://github.com/Khoi300399/Samar",
    demo: "https://samar-lime.vercel.app/",
    desc: "Samar is a website interface written using PUG and SCSS.",
    name: "SAMAR",
    tech: ["PUG", "SCSS"],
    status: "hover:-translate-y-[90%]",
  },
  {
    image: "./image/food.png",
    code: "https://github.com/Khoi300399/food_app",
    demo: "https://food-app-beta-two.vercel.app/",
    desc: "Fodo is a website interface written using PUG and SCSS.",
    name: "FODO",
    tech: ["PUG", "SCSS"],
    status: "hover:-translate-y-[90%]",
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
