import React from "react";
import { Code, Database, BarChart3, Brain, Wrench, TrendingUp } from "lucide-react";

const Skills = ({ data }) => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming & Tools",
      skills: data.programming
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: data.machineLearning
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: data.dataAnalytics
    },
    {
      icon: BarChart3,
      title: "Visualization & BI",
      skills: data.visualization
    },
    {
      icon: Wrench,
      title: "Deep Learning",
      skills: data.deepLearning
    },
    {
      icon: TrendingUp,
      title: "Statistics",
      skills: data.statistics
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="label">CORE COMPETENCIES</div>
          <h2 className="title-big">SKILLS & EXPERTISE</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="skill-category">
                <div className="skill-header">
                  <IconComponent className="skill-icon" size={24} />
                  <h3 className="text-regular">{category.title}</h3>
                </div>
                
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <span className="skill-name text-body">{skill.name}</span>
                      {skill.level && (
                        <div className="skill-level">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-summary">
          <div className="summary-item">
            <div className="text-big">Python</div>
            <div className="label-small">PRIMARY LANGUAGE</div>
          </div>
          <div className="summary-item">
            <div className="text-big">TensorFlow</div>
            <div className="label-small">DEEP LEARNING</div>
          </div>
          <div className="summary-item">
            <div className="text-big">SQL</div>
            <div className="label-small">DATA QUERYING</div>
          </div>
          <div className="summary-item">
            <div className="text-big">Power BI</div>
            <div className="label-small">VISUALIZATION</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;