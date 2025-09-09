import React from "react";
import { ExternalLink, Github, Trophy, Target, TrendingUp } from "lucide-react";

const Projects = ({ data }) => {
  const getProjectIcon = (type) => {
    switch (type) {
      case "competition":
        return Trophy;
      case "prediction":
        return Target;
      case "analytics":
        return TrendingUp;
      default:
        return TrendingUp;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="label">SELECTED WORK</div>
          <h2 className="title-big">FEATURED PROJECTS</h2>
          <p className="section-description text-body">
            Top-performing Kaggle competitions demonstrating end-to-end machine learning expertise
          </p>
        </div>

        <div className="projects-grid">
          {data.featured.map((project, index) => {
            const IconComponent = getProjectIcon(project.type);
            return (
              <div key={index} className="project-card">
                <div className="project-header">
                  <div className="project-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="project-rank">
                    <div className="rank-number text-regular">#{project.rank}</div>
                    <div className="rank-total label-small">OF {project.total}</div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title text-regular">{project.title}</h3>
                  <div className="project-platform label">{project.platform}</div>
                  
                  <p className="project-description text-body">
                    {project.description}
                  </p>

                  <div className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="highlight text-body">
                        • {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag label-small">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-metrics">
                    <div className="metric">
                      <div className="metric-value text-regular">{project.accuracy}</div>
                      <div className="metric-label label-small">SCORE/RMSE</div>
                    </div>
                    <div className="metric">
                      <div className="metric-value text-regular">Top {project.percentile}%</div>
                      <div className="metric-label label-small">PERCENTILE</div>
                    </div>
                  </div>
                </div>

                <div className="project-actions">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      <Github size={16} />
                      CODE
                    </a>
                  )}
                  {project.kaggle && (
                    <a 
                      href={project.kaggle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <ExternalLink size={16} />
                      KAGGLE
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects-footer">
          <div className="achievement-summary">
            <div className="achievement-item">
              <div className="text-big">Top 1%</div>
              <div className="label-small">HOUSING PRICES</div>
            </div>
            <div className="achievement-item">
              <div className="text-big">Top 3%</div>
              <div className="label-small">TITANIC SURVIVAL</div>
            </div>
            <div className="achievement-item">
              <div className="text-big">Top 7%</div>
              <div className="label-small">ADVANCED REGRESSION</div>
            </div>
          </div>
          
          <a 
            href="https://github.com/Hard2290"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;