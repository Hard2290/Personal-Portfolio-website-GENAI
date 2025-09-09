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
import { portfolioAPI, handleApiError } from "../services/api";

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch all portfolio data at once for better performance
        const portfolioData = await portfolioAPI.getAllData();
        setData(portfolioData);
        
        console.log('Portfolio data loaded successfully');
      } catch (err) {
        const errorMessage = handleApiError(err);
        setError(errorMessage);
        console.error('Failed to load portfolio data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-text">LOADING...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h1 className="text-big">Oops! Something went wrong</h1>
          <p className="text-body">{error}</p>
          <button 
            className="btn-accent"
            onClick={() => window.location.reload()}
          >
            TRY AGAIN
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h1 className="text-big">No Data Available</h1>
          <p className="text-body">Portfolio data could not be loaded.</p>
          <button 
            className="btn-accent"
            onClick={() => window.location.reload()}
          >
            RELOAD
          </button>
        </div>
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
        <Recommendations data={data.recommendations} />
        <Contact data={data.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;