import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="header-logo">HARDIK HARSH</div>
            <p className="footer-tagline text-body">
              Data Scientist & ML Engineer
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <div className="footer-title label">SECTIONS</div>
              <div className="footer-nav">
                <a href="#about" className="footer-link">About</a>
                <a href="#skills" className="footer-link">Skills</a>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#experience" className="footer-link">Experience</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>

            <div className="footer-section">
              <div className="footer-title label">CONNECT</div>
              <div className="footer-social">
                <a 
                  href="https://linkedin.com/in/hardik-harsh-bb5819169"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Hard2290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a 
                  href="mailto:rrhrdikh@gmail.com"
                  className="footer-social-link"
                >
                  <Mail size={18} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span className="label-small">© {currentYear} HARDIK HARSH. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="footer-made">
            <span className="label-small">
              MADE WITH <Heart size={12} className="heart-icon" /> FOR DATA SCIENCE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;