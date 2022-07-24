import React, { useState } from "react";
import Roadmap from "../components/Roadmap";
import Mainpage from "../components/Mainpage";
import About from "../components/About";
import Faq from "../components/Faq";

import Sidebar from "../components/Sidebar";
import NavbarGlass from "../components/NavbarGlass";
import Artwork from "../components/Artwork";
import Team from "../components/Team";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavbarGlass toggle={toggle} />

      <Mainpage />

      <About />

      <Artwork />

      {/* <Roadmap />  */}

      <Team />

      <Faq />

      <Footer />
    </>
  );
};

export default Home;
