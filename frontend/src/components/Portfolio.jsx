import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Recommendations from "./Recommendations";
import Contact from "./Contact";
import Footer from "./Footer";
import GridBackground from "./GridBackground";
import { mockData } from "../data/mock";

const Portfolio = () => {
  const [data, setData] = useState(mockData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-text">LOADING...</div>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      <GridBackground />
      <Header />
      <main>
        <Hero data={data.hero} />
        <About data={data.about} />
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Experience data={data.experience} />
        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;