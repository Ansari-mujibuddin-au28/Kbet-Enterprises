import React from 'react';
import { about } from '../constants';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-label">About Us</div>
        <h2 className="section-titkeeee">Building Dreams, Delivering Excellence</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>{about.heading}</h3>
            <p>{about.description}</p>
            <p>{about.vision}</p>
            <ul className="features-list">
              {about.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i> {feature}
                </li>
              ))}
            </ul>
            <div className="quote">"{about.quote}"</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;