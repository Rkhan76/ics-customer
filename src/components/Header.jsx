import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, Heart, ShoppingCart, User, Menu, ChevronDown, Phone } from 'lucide-react';

const Header = ({ onOpenCart }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const location = useLocation();

  const categories = [
    { name: 'Milks and Dairies', icon: '🥛' },
    { name: 'Wines & Drinks', icon: '🍷' },
    { name: 'Clothing & beauty', icon: '👗' },
    { name: 'Fresh Seafood', icon: '🐟' },
    { name: 'Pet Foods', icon: '🐶' },
    { name: 'Fast food', icon: '🍔' },
    { name: 'Baking material', icon: '🍞' },
    { name: 'Vegetables', icon: '🥦' },
    { name: 'Fresh Fruit', icon: '🍎' },
  ];
  return (
    <header className="main-header">
      {/* Top Bar */}
      {/* <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-left">
              <a href="#">About Us</a>
              <span className="divider">|</span>
              <a href="#">My Account</a>
              <span className="divider">|</span>
              <a href="#">Wishlist</a>
              <span className="divider">|</span>
              <a href="#">Order Tracking</a>
            </div>
            <div className="top-center">
              <p>Supper Value Deals - Save with coupon <span className="highlight">GET20OFF</span></p>
            </div>
            <div className="top-right">
              <p>Need help? Call Us: <span className="highlight">+00 123-456-789</span></p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="middle-header">
        <div className="container">
          <div className="middle-header-inner">
            <Link to="/" className="logo">
              <h1 style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '40px' }}>🥗</span> Grocen
              </h1>
            </Link>

            <div className="search-box">
              <div className="category-select">
                All Categories <ChevronDown size={14} />
              </div>
              <input type="text" placeholder="Search for items..." />
              <button className="search-btn">
                <Search size={20} />
              </button>
            </div>

            <div className="header-actions">
              <Link to="/account" className="action-item">
                <User size={24} />
                <span>Account</span>
              </Link>
              <div className="action-item">
                <div className="icon-badge">
                  <Heart size={24} />
                  <span className="badge-count">0</span>
                </div>
                <span>Wishlist</span>
              </div>
              <div className="action-item" onClick={onOpenCart}>
                <div className="icon-badge">
                  <ShoppingCart size={24} />
                  <span className="badge-count">1</span>
                </div>
                <span>Cart</span>
                <span className="price">$219.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Hide on Account and Cart Page */}
      {location.pathname !== '/account' && location.pathname !== '/cart' && (
        <nav className="bottom-header">
          <div className="container">
            <div className="bottom-header-inner">
              <div className="category-dropdown-wrapper">
                <div className="all-categories-btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                  <Menu size={20} />
                  <span>Browse All Categories</span>
                  <ChevronDown size={14} className={isCategoryOpen ? 'rotate' : ''} />
                </div>

                {isCategoryOpen && (
                  <ul className="category-dropdown-menu">
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <Link to="/shop" onClick={() => setIsCategoryOpen(false)}>
                          <span className="cat-icon">{cat.icon}</span>
                          {cat.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <ul className="nav-links">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''}>Products</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
                <li><Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>Our Team</Link></li>
                <li><Link to="/offers" className={location.pathname === '/offers' ? 'active' : ''}>Hot Offers</Link></li>
                <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
              </ul>

              <div className="hotline">
                <Phone size={24} color="var(--primary)" />
                <div className="hotline-text">
                  <span className="number">1900 - 888</span>
                  <span className="label">24/7 Support Center</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
      
      <style dangerouslySetInnerHTML={{ __html: `
        .main-header {
          border-bottom: 1px solid var(--border-color);
        }
        .top-bar {
          border-bottom: 1px solid var(--border-color);
          padding: 8px 0;
          font-size: 13px;
          color: var(--text-muted);
        }
        .top-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-left {
          display: flex;
          gap: 12px;
        }
        .divider {
          color: #ddd;
        }
        .highlight {
          color: var(--primary);
          font-weight: 600;
        }

        .middle-header {
          padding: 30px 0;
        }
        .middle-header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }
        .search-box {
          flex: 1;
          max-width: 700px;
          height: 50px;
          border: 2px solid #BCE3C9;
          border-radius: 5px;
          display: flex;
          align-items: center;
          background: white;
        }
        .category-select {
          padding: 0 20px;
          border-right: 1px solid #ddd;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }
        .search-box input {
          flex: 1;
          border: none;
          padding: 0 20px;
          outline: none;
          font-size: 14px;
        }
        .search-btn {
          padding: 0 20px;
          color: var(--text-muted);
        }

        .header-actions {
          display: flex;
          gap: 25px;
        }
        .action-item {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }
        .icon-badge {
          position: relative;
        }
        .badge-count {
          position: absolute;
          top: -5px;
          right: -5px;
          background: var(--primary);
          color: white;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .price {
          color: var(--primary);
          font-weight: 700;
        }

        .bottom-header {
          padding: 10px 0;
        }
        .bottom-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .all-categories-btn {
          background: var(--primary);
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links a {
          font-weight: 700;
          font-family: 'Quicksand';
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-links a:hover, .nav-links a.active {
          color: var(--primary);
        }
        .hotline {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hotline-text {
          display: flex;
          flex-direction: column;
        }
        .hotline .number {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary);
          line-height:1;
        }
        .hotline .label {
          font-size: 12px;
          color: var(--text-muted);
        }

        .category-dropdown-wrapper {
          position: relative;
          z-index: 1000;
        }
        .category-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 250px;
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 10px;
          box-shadow: var(--shadow-md);
          padding: 15px 0;
          margin-top: 10px;
          animation: slideUp 0.3s ease;
        }
        .category-dropdown-menu li a {
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          font-weight: 600;
          font-size: 14px;
          font-family: 'Quicksand';
          color: var(--text-main);
        }
        .category-dropdown-menu li a:hover {
          background: #F2FCE4;
          color: var(--primary);
          padding-left: 25px;
        }
        .cat-icon {
          font-size: 18px;
          width: 25px;
          display: inline-block;
        }
        .rotate {
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` }} />
    </header>
  );
};

export default Header;
