import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="footer">
      <div className="container">
        {location.pathname !== '/account' && location.pathname !== '/cart' && (
          <div className="footer-top">
            <div className="footer-col about">
              <Link to="/">
                <h2 style={{ color: 'var(--primary)', marginBottom: '20px' }}>🥗 Grocen</h2>
              </Link>
              <p className="description">Awesome grocery store website template</p>
              <ul className="contact-info">
                <li><MapPin size={18} color="var(--primary)" /> <strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</li>
                <li><Phone size={18} color="var(--primary)" /> <strong>Call Us:</strong> (+91) - 540-025-124553</li>
                <li><Mail size={18} color="var(--primary)" /> <strong>Email:</strong> sale@grocen.com</li>
                <li><Clock size={18} color="var(--primary)" /> <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Support Center</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Account</h3>
              <ul>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">View Cart</a></li>
                <li><a href="#">My Wishlist</a></li>
                <li><a href="#">Track My Order</a></li>
                <li><a href="#">Help Ticket</a></li>
                <li><a href="#">Shipping Details</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Corporate</h3>
              <ul>
                <li><a href="#">Become a Vendor</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Farm Business</a></li>
                <li><a href="#">Farm Careers</a></li>
                <li><a href="#">Our Suppliers</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>

            <div className="footer-col newsletter">
              <h3>Install App</h3>
              <p>From App Store or Google Play</p>
              <div className="app-buttons">
                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/app-store.jpg" alt="App Store" />
                <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/google-play.jpg" alt="Google Play" />
              </div>
              <p>Secured Payment Gateways</p>
              <img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/payment-method.png" alt="Payment Methods" />
            </div>
          </div>
        )}

        <div className="footer-bottom">
          <p>© 2024, Grocen - HTML Ecommerce Template. All rights reserved</p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
          </div>
          <div className="hotline">
             <div className="hotline-icon"><Phone size={24} color="var(--primary)" /></div>
             <div className="hotline-text">
               <span className="num">1900 - 6666</span>
               <span className="lab">Working 8:00 - 22:00</span>
             </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          padding-top: 50px;
          background: white;
          border-top: 1px solid var(--border-color);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1.5fr;
          gap: 30px;
          margin-bottom: 50px;
        }
        .footer-col h3 {
          margin-bottom: 25px;
          font-size: 20px;
        }
        .footer-col ul li {
          margin-bottom: 12px;
          font-size: 14px;
        }
        .footer-col ul li a:hover {
          color: var(--primary);
          padding-left: 5px;
        }
        .contact-info li {
          display: flex;
          gap: 10px;
          margin-bottom: 15px !important;
        }
        .description {
          margin-bottom: 20px;
          color: var(--text-muted);
        }
        .app-buttons {
          display: flex;
          gap: 10px;
          margin: 15px 0 25px;
        }
        .app-buttons img {
          height: 40px;
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding: 30px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .social-links {
          display: flex;
          gap: 15px;
        }
        .social-links a {
          background: var(--primary);
          color: white;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-bottom .hotline {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-bottom .hotline .num {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary);
          display: block;
        }
        .footer-bottom .hotline .lab {
          font-size: 12px;
          color: var(--text-muted);
        }
      ` }} />
    </footer>
  );
};

export default Footer;
