import React from "react";
import { Building, Calendar, MapPin, Award } from "lucide-react";

const Experience = ({ data }) => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="label">PROFESSIONAL JOURNEY</div>
          <h2 className="title-big">WORK EXPERIENCE</h2>
        </div>

        <div className="experience-timeline">
          {data.work.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-meta">
                    <div className="company-info">
                      <Building size={16} />
                      <span className="text-regular">{job.company}</span>
                    </div>
                    <div className="location-info">
                      <MapPin size={14} />
                      <span className="label-small">{job.location}</span>
                    </div>
                  </div>
                  
                  <div className="date-info">
                    <Calendar size={14} />
                    <span className="label-small">{job.period}</span>
                  </div>
                </div>

                <div className="experience-content">
                  <h3 className="job-title text-regular">{job.title}</h3>
                  
                  <ul className="achievements-list">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="achievement text-body">
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="job-skills">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag label-small">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="education-section">
          <h3 className="section-subtitle title-big">EDUCATION</h3>
          
          <div className="education-timeline">
            {data.education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="education-card">
                  <div className="education-header">
                    <div className="institution-info">
                      <Award size={20} />
                      <div className="institution-details">
                        <div className="text-regular">{edu.degree}</div>
                        <div className="label">{edu.institution}</div>
                        {edu.board && <div className="label-small">{edu.board}</div>}
                      </div>
                    </div>
                    
                    <div className="education-meta">
                      <div className="year label">{edu.year}</div>
                      <div className="gpa text-regular">{edu.gpa}</div>
                    </div>
                  </div>

                  {edu.awards && edu.awards.length > 0 && (
                    <div className="awards-section">
                      <div className="awards-title label-small">AWARDS & RECOGNITION</div>
                      <div className="awards-list">
                        {edu.awards.map((award, awardIndex) => (
                          <div key={awardIndex} className="award-item">
                            <div className="award-header">
                              <div className="award-title text-body">{award.title}</div>
                              <div className="award-date label-small">{award.date}</div>
                            </div>
                            <div className="award-issuer label-small">Issued by {award.issuer}</div>
                            <div className="award-description text-body">{award.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="other-achievements">
            <h4 className="achievements-title text-regular">OTHER ACHIEVEMENTS</h4>
            <div className="achievements-grid">
              {data.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-title text-body">{achievement.title}</div>
                  <div className="achievement-detail label-small">{achievement.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;