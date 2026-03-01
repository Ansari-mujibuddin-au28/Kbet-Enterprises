import React from 'react';
import { footer } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
             <div className="logo">
          <img 
            src="https://kbet-empire-builder.lovable.app/assets/kbet-logo-szd_atux.jpg" 
            alt="K.B.E.T. Logo"
            className="logo-img"
          />
        </div>
            <h3>{footer.logo}</h3>
            <p className="tagline">{footer.tagline}</p>
            <p>{footer.description}</p>
            <p><i className="fas fa-map-marker-alt"></i> {footer.address}</p>
            <p><i className="fas fa-phone"></i> {footer.phone1} | {footer.phone2}</p>
            <p><i className="fas fa-envelope"></i> {footer.email}</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {footer.quickLinks.map((link, index) => (
                <li key={index}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-services">
            <h4>Our Services</h4>
            <ul>
              {footer.servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {currentYear} K.B.E.T. Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;