import { memo } from "react";

const ProjectItem = ({ data }) => {
  return (
    <div className="w-[990px] h-[400px] flex items-center justify-center gap-5 mx-auto shadow-lg px-5 my-10 rounded-md">
      <div className="min-w-[530px] max-w-[620px] max-h-[300px] h-auto overflow-hidden rounded-2xl shadow-md">
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
              <span key={item} className="px-3 py-2 rounded-sm shadow-md">
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
