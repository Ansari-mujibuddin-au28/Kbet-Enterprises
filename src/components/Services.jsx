import React from 'react';
import { services } from '../constants';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-label">Our Services</div>
        <h2>Multi-Sector Expertise</h2>
        <p className="section-description">
          Delivering comprehensive solutions across construction, labor supply, and agricultural industries with unwavering commitment to quality.
        </p>
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              {service.image && (
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
              )}
              <i className={`fas ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;