import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/products') {
      setActiveSection('products');
      return;
    }

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
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      <div className="container">
        <div className="header-inner">
          <a href="#home" className="logo" onClick={closeMenu}>
            <img src="/icslogomain.png" alt="iCS (UK) LTD" className="logo-img" />
          </a>

          <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
            <button className="menu-close-btn" onClick={closeMenu}>
              <X size={24} />
            </button>
            <ul className="nav-links">
              <li><Link to="/" className={activeSection === 'home' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
              <li><Link to="/products" className={activeSection === 'products' ? 'active' : ''} onClick={closeMenu}>Products</Link></li>
              <li><a href="/#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About Us</a></li>
              <li><a href="/#services" className={activeSection === 'services' ? 'active' : ''} onClick={closeMenu}>Services</a></li>
              <li><a href="/#brands" className={activeSection === 'brands' ? 'active' : ''} onClick={closeMenu}>Our Brands</a></li>
              <li><a href="/#team" className={activeSection === 'team' ? 'active' : ''} onClick={closeMenu}>Our Team</a></li>
              <li><a href="/#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMenu}>Contact</a></li>
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

        .menu-toggle, .menu-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--secondary);
          display: none;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-header {
          display: none;
        }

        .menu-close-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--secondary);
          display: none;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .menu-close-btn:hover {
          color: var(--primary);
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.2);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 1500;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }

        .menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        @media (max-width: 1024px) {
          .nav-links { gap: 15px; }
          .nav-links a { font-size: 14px; }
          .header-search { width: 180px; }
        }

        @media (max-width: 991px) {
          .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f8f9fa;
            width: 45px;
            height: 45px;
            border-radius: 12px;
          }

          .nav-wrapper {
            position: absolute;
            top: 5px;
            right: 0;
            width: 180px;
            background: white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            border-radius: 12px;
            padding: 15px;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-5px);
            transition: 0.3s ease;
          }

          .nav-wrapper.open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .menu-close-btn {
            position: absolute;
            top: 5px;
            right: 5px;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nav-links {
            flex-direction: column;
            gap: 0;
            margin-top: 40px;
          }

          .nav-links a {
            font-size: 15px;
            padding: 12px 0;
            display: block;
            border-bottom: 1px solid #f5f5f5;
            transition: 0.2s;
          }

          .nav-links li:last-child a {
            border-bottom: none;
          }

          .nav-links a:hover, .nav-links a.active {
            background: transparent;
            color: var(--primary);
            padding-left: 5px;
          }

          .nav-links a.active::after {
            display: none;
          }

          .header-search {
            display: none;
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
