import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="contact-page py-50">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '50px' }}>
          <aside>
            <h2 style={{ marginBottom: '30px' }}>Connect with Us</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ color: 'var(--primary)' }}><MapPin /></div>
                <div>
                  <h4 style={{ margin: 0 }}>Address</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>205 North Michigan Avenue, Suite 810 Chicago, 60601, USA</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ color: 'var(--primary)' }}><Phone /></div>
                <div>
                  <h4 style={{ margin: 0 }}>Phone</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>(+01) 234 567 89</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ color: 'var(--primary)' }}><Mail /></div>
                <div>
                  <h4 style={{ margin: 0 }}>Email</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)' }}>contact@grocen.com</p>
                </div>
              </div>
            </div>
          </aside>

          <main style={{ background: '#f8f9fa', padding: '50px', borderRadius: '15px' }}>
            <h2 style={{ marginBottom: '30px' }}>Send us a Message</h2>
            <form style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }} />
              <input type="text" placeholder="Subject" style={{ gridColumn: 'span 2', padding: '15px', borderRadius: '5px', border: '1px solid #ddd' }} />
              <textarea placeholder="Your Message" style={{ gridColumn: 'span 2', padding: '15px', borderRadius: '5px', border: '1px solid #ddd', minHeight: '150px' }}></textarea>
              <button className="btn-primary" style={{ gridColumn: 'span 2', justifyContent: 'center' }}>
                Send Message <Send size={18} />
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
