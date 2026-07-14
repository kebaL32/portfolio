import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Kebron Luel</h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-center md:text-left max-w-xs">
              Always open to collaboration and new opportunities.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3 p-0 list-none text-center">
              <li>
                <a href="#Banner" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 no-underline transition-colors text-sm font-medium">Home</a>
              </li>
              <li>
                <a href="#About" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 no-underline transition-colors text-sm font-medium">About Me</a>
              </li>
              <li>
                <a href="#Project" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 no-underline transition-colors text-sm font-medium">Projects</a>
              </li>
              <li>
                <a href="#Skill" className="text-slate-600 dark:text-slate-300 hover:text-orange-500 no-underline transition-colors text-sm font-medium">Skills</a>
              </li>
            </ul>
          </div>

          {/* Social Connect Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-6 uppercase tracking-wider">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="#"  rel="noopener noreferrer" className="w-10 h-10 bg-white dark:bg-slate-700 shadow-md rounded-full flex items-center justify-center text-slate-600 dark:text-slate-200 hover:bg-orange-500 hover:text-white transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/kebaL32" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white dark:bg-slate-700 shadow-md rounded-full flex items-center justify-center text-slate-600 dark:text-slate-200 hover:bg-orange-500 hover:text-white transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100088821502598" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white dark:bg-slate-700 shadow-md rounded-full flex items-center justify-center text-slate-600 dark:text-slate-200 hover:bg-orange-500 hover:text-white transition-all">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/kebiluel?utm_source=qr&igsh=MW8wOTRmdDV2cGc1OA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white dark:bg-slate-700 shadow-md rounded-full flex items-center justify-center text-slate-600 dark:text-slate-200 hover:bg-orange-500 hover:text-white transition-all">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/251928163283" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white dark:bg-slate-700 shadow-md rounded-full flex items-center justify-center text-slate-600 dark:text-slate-200 hover:bg-orange-500 hover:text-white transition-all">
                <FaWhatsapp size={20} />
              </a>
            </div>
            <div className="mt-6 flex items-center text-slate-600 dark:text-slate-300 hover:text-orange-500 transition-colors">
              <FaEnvelope className="mr-2" />
              <a href="mailto:kebronluel78@gmail.com" className="text-sm font-medium cursor-pointer">kebronluel78@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            © {currentYear} <span className="text-orange-500 font-semibold">Kebron Luel</span>. All rights reserved. 
            Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
