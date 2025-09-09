import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo" onClick={() => scrollToSection("hero")}>
            HARDIK HARSH
          </div>
          
          <nav className="nav-desktop">
            <button className="nav-link" onClick={() => scrollToSection("about")}>
              ABOUT
            </button>
            <button className="nav-link" onClick={() => scrollToSection("skills")}>
              SKILLS
            </button>
            <button className="nav-link" onClick={() => scrollToSection("projects")}>
              PROJECTS
            </button>
            <button className="nav-link" onClick={() => scrollToSection("experience")}>
              EXPERIENCE
            </button>
            <button className="nav-link" onClick={() => scrollToSection("recommendations")}>
              TESTIMONIALS
            </button>
            <button className="nav-link" onClick={() => scrollToSection("contact")}>
              CONTACT
            </button>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="nav-mobile">
            <button className="nav-link-mobile" onClick={() => scrollToSection("about")}>
              ABOUT
            </button>
            <button className="nav-link-mobile" onClick={() => scrollToSection("skills")}>
              SKILLS
            </button>
            <button className="nav-link-mobile" onClick={() => scrollToSection("projects")}>
              PROJECTS
            </button>
            <button className="nav-link-mobile" onClick={() => scrollToSection("experience")}>
              EXPERIENCE
            </button>
            <button className="nav-link-mobile" onClick={() => scrollToSection("contact")}>
              CONTACT
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;