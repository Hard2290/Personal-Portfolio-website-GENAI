import React from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = ({ data }) => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="label">GET IN TOUCH</div>
          <h2 className="title-big">LET'S CONNECT</h2>
          <p className="section-description text-body">
            Ready to discuss data science opportunities or collaborate on exciting ML projects
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-header">
                <div className="text-regular">Direct Contact</div>
                <div className="label-small">REACH OUT DIRECTLY</div>
              </div>

              <div className="contact-methods">
                <a 
                  href={`mailto:${data.email}`}
                  className="contact-method"
                >
                  <Mail size={20} />
                  <div className="method-info">
                    <div className="text-body">{data.email}</div>
                    <div className="label-small">EMAIL</div>
                  </div>
                </a>

                <a 
                  href={`tel:${data.phone}`}
                  className="contact-method"
                >
                  <Phone size={20} />
                  <div className="method-info">
                    <div className="text-body">{data.phone}</div>
                    <div className="label-small">PHONE</div>
                  </div>
                </a>

                <div className="contact-method">
                  <MapPin size={20} />
                  <div className="method-info">
                    <div className="text-body">{data.location}</div>
                    <div className="label-small">LOCATION</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-card">
              <div className="contact-header">
                <div className="text-regular">Professional Networks</div>
                <div className="label-small">CONNECT & COLLABORATE</div>
              </div>

              <div className="social-links">
                <a 
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-card"
                >
                  <Linkedin size={24} />
                  <div className="social-info">
                    <div className="text-body">LinkedIn Profile</div>
                    <div className="label-small">PROFESSIONAL NETWORK</div>
                  </div>
                </a>

                <a 
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-card"
                >
                  <Github size={24} />
                  <div className="social-info">
                    <div className="text-body">GitHub Portfolio</div>
                    <div className="label-small">CODE REPOSITORIES</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <div className="cta-content">
              <h3 className="text-big">Ready to Work Together?</h3>
              <p className="text-body">
                Whether you're looking for a data scientist to join your team or want to 
                collaborate on innovative ML projects, I'd love to hear from you.
              </p>
              
              <div className="cta-stats">
                <div className="cta-stat">
                  <div className="text-regular">24h</div>
                  <div className="label-small">RESPONSE TIME</div>
                </div>
                <div className="cta-stat">
                  <div className="text-regular">Remote</div>
                  <div className="label-small">WORK READY</div>
                </div>
                <div className="cta-stat">
                  <div className="text-regular">Open</div>
                  <div className="label-small">TO OPPORTUNITIES</div>
                </div>
              </div>

              <div className="cta-actions">
                <a 
                  href={`mailto:${data.email}?subject=Data Science Opportunity`}
                  className="btn-accent"
                >
                  <Mail size={16} />
                  SEND EMAIL
                </a>
                <a 
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Linkedin size={16} />
                  CONNECT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;