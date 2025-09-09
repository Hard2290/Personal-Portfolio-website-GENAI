import React from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{data.name}</h1>
            <div className="hero-subtitle">
              <span className="text-big">{data.title}</span>
            </div>
            <p className="hero-description text-body">
              {data.description}
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number text-regular">53/5823</div>
                <div className="stat-label label-small">KAGGLE RANK</div>
              </div>
              <div className="stat-item">
                <div className="stat-number text-regular">50+</div>
                <div className="stat-label label-small">LEETCODE SOLVED</div>
              </div>
              <div className="stat-item">
                <div className="stat-number text-regular">IIT</div>
                <div className="stat-label label-small">KANPUR ALUMNI</div>
              </div>
            </div>

            <div className="hero-actions">
              <button 
                className="btn-accent"
                onClick={() => scrollToSection("projects")}
              >
                VIEW PROJECTS
              </button>
              <button 
                className="btn-primary"
                onClick={() => scrollToSection("contact")}
              >
                GET IN TOUCH
              </button>
            </div>

            <div className="hero-social">
              <a 
                href={data.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={20} />
              </a>
              <a 
                href={data.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${data.social.email}`}
                className="social-link"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-scroll">
            <button 
              className="scroll-indicator"
              onClick={() => scrollToSection("about")}
            >
              <ArrowDown size={24} />
              <span className="label-small">SCROLL DOWN</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;