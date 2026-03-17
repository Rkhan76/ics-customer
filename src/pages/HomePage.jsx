import React from 'react';
import { ArrowRight, Send, Mail, Phone, MapPin } from 'lucide-react';

const HomePage = () => {
  const team = [
    { name: 'Patric Adams', role: 'CEO & Co-founder', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Dilan Stein', role: 'Head Engineer', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Seth Boyle', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Robert Fox', role: 'Store Manager', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop' },
  ];

  const services = [
    { title: 'Best Prices & Offers', desc: 'We provide the most competitive prices in the market with exclusive seasonal offers.', icon: '💰', color: '#F2FCE4' },
    { title: 'Wide Assortment', desc: 'A vast collection of products ranging from fresh produce to daily essentials.', icon: '🍇', color: '#FFFCEB' },
    { title: 'Free Delivery', desc: 'Enjoy free doorstep delivery on all orders above a certain threshold.', icon: '🚚', color: '#ECFFEC' },
    { title: '100% Satisfaction', desc: 'Your satisfaction is our top priority. We guarantee quality in every delivery.', icon: '⭐', color: '#FEEFEA' },
    { title: 'Daily Deals', desc: 'Fresh new deals every day on your favorite categories and products.', icon: '🏷️', color: '#FFF3EB' },
    { title: 'Easy Returns', desc: 'Not satisfied with a product? Return it within 24 hours for a full refund.', icon: '🔄', color: '#FFF3FF' },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-banner">
            <div className="hero-content">
              <h1>Fresh Vegetables <br /> Big discount</h1>
              <p>Save up to 50% off on your first order</p>
              <div className="newsletter-form">
                <Send size={20} color="var(--text-muted)" />
                <input type="text" placeholder="Your email address" />
                <button className="btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ICS Section */}
      <section className="why-choose-section py-80" style={{ background: '#F8F9FA', marginTop: '40px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '20px' }}>Why Choose ICS?</h2>
            <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '18px', color: '#333', lineHeight: '1.6' }}>
              With experience passed through three generations, the team at ICS recognise consistency, quality products, innovation, value and customer service are some of the key ingredients to any successful foodservice supplier.
            </p>
          </div>
          
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {/* Customer Service */}
            <div className="why-card" style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop" alt="Customer Service" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Customer Service</h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.8' }}>
                  Our dedicated customer service team are on hand to help. With extensive product knowledge across our ranges, they can assist with finding the right product for your business and budget. We pride ourselves with delivering customer satisfaction but on rare occasions where your expectations haven't been met, our customer service team will work with you to find a resolution.
                </p>
              </div>
            </div>

            {/* Product Ranges */}
            <div className="why-card" style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" alt="Product Ranges" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>Product Ranges</h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.8' }}>
                  At ICS we stock more than 4000 catering and packaging products delivering a complete catering solution to the food industry. Our expansive knowledge of the catering sector has enabled us to develop and curate our own portfolio of more than 600 tried and tested products, which we trade under the Prima, Double Lucky, Texas Ranger...
                </p>
              </div>
            </div>

            {/* UK Coverage */}
            <div className="why-card" style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2050&auto=format&fit=crop" alt="UK Coverage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '20px' }}>UK Coverage</h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.8' }}>
                  Our reliable distribution network consists of more than 25 of our own temperature-controlled trucks in addition to our trusted haulage partners that deliver throughout the UK and Europe. Our experienced team can also assist with exporting goods. We have flexible delivery options ensuring our customers always have what they need, when they need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-80">
        <div className="container">
          <div className="row align-items-center" style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <img src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-1.png" alt="About Us" style={{ width: '100%', borderRadius: '30px' }} />
            </div>
            <div style={{ flex: 1 }}>
              <span className="section-subtitle">Since 2024</span>
              <h2 style={{ fontSize: '48px', marginBottom: '30px' }}>Excellence in Corporate Solutions</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                iCS (UK) LTD is committed to providing top-tier technical and infrastructure support to businesses globally.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
                Our team works tirelessly to ensure that every solution we provide meets the highest standards of efficiency and modern technical requirements. We believe in a world where technology empowers business growth.
              </p>
              <button className="btn-primary">Learn More <ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section py-80" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px' }}>Our Core Services</h2>
            <p style={{ color: 'var(--text-muted)' }}>Tailored solutions for a healthier lifestyle.</p>
          </div>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', rowGap: '50px' }}>
            {services.map((service, i) => (
              <div key={i} className="service-card" style={{ padding: '40px', background: 'white', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '50px', marginBottom: '20px' }}>{service.icon}</div>
                <h3 style={{ marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section id="brands" className="brands-section py-80" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '800', textTransform: 'uppercase', marginBottom: '20px' }}>Our Featured Brands</h2>
            <p style={{ color: 'var(--text-muted)' }}>Quality brands trusted by thousands of businesses across the UK.</p>
          </div>
          <div className="brands-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '30px', alignItems: 'center' }}>
            {[
              { name: 'Prima', img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200&h=100&auto=format&fit=crop' },
              { name: 'Double Lucky', img: 'https://images.unsplash.com/photo-1516876437184-593fda40c7ce?q=80&w=200&h=100&auto=format&fit=crop' },
              { name: 'Texas Ranger', img: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=200&h=100&auto=format&fit=crop' },
              { name: 'Chef Pro', img: 'https://images.unsplash.com/photo-1614850523296-e8c041de4398?q=80&w=200&h=100&auto=format&fit=crop' },
              { name: 'Nature Fresh', img: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=200&h=100&auto=format&fit=crop' }
            ].map((brand, i) => (
              <div key={i} className="brand-item" style={{ 
                padding: '30px', 
                background: '#f8f9fa', 
                borderRadius: '15px', 
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <img src={brand.img} alt={brand.name} style={{ width: '100%', height: 'auto', filter: 'grayscale(100%)', opacity: '0.6', transition: 'all 0.3s ease' }} />
                <h4 style={{ marginTop: '15px', color: '#666' }}>{brand.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section py-80">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px' }}>Our Leadership Team</h2>
            <p style={{ color: 'var(--text-muted)' }}>The visionaries behind iCS (UK) LTD's mission.</p>
          </div>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
            {team.map((member, i) => (
              <div key={i} className="team-member" style={{ textAlign: 'center' }}>
                <div className="member-image-wrapper" style={{ overflow: 'hidden', borderRadius: '20px', marginBottom: '20px', height: '350px' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                </div>
                <h3>{member.name}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: '600' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-80" style={{ background: '#f4fbf4' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>
            <div>
              <span className="section-subtitle">Get In Touch</span>
              <h2 style={{ fontSize: '40px', marginBottom: '30px' }}>Let's Talk About Your Health</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="contact-icon"><MapPin /></div>
                  <div>
                    <h4 style={{ margin: 0 }}>Corporate Office</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>205 N Michigan Ave, Suite 810, Chicago, IL 60601</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="contact-icon"><Phone /></div>
                  <div>
                    <h4 style={{ margin: 0 }}>Call Us</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>(+01) 234 567 89</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div className="contact-icon"><Mail /></div>
                  <div>
                    <h4 style={{ margin: 0 }}>Email Us</h4>
                    <p style={{ margin: 0, color: 'var(--text-muted)' }}>contact@grocen.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: 'white', padding: '50px', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <h2 style={{ marginBottom: '30px' }}>Send a Message</h2>
              <form style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <input type="text" placeholder="Full Name" className="form-input" />
                <input type="email" placeholder="Email Address" className="form-input" />
                <textarea placeholder="Tell us how we can help..." style={{ gridColumn: 'span 2', minHeight: '150px' }} className="form-input"></textarea>
                <button className="btn-primary" style={{ gridColumn: 'span 2', padding: '20px', fontSize: '18px', fontWeight: '700' }}>
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .py-80 { padding: 80px 0; }
        .section-subtitle {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 10px;
        }

        .hero-section { margin-top: 30px; }
        .hero-banner {
          height: 500px;
          background: #FFF9E5 url('/hero_apples.png') no-repeat right center;
          background-size: contain;
          border-radius: 40px;
          display: flex;
          align-items: center;
          padding: 0 100px;
        }
        .hero-content h1 {
          font-size: 72px;
          margin-bottom: 25px;
          line-height: 1.1;
          color: #253D4E;
          text-shadow: 1px 1px 2px rgba(255,255,255,0.5);
        }
        .hero-content p {
          font-size: 32px;
          color: #253D4E;
          margin-bottom: 45px;
          text-shadow: none;
        }
        .newsletter-form {
          background: white;
          width: 500px;
          height: 70px;
          border-radius: 35px;
          display: flex;
          align-items: center;
          padding: 0 5px 0 25px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        .newsletter-form input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 20px;
          font-size: 18px;
        }
        .newsletter-form .btn-primary {
          border-radius: 35px;
          height: 60px;
          padding: 0 40px;
        }

        .brand-item:hover {
          background: #fff;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transform: translateY(-5px);
        }
        .brand-item:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }

        .team-member:hover img {
          transform: scale(1.1);
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: #f1f8f1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--primary);
        }

        .form-input {
          padding: 18px 25px;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          font-size: 16px;
          font-family: 'Quicksand', sans-serif;
          transition: all 0.3s;
          outline: none;
          background: #f8fafc;
        }
        .form-input::placeholder {
          font-family: 'Quicksand', sans-serif;
          color: #94a3b8;
          font-weight: 500;
        }
        .form-input:focus {
          border-color: var(--primary);
          background: white;
          box-shadow: 0 0 0 4px rgba(62, 189, 147, 0.1);
        }
      ` }} />
    </div>
  );
};

export default HomePage;
