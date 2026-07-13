import React, { useEffect } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
// import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Skill />
      <Services />
      <Expertise />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default App;
