import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="footer">
      <div className="container">
          <div className="footer-top">
            <div className="footer-col about">
              <a href="#home">
                <img src="/icslogomain.png" alt="iCS (UK) LTD" style={{ height: '50px', marginBottom: '20px' }} />
              </a>
              <p className="description">iCS (UK) LTD is a premier provider of corporate technical solutions, infrastructure management, and business integration services. We empower businesses with cutting-edge technology and sustainable infrastructure.</p>
              <ul className="contact-info">
                <li><MapPin size={18} color="var(--primary)" /> <strong>Address:</strong> 205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</li>
                <li><Phone size={18} color="var(--primary)" /> <strong>Call Us:</strong> (+91) - 540-025-124553</li>
                <li><Mail size={18} color="var(--primary)" /> <strong>Email:</strong> contact@ics-uk.ltd</li>
                <li><Clock size={18} color="var(--primary)" /> <strong>Hours:</strong> 09:00 - 18:00, Mon - Fri</li>
              </ul>
            </div>
            
            <div className="footer-col links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col corporate">
              <h3>Corporate</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Business Solutions</a></li>
                <li><a href="#">Partner Program</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          </div>

        <div className="footer-bottom">
          <p>© 2024, iCS (UK) LTD. All rights reserved.</p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Youtube size={20} /></a>
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
          grid-template-columns: 2fr 1fr 1fr;
          gap: 50px;
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
          max-width: 450px;
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding: 30px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
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
          transition: 0.3s;
        }
        .social-links a:hover {
          transform: translateY(-3px);
          background: #2ea36d;
        }

        @media (max-width: 991px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
          }
          .footer-col.about {
            grid-column: span 2;
          }
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .footer-col.about {
            grid-column: span 1;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      ` }} />
    </footer>
  );
};

export default Footer;
