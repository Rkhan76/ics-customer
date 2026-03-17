import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'brands', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for sticky header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="main-header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="/icslogomain.png" alt="iCS (UK) LTD" className="logo-img" />
          </Link>

          <nav className="nav-wrapper">
            <ul className="nav-links">
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About Us</a></li>
              <li><a href="#services" className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
              <li><a href="#brands" className={activeSection === 'brands' ? 'active' : ''}>Our Brands</a></li>
              <li><a href="#team" className={activeSection === 'team' ? 'active' : ''}>Our Team</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-cta">
            <a href="#contact" className="btn-primary">Get Consultation</a>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .main-header {
          background: white;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 15px 0;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .logo-img {
          height: 50px;
          display: block;
        }

        .nav-wrapper {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .nav-links a {
          font-weight: 700;
          font-family: 'Quicksand';
          font-size: 16px;
          color: var(--secondary);
          transition: var(--transition-fast);
          position: relative;
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--primary);
        }

        .nav-links a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 20px;
          height: 2px;
          background: var(--primary);
        }

        .header-cta .btn-primary {
          padding: 12px 25px;
          border-radius: 8px;
          font-size: 15px;
        }

        @media (max-width: 1024px) {
          .nav-links { gap: 15px; }
          .nav-links a { font-size: 14px; }
        }

        @media (max-width: 992px) {
          .nav-wrapper { display: none; }
        }
      ` }} />
    </header>
  );
};

export default Header;
