import React from "react";
import Header from "../../components/Header/Header.jsx";
import Intro from "../../components/Intro/Intro.jsx";
import About from "../../components/About/About.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div id="home">
      <Header></Header>
      <Intro></Intro>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
