import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      // Track scroll for shadow
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="/icslogomain.png" alt="iCS (UK) LTD" className="logo-img" />
          </Link>

          <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
            <button className="menu-close" onClick={closeMenu}>
              <X size={24} />
            </button>
            <ul className="nav-links">
              <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About Us</a></li>
              <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={closeMenu}>Services</a></li>
              <li><a href="#brands" className={activeSection === 'brands' ? 'active' : ''} onClick={closeMenu}>Our Brands</a></li>
              <li><a href="#team" className={activeSection === 'team' ? 'active' : ''} onClick={closeMenu}>Our Team</a></li>
              <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>

          <div className="header-right">
            <div className="header-search">
              <input type="text" placeholder="Search..." />
              <Search size={18} className="search-icon" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .main-header {
          background: white;
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 15px 0;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .main-header.scrolled {
          box-shadow: var(--shadow-sm);
          border-bottom: 1px solid #eee;
          padding: 12px 0;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
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

        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .header-search {
          position: relative;
          display: flex;
          align-items: center;
          background: #f4f4f4;
          border-radius: 30px;
          padding: 5px 15px;
          width: 250px;
        }

        .header-search input {
          border: none;
          background: transparent;
          outline: none;
          padding: 8px 10px;
          width: 100%;
          font-family: 'Quicksand';
          font-size: 14px;
        }

        .search-icon {
          color: var(--text-muted);
        }

        .menu-toggle, .menu-close {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--secondary);
        }

        @media (max-width: 1024px) {
          .nav-links { gap: 15px; }
          .nav-links a { font-size: 14px; }
          .header-search { width: 180px; }
        }

        @media (max-width: 991px) {
          .menu-toggle {
            display: block;
          }

          .nav-wrapper {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: white;
            box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            transition: 0.4s ease;
            flex-direction: column;
            justify-content: flex-start;
            padding: 80px 40px;
            z-index: 2000;
          }

          .nav-wrapper.open {
            right: 0;
          }

          .menu-close {
            display: block;
            position: absolute;
            top: 25px;
            right: 25px;
          }

          .nav-links {
            flex-direction: column;
            gap: 25px;
          }

          .nav-links a {
            font-size: 18px;
          }

          .header-search {
            display: none; /* Hide search on small mobile if it crowds the logo */
          }
        }

        @media (max-width: 576px) {
          .logo-img { height: 40px; }
          .header-search { display: none; }
        }
      ` }} />
    </header>
  );
};

export default Header;
