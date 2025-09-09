import React from "react";
import { Award, Brain, Code, Database } from "lucide-react";

const About = ({ data }) => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="label">ABOUT ME</div>
          <h2 className="title-big">WHO I AM</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="text-big about-intro">
              {data.intro}
            </p>
            
            <div className="about-details">
              <p className="text-body">
                {data.description}
              </p>
              
              <p className="text-body">
                {data.expertise}
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <Award className="highlight-icon" size={24} />
                <div className="highlight-content">
                  <div className="text-regular">Top 1% Kaggle Performer</div>
                  <div className="label-small">HOUSING PRICES COMPETITION</div>
                </div>
              </div>
              
              <div className="highlight-item">
                <Brain className="highlight-icon" size={24} />
                <div className="highlight-content">
                  <div className="text-regular">IIT Kanpur Graduate</div>
                  <div className="label-small">B.TECH CIVIL ENGINEERING</div>
                </div>
              </div>
              
              <div className="highlight-item">
                <Code className="highlight-icon" size={24} />
                <div className="highlight-content">
                  <div className="text-regular">50+ LeetCode Problems</div>
                  <div className="label-small">PYTHON ALGORITHMS</div>
                </div>
              </div>
              
              <div className="highlight-item">
                <Database className="highlight-icon" size={24} />
                <div className="highlight-content">
                  <div className="text-regular">End-to-End ML Pipelines</div>
                  <div className="label-small">PRODUCTION READY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;