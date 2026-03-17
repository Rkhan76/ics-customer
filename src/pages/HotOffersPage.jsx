import React from 'react';
import ProductCard from '../components/ProductCard';

const HotOffersPage = () => {
    const products = [
        { id: 101, title: 'Organic Broccoli - Fresh Pack', category: 'Vegetables', price: 5.85, oldPrice: 8.8, rating: 5, badge: 'Hot', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg' },
        { id: 102, title: 'Fresh Strawberries - 500g', category: 'Fruits', price: 12.85, oldPrice: 15.8, rating: 5, badge: 'Sale', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg' },
        { id: 103, title: 'Premium Greek Yogurt', category: 'Dairy', price: 3.85, oldPrice: 5.8, rating: 4, badge: 'Hot', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-3-1.jpg' },
        { id: 104, title: 'Almond Milk - Unsweeneted', category: 'Dairy', price: 4.85, oldPrice: 6.8, rating: 5, badge: 'Sale', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-4-1.jpg' },
      ];

  return (
    <div className="hot-offers-page py-50">
      <div className="container">
        <div style={{ background: 'var(--danger)', color: 'white', padding: '40px', borderRadius: '15px', textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ color: 'white', fontSize: '36px' }}>🔥 Limited Time Hot Offers!</h2>
          <p>Get up to 70% off on selected items. Offer ends soon!</p>
        </div>

        <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }}>
            {products.map(p => (
                   <ProductCard key={p.id} product={p} />
            ))}
             {products.map(p => (
                   <ProductCard key={p.id + 50} product={{...p, id: p.id + 50}} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HotOffersPage;
