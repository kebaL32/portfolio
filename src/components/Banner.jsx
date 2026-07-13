import React, { useEffect, useRef, useState } from "react";
import BannerImage from "../Image/profile-pic.jpg";
import wallpaper from "../Image/new.jpeg";
import darkBackground from "../Image/dark-background.png";
import Typed from "typed.js";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  const el = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const phoneNumber = "251928163283";
  const message = encodeURIComponent(
    "Hello Kebron! Tell me something about you."
  );

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "React Developer",
        "MERN Stack Developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 10,
      loop: true,
    });

    // Track dark mode state for background image
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    // Initial check
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    return () => {
      typed.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="relative main-container flex flex-col md:flex-row items-center justify-between p-4 md:p-12 overflow-x-hidden transition-all duration-500"
    >
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-[-1] transition-all duration-500"
        style={{
          backgroundImage: `url(${isDarkMode ? darkBackground : wallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      {/* Dark Mode Overlay for better text contrast */}
      <div className={`absolute inset-0 z-[-1] transition-opacity duration-500 ${isDarkMode ? "bg-slate-900/60" : "bg-black/20"}`} />

      <div
        className="w-full md:w-1/2 lg:ml-14 flex flex-col items-center md:items-start justify-center md:text-left"
        id="Banner"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="w-full text-white p-4">
          <h3 className="text-3xl font-semibold italic">Hi, I am</h3>
          <h1 className="text-2xl font-bold italic">Kebron Luel</h1>
          <h2 className="font-bold text-sm">
            I am a <span ref={el}></span>
          </h2>
          <p className="text-sm leading-relaxed opacity-90">
            I am a full stack developer from Ethiopia, Addis Abeba. I build
            modern, responsive, and scalable web applications using React,
            Node.js, Express, and MySQL. I enjoy solving real-world problems and
            continuously learning new technologies.
          </p>

          <div className="flex flex-wrap gap-3 text-sm mt-6">
            {[
              { icon: "fa-facebook", link: "https://www.facebook.com/profile.php?id=100088821502598" },
              { icon: "fa-instagram", link: "https://www.instagram.com/kebiluel?utm_source=qr&igsh=MW8wOTRmdDV2cGc1OA==" },
              { icon: "fa-linkedin", link: "#" },
              { icon: "fa-envelope", link: "mailto:kebronluel78@gmail.com" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-950/50 hover:bg-orange-600 border border-white/20 text-white px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
              >
                <i className={`${social.icon === 'fa-envelope' ? 'fa-solid' : 'fa-brands'} ${social.icon}`}></i>
              </a>
            ))}
          </div>
          <br />

          <ScrollLink
            to="Project"
            smooth={true}
            duration={500}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg rounded-full text-white font-semibold cursor-pointer inline-block transform hover:-translate-y-1"
          >
            View My Work
          </ScrollLink>
        </div>
      </div>

      <div
        className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          className="rounded-lg h-80 w-auto my-1 mb-4 shadow-2xl border-4 animate-identifier border-orange-500"
          src={BannerImage}
          alt="Kebron Luel Profile Picture"
          fetchPriority="high"
          width="320"
          height="320"
        />
      </div>
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform z-[9999]"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default Banner;
