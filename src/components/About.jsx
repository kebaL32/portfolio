import React, { useState } from "react";
import BannerImage from "../Image/profile-pic.jpg";

const About = () => {
  const [data] = useState({
    image: BannerImage,
    title: "Full-Stack Web Developer & Software Engineering Student",
    description1: `Hi! I'm a second-year university student at Mekelle University and a passionate Full-Stack Web Developer.`,
    description2: `My journey began with the building blocks of the web—HTML, CSS, and JavaScript. As my curiosity grew, I dived deeper into the ecosystem, expanding my toolkit to include React, Node.js, Express.js, and MySQL. I love the process of turning a complex problem into a responsive, scalable, and user-friendly application. For me, coding isn't just about writing lines of text; it's about creating real-world tools that deliver actual value and solve meaningful problems for people.`,

    actionButton: {
      title: "Read More",
      link: "/Read More",
    },
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-24 transition-colors duration-300" id="About">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            About Me
          </h1>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-16">
          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            <div className="relative">
              <img
                className="rounded-2xl shadow-2xl border-4 border-white dark:border-slate-700 object-cover w-64 h-64 md:w-96 md:h-96"
                src={data.image}
                alt="Kebron Luel - About Me"
                loading="lazy"
                width="384"
                height="384"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-orange-500 rounded-2xl -z-10"></div>
            </div>
          </div>

          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <div className="space-y-6 max-w-xl">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 leading-tight">
                {data.title}
              </h2>
              <p className="text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                {data.description1}
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {data.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
