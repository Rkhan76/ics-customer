import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Home, ShoppingBag, UserPlus, Phone, MoveRight } from 'lucide-react';

const NotFound = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <div className="modern-404">
      <div className="container">
        <div className="not-found-wrapper">
          {/* Left Side: Large Graphic Element */}
          <div className="graphic-side">
            <div className="massive-404">404</div>
            <div className="graphic-backdrop"></div>
          </div>

          {/* Right Side: Content & Actions */}
          <div className="content-side">
            <div className="status-label">Error 404</div>
            <h1>Lost in the right place?</h1>
            <p className="main-desc">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to track.
            </p>

            <form className="search-redirect" onSubmit={handleSearch}>
              <Search size={22} className="search-icon" />
              <input 
                type="text" 
                placeholder="What were you looking for?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit">Search</button>
            </form>

            <div className="helpful-sections">
              <h3>Helpful Links</h3>
              <div className="links-grid">
                <Link to="/" className="link-card">
                  <div className="icon-box"><Home size={20} /></div>
                  <div className="link-text">
                    <strong>Homepage</strong>
                    <span>Back to the start</span>
                  </div>
                  <MoveRight size={16} className="arrow" />
                </Link>
                <Link to="/products" className="link-card">
                  <div className="icon-box"><ShoppingBag size={20} /></div>
                  <div className="link-text">
                    <strong>Our Products</strong>
                    <span>Browse categories</span>
                  </div>
                  <MoveRight size={16} className="arrow" />
                </Link>
                <Link to="/become-a-customer" className="link-card">
                  <div className="icon-box"><UserPlus size={20} /></div>
                  <div className="link-text">
                    <strong>Become a Customer</strong>
                    <span>Join our network</span>
                  </div>
                  <MoveRight size={16} className="arrow" />
                </Link>
                <Link to="/#contact" className="link-card">
                  <div className="icon-box"><Phone size={20} /></div>
                  <div className="link-text">
                    <strong>Contact Us</strong>
                    <span>Get direct help</span>
                  </div>
                  <MoveRight size={16} className="arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .modern-404 {
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          background: #fff;
          padding: 60px 0;
          overflow: hidden;
        }

        .not-found-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .graphic-side {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .massive-404 {
          font-size: 280px;
          font-weight: 800;
          color: rgba(59, 183, 126, 0.05); /* Slight green fill */
          -webkit-text-stroke: 2px var(--primary); /* Stronger primary color outline */
          line-height: 1;
          letter-spacing: -10px;
          user-select: none;
          position: relative;
          z-index: 2;
          text-shadow: 10px 10px 30px rgba(0,0,0,0.05);
        }

        .graphic-backdrop {
          position: absolute;
          width: 400px;
          height: 400px;
          background: #3BB77E;
          opacity: 0.1;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          animation: shapeShift 10s ease-in-out infinite;
          z-index: 1;
        }

        @keyframes shapeShift {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          50% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        .status-label {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 14px;
          margin-bottom: 20px;
          display: inline-block;
          padding: 4px 12px;
          background: #DEF9EC;
          border-radius: 8px;
        }

        .content-side h1 {
          font-size: 56px;
          line-height: 1.2;
          color: var(--secondary);
          margin-bottom: 24px;
        }

        .main-desc {
          font-size: 18px;
          color: var(--text-muted);
          margin-bottom: 40px;
          max-width: 480px;
        }

        .search-redirect {
          position: relative;
          display: flex;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 8px;
          border-radius: 16px;
          margin-bottom: 50px;
          max-width: 500px;
          transition: border-color 0.3s;
        }

        .search-redirect:focus-within {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 10px 20px rgba(0,0,0,0.03);
        }

        .search-redirect .search-icon {
          margin-left: 15px;
          color: var(--text-muted);
        }

        .search-redirect input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 12px 15px;
          font-size: 16px;
          outline: none;
          font-family: inherit;
        }

        .search-redirect button {
          background: var(--primary);
          color: white;
          padding: 12px 25px;
          border-radius: 12px;
          font-weight: 700;
          transition: background 0.3s;
        }

        .search-redirect button:hover {
          background: var(--primary-hover);
        }

        .helpful-sections h3 {
          font-size: 20px;
          margin-bottom: 25px;
          color: var(--secondary);
        }

        .links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .link-card {
          display: flex;
          align-items: center;
          padding: 16px;
          background: #fff;
          border: 1px solid #f1f1f1;
          border-radius: 16px;
          transition: all 0.2s;
          text-decoration: none;
        }

        .link-card:hover {
          border-color: var(--primary);
          background: #fdfdfd;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.03);
        }

        .icon-box {
          width: 44px;
          height: 44px;
          background: #f8fafc;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          color: var(--primary);
        }

        .link-text {
          flex: 1;
        }

        .link-text strong {
          display: block;
          font-size: 15px;
          color: var(--secondary);
          margin-bottom: 2px;
        }

        .link-text span {
          display: block;
          font-size: 12px;
          color: var(--text-muted);
        }

        .link-card .arrow {
          opacity: 0;
          color: var(--primary);
          transition: 0.2s;
        }

        .link-card:hover .arrow {
          opacity: 1;
          transform: translateX(5px);
        }

        @media (max-width: 1200px) {
          .massive-404 { font-size: 200px; }
          .graphic-backdrop { width: 300px; height: 300px; }
        }

        @media (max-width: 991px) {
          .not-found-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .graphic-side { order: 1; }
          .content-side { order: 2; display: flex; flex-direction: column; align-items: center; }
          .search-redirect { width: 100%; }
          .massive-404 { font-size: 180px; }
        }

        @media (max-width: 576px) {
          .content-side h1 { font-size: 40px; }
          .links-grid { grid-template-columns: 1fr; width: 100%; }
          .massive-404 { font-size: 120px; }
        }
      ` }} />
    </div>
  );
};

export default NotFound;
