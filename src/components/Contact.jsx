import React from 'react';
import { contact } from '../constants';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Demo)');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-label">Contact Us</div>
        <h2>Get In Touch</h2>
        <p className="section-description">
          Ready to start your project? Contact us today and let's build something extraordinary together.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <h4>Our Address</h4>
            <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
            
            <h4>Phone Numbers</h4>
            <p><i className="fas fa-phone"></i> {contact.phone1}</p>
            <p><i className="fas fa-phone"></i> {contact.phone2}</p>
            
            <h4>Email Address</h4>
            <p><i className="fas fa-envelope"></i> {contact.email}</p>
            
            <div className="map-container">
              <iframe
                src={contact.mapEmbed}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="map"
              ></iframe>
              <a href="#" className="map-link">View larger map</a>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;