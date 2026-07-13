import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const [logoText] = useState("Kebron Luel");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { title: "Home", link: "Banner", id: 1 },
    { title: "About", link: "About", id: 2 },
    { title: "Projects", link: "Project", id: 3 },
    { title: "Skills", link: "Skill", id: 4 },
    { title: "Services", link: "Service", id: 5 },
    { title: "Expertise", link: "Expertise", id: 6 },
  ];

  return (
    <nav className="sticky top-0 z-[1000] w-full">
      <div className="h-20 border-b flex justify-between items-center px-6 md:px-12 lg:px-20 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
        
        {/* Left Section: Logo & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-yellow-400 transition-all duration-300 hover:scale-110 order-first md:order-none"
            aria-label="Toggle Theme"
          >
            {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-orange-500 tracking-tight">
            {logoText}
          </h1>
        </div>

        {/* Right Section: Navigation & CTA */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  smooth={true}
                  duration={500}
                  className="text-slate-700 dark:text-slate-200 text-sm font-semibold no-underline hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 cursor-pointer relative group"
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          
          <a
            href="https://github.com/kebaL32"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 dark:bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-500 dark:hover:bg-orange-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Github
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <div className="cursor-pointer text-slate-700 dark:text-slate-200" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-slate-100 dark:bg-slate-800 border-b px-6 py-8 transition-all duration-300 border-slate-200 dark:border-slate-700`}>
        <ul className="space-y-6 no-underline text-center list-none p-0">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.link}
                smooth={true}
                duration={500}
                className="text-slate-700 dark:text-slate-200 text-lg font-semibold hover:text-orange-600 dark:hover:text-orange-400 block no-underline cursor-pointer"
                onClick={toggleMenu}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li className="pt-6 border-t border-slate-200 dark:border-slate-700">
            <a
              href="https://github.com/kebaL32"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold block no-underline shadow-lg hover:bg-orange-600 transition-all"
              onClick={toggleMenu}
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
