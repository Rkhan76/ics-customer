import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Send } from 'lucide-react';

const HomePage = () => {
  const categories = [
    { name: 'Milks and Dairies', items: 26, color: '#F2FCE4' },
    { name: 'Wines & Drinks', items: 28, color: '#FFFCEB' },
    { name: 'Clothing & beauty', items: 14, color: '#ECFFEC' },
    { name: 'Fresh Seafood', items: 54, color: '#FEEFEA' },
    { name: 'Pet Foods', items: 56, color: '#FFF3EB' },
    { name: 'Fast food', items: 72, color: '#FFF3FF' },
    { name: 'Baking material', items: 36, color: '#F2FCE4' },
    { name: 'Vegetables', items: 13, color: '#FEEFEA' },
    { name: 'Fresh Fruit', items: 54, color: '#FFFCEB' },
  ];

  const popularProducts = [
    { id: 1, title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice', category: 'Snack', price: 28.85, oldPrice: 32.8, rating: 4, badge: 'Hot', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg' },
    { id: 2, title: 'All Natural Italian-Style Chicken Meatballs', category: 'Hodo Foods', price: 52.85, oldPrice: 55.8, rating: 3, badge: 'Sale', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg' },
    { id: 3, title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn', category: 'Snack', price: 48.85, oldPrice: 52.8, rating: 4, badge: 'New', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-3-1.jpg' },
    { id: 4, title: 'Foster Farms Takeout Crispy Classic Buffalo Wings', category: 'Vegetables', price: 17.85, oldPrice: 19.8, rating: 4, badge: '', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-4-1.jpg' },
    { id: 5, title: 'Blue Diamond Almonds Lightly Salted Vegetables', category: 'Pet Foods', price: 23.85, oldPrice: 25.8, rating: 3, badge: 'Hot', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-5-1.jpg' },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-banner">
            <div className="hero-content">
              <h1>Fresh Vegetables <br /> Big discount</h1>
              <p>Save up to 50% off on your first order</p>
              <div className="newsletter-form">
                <Send size={20} color="var(--text-muted)" />
                <input type="text" placeholder="Your email address" />
                <button className="btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section py-50">
        <div className="container">
          <div className="section-title">
            <h2>Featured Categories</h2>
            <div className="tabs">
              <button>Cake & Milk</button>
              <button>Coffes & Teas</button>
              <button>Pet Foods</button>
              <button>Vegetables</button>
            </div>
          </div>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <div key={i} className="category-item" style={{ background: cat.color }}>
                <img src={`https://nest-frontend-v6.netlify.app/assets/imgs/shop/cat-${i + 1}.png`} alt={cat.name} />
                <h3>{cat.name}</h3>
                <span>{cat.items} items</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners */}
      <section className="banners-section py-50">
        <div className="container">
          <div className="banners-grid">
            <div className="banner-item pink">
              <div className="banner-content">
                <h3>Everyday Fresh & <br /> Clean with Our <br /> Products</h3>
                <Link to="/shop" className="btn-primary">Shop Now <ArrowRight size={16}/></Link>
              </div>
            </div>
            <div className="banner-item yellow">
              <div className="banner-content">
                <h3>Make your Breakfast <br /> Healthy and Easy</h3>
                <Link to="/shop" className="btn-primary">Shop Now <ArrowRight size={16}/></Link>
              </div>
            </div>
            <div className="banner-item blue">
              <div className="banner-content">
                <h3>The best Organic <br /> Fruits Online</h3>
                <Link to="/shop" className="btn-primary">Shop Now <ArrowRight size={16}/></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="popular-products py-50">
        <div className="container">
          <div className="section-title">
            <h2>Popular Products</h2>
            <div className="tabs">
              <button className="active">All</button>
              <button>Milks & Dairies</button>
              <button>Coffes & Teas</button>
              <button>Pet Foods</button>
              <button>Meats</button>
              <button>Vegetables</button>
              <button>Fruits</button>
            </div>
          </div>
          <div className="products-grid">
            {popularProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
            {/* Repeat for visual density */}
            {popularProducts.map(p => (
              <ProductCard key={p.id + 10} product={{...p, id: p.id + 10}} />
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .py-50 { padding: 50px 0; }
        
        .hero-section { margin-top: 30px; }
        .hero-banner {
          height: 500px;
          background: url('https://nest-frontend-v6.netlify.app/assets/imgs/slider/slider-1.png') no-repeat center center;
          background-size: cover;
          border-radius: 30px;
          display: flex;
          align-items: center;
          padding: 0 80px;
        }
        .hero-content h1 {
          font-size: 64px;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .hero-content p {
          font-size: 30px;
          color: var(--text-muted);
          margin-bottom: 40px;
        }
        .newsletter-form {
          background: white;
          width: 450px;
          height: 60px;
          border-radius: 30px;
          display: flex;
          align-items: center;
          padding: 0 5px 0 20px;
          box-shadow: var(--shadow-md);
        }
        .newsletter-form input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 15px;
          font-size: 16px;
        }
        .newsletter-form .btn-primary {
          border-radius: 30px;
          height: 50px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          gap: 20px;
        }
        .category-item {
          padding: 20px 10px;
          border-radius: 10px;
          text-align: center;
          transition: var(--transition-slow);
          cursor: pointer;
        }
        .category-item:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-sm);
        }
        .category-item img {
          width: 80px;
          margin-bottom: 15px;
        }
        .category-item h3 {
          font-size: 16px;
          margin-bottom: 5px;
        }
        .category-item span {
          font-size: 14px;
          color: var(--text-muted);
        }

        .banners-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .banner-item {
          height: 250px;
          background-size: cover;
          background-position: center;
          border-radius: 15px;
          padding: 40px;
          display: flex;
          align-items: center;
        }
        .banner-item.pink { background-image: url('https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-1.png'); }
        .banner-item.yellow { background-image: url('https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-2.png'); }
        .banner-item.blue { background-image: url('https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-3.png'); }
        
        .banner-content h3 {
          font-size: 24px;
          margin-bottom: 30px;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
        }
      ` }} />
    </div>
  );
};

export default HomePage;
