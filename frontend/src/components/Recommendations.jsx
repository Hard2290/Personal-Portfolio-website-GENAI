import React from "react";
import { Quote, User, Building } from "lucide-react";

const Recommendations = ({ data }) => {
  return (
    <section id="recommendations" className="section">
      <div className="container">
        <div className="section-header">
          <div className="label">TESTIMONIALS</div>
          <h2 className="title-big">RECOMMENDATIONS</h2>
          <p className="section-description text-body">
            What colleagues and managers say about working with me
          </p>
        </div>

        <div className="recommendations-grid">
          {data.map((recommendation, index) => (
            <div key={index} className="recommendation-card">
              <div className="recommendation-header">
                <div className="quote-icon">
                  <Quote size={24} />
                </div>
                <div className="recommendation-date label-small">
                  {recommendation.date}
                </div>
              </div>

              <div className="recommendation-content">
                <blockquote className="recommendation-text text-body">
                  "{recommendation.text}"
                </blockquote>
              </div>

              <div className="recommender-info">
                <div className="recommender-avatar">
                  <User size={24} />
                </div>
                <div className="recommender-details">
                  <div className="recommender-name text-regular">
                    {recommendation.name}
                  </div>
                  <div className="recommender-title text-body">
                    {recommendation.title}
                  </div>
                  <div className="recommender-company">
                    <Building size={14} />
                    <span className="label-small">{recommendation.company}</span>
                  </div>
                  <div className="relationship label-small">
                    {recommendation.relationship}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;