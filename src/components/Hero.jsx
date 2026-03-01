import React from 'react';
import { heroContent } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroContent.backgroundImage})` }}>
      <div className="container">
        <span className="pre-title">{heroContent.preTitle}</span>
        <h1>{heroContent.title}</h1>
        <p>{heroContent.subtitle}</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">Contact Us</a>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </div>
      </div>
      <div className="scroll-indicator">SCROLL</div>
    </section>
  );
};

export default Hero;