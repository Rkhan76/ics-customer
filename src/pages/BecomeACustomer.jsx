import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Building, ChevronDown, MapPin, Edit3, Send } from 'lucide-react';

const BecomeACustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    postcode: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add submission logic here
  };

  return (
    <div className="become-customer-page">
      {/* Hero Section */}
      <section className="page-hero py-40" style={{ background: '#F2FCE4', marginTop: '20px' }}>
        <div className="container">
          <h1 style={{ fontSize: '36px', color: 'var(--secondary)', marginBottom: '10px' }}>Become A Customer</h1>
          <nav className="breadcrumb" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--primary)', fontWeight: '700' }}>Home</Link> 
            <span style={{ margin: '0 10px' }}>/</span> 
            <span style={{ color: 'var(--secondary)' }}>Become A Customer</span>
          </nav>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="hero-description mt-40">
        <div className="container">
          <p className="hero-subtitle">
            Thank you for choosing ICS UK Ltd. We look forward to working with you by delivering quality, 
            consistently and competitively. Please complete the form below to begin your customer journey with us.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section py-60">
        <div className="container">
          <div className="form-card">
            <div className="card-content">
              <h2>STAY ON TOP OF YOUR GAME WITH RELIABLE FOODSERVICE</h2>
              <p>
                At ICS, we are committed to providing our customers with fast, reliable, and accurate goods and services. 
                Moreover, we strive to meet your demands and provide you with the supplies you need to stay on top of your game.
              </p>
              <p className="contact-note">
                Looking for further information about our products and services? Fill out the form below and we will be in touch! 
                You can also contact us via our email: <a href="mailto:support@icsukltd.co.uk">support@icsukltd.co.uk</a>
              </p>

              <h2 className="mt-40">LEARN MORE ABOUT HOW WE CAN HELP YOUR BUSINESS</h2>
              <p>
                Fill out the form below to get in touch with one of our team members. We are happy to assist you with any 
                inquiries you may have and make the process of getting started with ICS as simple as possible.
              </p>

              <form onSubmit={handleSubmit} className="customer-form mt-40">
                <div className="form-grid">
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Enter Your Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required 
                    />
                    <User className="input-icon" size={18} />
                  </div>
                  <div className="input-group">
                    <input 
                      type="email" 
                      placeholder="Enter Email Address" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                    <Mail className="input-icon" size={18} />
                  </div>
                  <div className="input-group">
                    <input 
                      type="tel" 
                      placeholder="Enter Phone Number" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required 
                    />
                    <Phone className="input-icon" size={18} />
                  </div>
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Enter Your Company Name" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required 
                    />
                    <Building className="input-icon" size={18} />
                  </div>
                  <div className="input-group">
                    <select 
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                      required
                    >
                      <option value="" disabled>Select Enquiry Type</option>
                      <option value="Find out more/make initial inquiries">Find out more/make initial inquiries</option>
                      <option value="Place an order">Place an order</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="input-icon" size={18} />
                  </div>
                  <div className="input-group">
                    <input 
                      type="text" 
                      placeholder="Enter Your Postcode" 
                      value={formData.postcode}
                      onChange={(e) => setFormData({...formData, postcode: e.target.value})}
                      required 
                    />
                    <MapPin className="input-icon" size={18} />
                  </div>
                </div>

                <div className="input-group full-width mt-20">
                  <textarea 
                    placeholder="Enter Message" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                  <Edit3 className="input-icon" size={18} />
                </div>

                <button type="submit" className="btn-submit mt-30">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .become-customer-page {
          background: #fff;
        }
        
        .py-40 { padding: 40px 0; }
        .py-60 { padding: 60px 0; }
        
        .hero-subtitle {
          max-width: 900px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.6;
          text-align: center;
          color: var(--text-muted);
        }
        
        .form-card {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 60px;
          border-radius: 20px;
          border: 1px solid #f1f1f1;
          box-shadow: 0 15px 50px rgba(0,0,0,0.05);
        }
        
        .card-content h2 {
          font-size: 18px;
          font-weight: 800;
          color: var(--secondary);
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        
        .card-content p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 15px;
        }
        
        .contact-note a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 700;
        }
        
        .contact-note a:hover {
          text-decoration: underline;
        }
        
        .mt-40 { margin-top: 40px; }
        .mt-20 { margin-top: 20px; }
        .mt-30 { margin-top: 30px; }
        
        .customer-form .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .input-group {
          position: relative;
        }
        
        .input-group.full-width {
          grid-column: span 2;
        }
        
        .input-group input, 
        .input-group select, 
        .input-group textarea {
          width: 100%;
          padding: 15px 45px 15px 15px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          font-family: 'Quicksand', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.3s;
          background: #f8fafc;
        }
        
        .input-group textarea {
          min-height: 150px;
          resize: vertical;
        }
        
        .input-group input:focus, 
        .input-group select:focus, 
        .input-group textarea:focus {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 4px rgba(62, 189, 147, 0.1);
        }
        
        .input-icon {
          position: absolute;
          right: 15px;
          top: 15px;
          color: var(--primary);
        }
        
        .input-group textarea + .input-icon {
          top: 15px;
        }
        
        .input-group select {
          appearance: none;
          cursor: pointer;
        }
        
        .btn-submit {
          background: var(--primary);
          color: white;
          border: none;
          padding: 15px 40px;
          font-weight: 800;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s;
          font-size: 14px;
        }
        
        .btn-submit:hover {
          background: var(--primary-hover);
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          .input-group.full-width {
            grid-column: span 1;
          }
          .form-card {
            padding: 30px;
          }
          .page-hero h1 {
            font-size: 32px;
          }
        }
      ` }} />
    </div>
  );
};

export default BecomeACustomer;
