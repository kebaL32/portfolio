import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import wallpapper from "../Image/new.jpeg";
import darkBackground from "../Image/dark-background.png";

const Experties = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Track dark mode state for background image
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    // Initial check
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="mt-2 md:w-full bg-slate-50 dark:bg-slate-900 transition-colors duration-300" id="Expertise">
        <h1
          className="text-center text-4xl font-bold underline pb-16 italic text-slate-800 dark:text-slate-100"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          My Expertise
        </h1>
      </div>

      <div
        style={{
          backgroundImage: `url(${isDarkMode ? darkBackground : wallpapper})`,
          backgroundSize: "cover",
        }}
        className="py-10 transition-all duration-500"
      >
        <div></div>
        <div
          className="flex flex-col lg:flex-row items-center justify-between container mx-auto px-6 md:px-12"
        >
          <div
            className="text-center lg:text-left text-slate-100 lg:w-1/2 px-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1 className="text-3xl font-semibold text-white italic">
              I Love These Technologies
            </h1>
            <p className="mt-4 max-w-md mx-auto lg:mx-0 text-slate-200 dark:text-slate-300">
              I am a passionate Full-Stack Developer and a student at Mekelle University. 
              I specialize in building scalable and efficient web applications using the MERN stack and MySQL. 
              Feel free to explore my projects or contact me for any collaboration!
            </p>
            {/* <Link
              to="Footer"
              smooth={true}
              duration={500}
              className="inline-block mt-4 px-4 py-2 bg-orange-500 shadow rounded-full text-lg text-white hover:bg-orange-400 cursor-pointer"
            >
              Hire Me!
            </Link> */}
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div
              className="flex flex-wrap justify-center lg:justify-end max-w-sm"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "Node.js",
                "Express",
                "MySQL",
                "Git",
                "Tailwind CSS",
              ].map((tech, index) => (
                <p
                  key={index}
                  className="bg-gray-300 dark:bg-slate-700 dark:text-slate-200 w-fit px-3 m-1 hover:bg-orange-500 cursor-pointer py-2 rounded-full transition duration-300"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experties;
