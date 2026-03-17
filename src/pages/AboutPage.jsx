import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page py-50">
      <div className="container">
        <div className="row align-items-center" style={{ display: 'flex', gap: '50px', alignItems: 'center', marginBottom: '80px' }}>
          <div style={{ flex: 1 }}>
            <img src="https://nest-frontend-v6.netlify.app/assets/imgs/page/about-1.png" alt="About Us" style={{ width: '100%', borderRadius: '15px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '48px', marginBottom: '30px' }}>Welcome to Grocen</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              We started our journey in 2024 with a simple mission: to provide the freshest, organic produce to our community while supporting local farmers.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              Our team works tirelessly to ensure that every item on our shelves meets the highest standards of quality and sustainability. From farm to fork, we prioritize transparency and excellence in everything we do.
            </p>
          </div>
        </div>

        <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <div className="feature-card" style={{ padding: '40px', background: '#F2FCE4', borderRadius: '15px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '15px' }}>Best Prices & Offers</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          </div>
          <div className="feature-card" style={{ padding: '40px', background: '#FFFCEB', borderRadius: '15px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '15px' }}>Wide Assortment</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          </div>
          <div className="feature-card" style={{ padding: '40px', background: '#ECFFEC', borderRadius: '15px', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '15px' }}>Free Delivery</h3>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
