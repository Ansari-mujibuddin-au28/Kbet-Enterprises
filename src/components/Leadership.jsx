import React from 'react';
import { leadership } from '../constants';
import { footer } from '../constants';

const Leadership = () => {
  return (
    <section id="leadership" className="leadership">
      <div className="container">
        <div className="section-label">Leadership</div>
        <h2>Visionary Leadership</h2>
        <div className="leadership-content">
          <div className="leadership-image">
            <img src={leadership.image} alt={leadership.name} />
          </div>
          <div className="leadership-text">
            <div className="quote-box">
              <p className="leadership-quote">
                "{leadership.quote}"
              </p>
              <p className="leadership-author">{leadership.name}</p>
              <p className="leadership-title">{leadership.title}</p>
              <div className="leadership-contact">
                  <p><i className="fas fa-map-marker-alt"></i> {footer.address}</p>
                            <p><i className="fas fa-phone"></i> {footer.phone1} | {footer.phone2}</p>
                            <p><i className="fas fa-envelope"></i> {footer.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;