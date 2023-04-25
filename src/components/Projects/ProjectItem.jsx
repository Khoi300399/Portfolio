import { memo } from "react";

const ProjectItem = ({ data }) => {
  return (
    <div className="lg:w-[990px] lg:h-[400px] sm:w-[600px] w-[300px] flex lg:flex-row flex-col items-center justify-center lg:gap-x-5 gap-y-8 mx-auto shadow-lg px-5 lg:py-0 py-5 my-10 rounded-md">
      <div className="sm:min-w-[530px] sm:max-w-[620px] sm:max-h-[300px] max-h-[200px] h-auto overflow-hidden rounded-2xl shadow-md">
        <a href={data?.demo}>
          <img
            src={data?.image}
            alt="jira"
            className={`object-cover w-full h-auto rounded-lg translate-y-[0%] transition-all ease-in-out duration-[10s] ${data?.status}`}
          />
        </a>
      </div>
      <div>
        <h5 className="text-center text-lg font-semibold mb-5">{data?.name}</h5>
        <p className="text-[#6b7280] text-center mb-5">{data?.desc}</p>
        <div className="flex items-center justify-center gap-x-5 mb-10">
          {data?.tech?.map((item) => {
            return (
              <span
                key={item}
                className="sm:px-3 sm:py-2 px-2 py-1 rounded-sm shadow-md"
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-x-5">
          <a
            href={data?.code}
            className="text-lg text-[#070120] hover:text-[#f55f8d] cursor-pointer transition-all"
          >
            Code <i className="fa-brands fa-github"></i>
          </a>
          <a
            href={data?.demo}
            className="text-lg text-[#070120] hover:text-[#f55f8d] cursor-pointer transition-all"
          >
            Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectItem);
