import React, { useState, useEffect } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : 'transparent'}>
      <nav>
        <div className="logo">
          <img 
            src="https://kbet-empire-builder.lovable.app/assets/kbet-logo-szd_atux.jpg" 
            alt="K.B.E.T. Logo"
            className="logo-img"
          />
        </div>
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
        <div className="header-contact">
        <a href="tel:9052064416" className="phone">
            9052064416
        </a>
        <a href="#contact" className="btn-contact">
            Contact Us
        </a>
        </div>
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;