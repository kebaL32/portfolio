import React from "react";
import Skils from "./Data/Skills.json";

const Skill = () => {
  return (
    <div className="py-10 bg-slate-50 dark:bg-slate-900 transition-colors duration-300" id="Skill">
      <div className="container mx-auto px-4">
        <h1
          className="text-center text-4xl font-bold underline italic mb-14 text-slate-800 dark:text-slate-100"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Skils.map((data) => (
            <div
              key={data.id}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <img
                  className="max-w-full max-h-full object-contain"
                  src={data.ImgeSrc}
                  alt={`${data.title} skill icon`}
                  loading="lazy"
                  width="80"
                  height="80"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
