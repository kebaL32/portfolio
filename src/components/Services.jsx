import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      icon: "fa-solid fa-code",
      description: "Crafting clean, responsive, and performance-driven websites using modern HTML, CSS, and JavaScript. I focus on delivering seamless user experiences across all devices.",
      
      delay: "0"
    },
    {
      title: "UX/UI Design",
      icon: "fa-solid fa-wand-magic-sparkles",
      description: "Designing intuitive and visually compelling digital experiences. I prioritize usability, accessibility, and aesthetics to ensure high user satisfaction and engagement.",
      
      delay: "200"
    },
    {
      title: "React Development",
      icon: "fa-brands fa-react",
      description: "Building scalable and interactive single-page applications with React. I specialize in state management, component architecture, and optimizing web performance.",
      
      delay: "400"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-900 py-24 transition-colors duration-300" id="Service">
      <div className="container mx-auto px-6">
        <h1
          className="text-center text-4xl font-bold italic mb-16 underline text-slate-800 dark:text-slate-100"
          data-aos="fade-down"
        >
          Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 group"
              data-aos="zoom-in-up"
              data-aos-delay={service.delay}
            >
              <div className="w-16 h-16 bg-orange-100 dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <i className={`text-3xl ${service.icon} text-orange-600 dark:text-orange-400 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">{service.title}</h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              {/* <Link
                to={service.link}
                target="_blank"
                className="no-underline"
              >
                <button className="px-6 py-2 bg-slate-800 dark:bg-slate-700 hover:bg-orange-500 text-white text-sm font-bold rounded-full transition-colors shadow-md">
                  Check out Project
                </button>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
