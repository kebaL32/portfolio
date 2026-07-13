import React, { useState } from "react";
import ProjectData from "./Data/Project.json";

const ProjectCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-colors duration-300"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4">
        <img
          className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-500"
          src={data.imagesrc}
          alt={`Screenshot of ${data.title} project`}
          loading="lazy"
          width="400"
          height="200"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow bg-slate-50 dark:bg-slate-800/50">
        <h5 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{data.title}</h5>
        
        <div className="relative mb-6 flex-grow">
          <div 
            className={`text-slate-600 dark:text-slate-300 text-sm transition-all duration-300 overflow-y-auto ${
              isExpanded ? "max-h-40" : "max-h-20 line-clamp-3"
            }`}
          >
            {data.Description}
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-orange-600 dark:text-orange-400 text-xs font-bold mt-2 hover:text-orange-700 transition-colors focus:outline-none"
          >
            {isExpanded ? "Read Less ↑" : "Read More ↓"}
          </button>
        </div>

        <div className="flex gap-4 mt-auto">
          {data.URL && data.URL !== "#" ? (
            <a
              href={data.URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg text-sm font-medium no-underline transition-colors"
            >
              Demo
            </a>
          ) : (
            <div className="flex-1 text-center bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 py-2 px-4 rounded-lg text-sm font-medium cursor-not-allowed">
              No Demo
            </div>
          )}
          {data.source && data.source !== "#" ? (
            <a
              href={data.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-slate-800 dark:bg-slate-900 hover:bg-slate-900 text-white py-2 px-4 rounded-lg text-sm font-medium no-underline transition-colors"
            >
              Code
            </a>
          ) : (
            <div className="flex-1 text-center bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 py-2 px-4 rounded-lg text-sm font-medium cursor-not-allowed">
              Private Repo
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300" id="Project">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Projects
          </h1>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ProjectData.map((data) => (
            <ProjectCard key={data.key} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
