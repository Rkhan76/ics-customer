import React, { useState } from 'react';
import { ChevronRight, Star, Heart, RefreshCw, Share2, ShoppingCart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductDetailsPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');
  const [mainImage, setMainImage] = useState('https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg');

  const thumbnails = [
    'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg',
    'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-2.jpg',
    'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg',
    'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-2.jpg',
  ];

  const relatedProducts = [
    { id: 1, title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice', category: 'Snack', price: 28.85, oldPrice: 32.8, rating: 4, badge: 'Hot', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg' },
    { id: 2, title: 'All Natural Italian-Style Chicken Meatballs', category: 'Meat', price: 52.85, oldPrice: 55.8, rating: 3, badge: 'Sale', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg' },
    { id: 3, title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn', category: 'Snack', price: 48.85, oldPrice: 52.8, rating: 4, badge: 'New', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-3-1.jpg' },
    { id: 4, title: 'Foster Farms Takeout Crispy Classic Buffalo Wings', category: 'Vegetables', price: 17.85, oldPrice: 19.8, rating: 4, badge: '', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-4-1.jpg' },
  ];

  return (
    <div className="product-details-page">
      {/* Breadcrumbs */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb">
            <span className="home-link">Home</span>
            <ChevronRight size={14} />
            <span>Vegetables</span>
            <ChevronRight size={14} />
            <span className="current">Seeds of Change Organic Quinoa</span>
          </div>
        </div>
      </div>

      <div className="container py-50">
        <div className="product-main-layout">
          {/* Gallery Section */}
          <div className="product-gallery">
            <div className="main-image-container">
              <img src={mainImage} alt="Product" className="main-image" />
              <div className="zoom-hint">Roll over image to zoom in</div>
            </div>
            <div className="thumbnail-list">
              {thumbnails.map((thumb, i) => (
                <div 
                  key={i} 
                  className={`thumbnail ${mainImage === thumb ? 'active' : ''}`}
                  onClick={() => setMainImage(thumb)}
                >
                  <img src={thumb} alt={`Thumbnail ${i}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="product-info-section">
            <span className="stock-badge">Sale Off</span>
            <h1 className="product-title">Seeds of Change Organic Quinoa, Brown, & Red Rice</h1>
            
            <div className="product-meta-row">
              <div className="rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "#FDC040" : "none"} color={i < 4 ? "#FDC040" : "#ddd"} />)}
                </div>
                <span className="rating-text">(4.5 Reviews)</span>
              </div>
            </div>

            <div className="product-price">
              <span className="current-price">$38.00</span>
              <div className="price-meta">
                <span className="discount-badge">26% Off</span>
                <span className="old-price">$52.00</span>
              </div>
            </div>

            <p className="short-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, aut unde delectus minima laboriosam, eveniet facilis sed, dicta quis. Itaque sapiente quasi laboriosam.
            </p>

            <div className="product-options">
               <div className="option-group">
                  <label>Size / Weight :</label>
                  <div className="option-chips">
                    <button className="chip active">50g</button>
                    <button className="chip">100g</button>
                    <button className="chip">150g</button>
                    <button className="chip">200g</button>
                  </div>
               </div>
            </div>

            <div className="purchase-actions">
              <div className="quantity-selector">
                <input type="number" value={quantity} onChange={(e) => setQuantity(Math.max(1, e.target.value))} />
                <div className="q-btns">
                  <button onClick={() => setQuantity(quantity + 1)}>▲</button>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>▼</button>
                </div>
              </div>
              <button className="btn-primary add-to-cart">
                <ShoppingCart size={20} /> Add to cart
              </button>
              <button className="wishlist-btn"><Heart size={20} /></button>
              <button className="compare-btn"><RefreshCw size={20} /></button>
            </div>

            <div className="product-meta-bottom">
               <p><strong>SKU:</strong> FWM15VKT</p>
               <p><strong>Category:</strong> Snack, Organic</p>
               <p><strong>Tags:</strong> Snack, Organic, Brown</p>
            </div>

            <div className="trust-badges">
               <div className="badge-item">
                 <Truck size={24} color="var(--primary)" />
                 <p>Fast Delivery<br/><span>Within 24 Hours</span></p>
               </div>
               <div className="badge-item">
                 <ShieldCheck size={24} color="var(--primary)" />
                 <p>Secure Payment<br/><span>100% Safe Payment</span></p>
               </div>
               <div className="badge-item">
                 <RotateCcw size={24} color="var(--primary)" />
                 <p>Easy Return<br/><span>30 Days Returns</span></p>
               </div>
            </div>
          </div>
        </div>

        {/* Info Tabs */}
        <div className="product-tabs-container">
          <div className="tabs-header">
            {['Description', 'Additional info', 'Vendor', 'Reviews (3)'].map(tab => (
              <button 
                key={tab} 
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tabs-content">
             {activeTab === 'Description' && (
               <div className="tab-pane">
                 <p>Unrivaled richness and creaminess meet high-quality organic ingredients in our signature Quinoa blend. Perfect for healthy meals and quick snacks alike.</p>
                 <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
                    <li>100% Organic Ingredients</li>
                    <li>No Artificial Preservatives</li>
                    <li>Gluten Free & Vegan Friendly</li>
                    <li>Sustainably Sourced</li>
                 </ul>
               </div>
             )}
             {activeTab !== 'Description' && <div className="tab-pane">Content for {activeTab} section...</div>}
          </div>
        </div>

        {/* Related Products */}
        <div className="related-section">
           <h2 className="section-title">Related products</h2>
           <div className="products-grid">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
           </div>
        </div>
      </div>

      {/* Sticky Add to Cart Bar */}
      <div className="sticky-bar">
        <div className="container">
          <div className="sticky-inner">
             <div className="sticky-prod">
                <img src={mainImage} alt="" />
                <div>
                   <h4>Seeds of Change Organic Quinoa</h4>
                   <div className="rating">
                      <Star size={12} fill="#FDC040" color="#FDC040" />
                      <span>4.5 (3 reviews)</span>
                   </div>
                </div>
             </div>
             <div className="sticky-actions">
                <div className="sticky-price">$38.00</div>
                <div className="quantity-selector small">
                   <input type="number" value={quantity} readOnly />
                </div>
                <button className="btn-primary">Add to Cart</button>
             </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-details-page { 
          padding-top: 40px;
          padding-bottom: 100px; 
        }
        
        .breadcrumb-wrapper {
          padding: 15px 0;
          margin-bottom: 40px;
        }
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--primary);
          font-weight: 600;
          font-size: 14px;
        }
        .breadcrumb span { cursor: pointer; }
        .breadcrumb span.current { color: var(--text-muted); cursor: default; }
        .breadcrumb .home-link { display: flex; align-items: center; gap: 5px; }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .section-title {
          font-size: 32px;
          margin-bottom: 30px;
          font-family: 'Quicksand';
          font-weight: 700;
        }

        .product-main-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          margin-bottom: 80px;
        }

        .main-image-container {
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 50px;
          text-align: center;
          position: relative;
          background: white;
          margin-bottom: 20px;
        }
        .main-image {
          max-width: 100%;
          height: 400px;
          object-fit: contain;
        }
        .zoom-hint {
          position: absolute;
          bottom: 15px;
          right: 30px;
          font-size: 12px;
          color: var(--text-muted);
        }

        .thumbnail-list {
          display: flex;
          gap: 15px;
        }
        .thumbnail {
          width: 80px;
          height: 80px;
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 10px;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .thumbnail.active, .thumbnail:hover {
          border-color: var(--primary);
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .stock-badge {
          background: #fde0e9;
          color: #f74b81;
          padding: 5px 15px;
          border-radius: 5px;
          font-weight: 700;
          font-size: 12px;
          display: inline-block;
          margin-bottom: 20px;
        }

        .product-title {
          font-size: 40px;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .product-meta-row {
          display: flex;
          gap: 30px;
          margin-bottom: 30px;
          align-items: center;
        }

        .product-price {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }
        .product-price .current-price {
          font-size: 48px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }
        .old-price {
          text-decoration: line-through;
          color: var(--text-muted);
          font-size: 18px;
        }
        .discount-badge {
          display: block;
          color: var(--warning);
          font-weight: 700;
          font-size: 14px;
        }

        .short-description {
          color: var(--text-muted);
          margin-bottom: 40px;
          font-size: 16px;
        }

        .option-group label {
          display: block;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--text-muted);
        }
        .option-chips {
          display: flex;
          gap: 10px;
          margin-bottom: 40px;
        }
        .chip {
          padding: 8px 20px;
          border: 1px solid var(--border-color);
          border-radius: 5px;
          background: white;
          font-weight: 600;
          transition: var(--transition-fast);
        }
        .chip.active, .chip:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .purchase-actions {
          display: flex;
          gap: 15px;
          align-items: center;
          margin-bottom: 50px;
        }
        .quantity-selector {
          display: flex;
          border: 2px solid var(--primary);
          border-radius: 5px;
          padding: 5px;
          align-items: center;
          width: 80px;
        }
        .quantity-selector input {
          width: 40px;
          border: none;
          text-align: center;
          font-weight: 700;
          outline: none;
        }
        .q-btns {
          display: flex;
          flex-direction: column;
        }
        .q-btns button {
          font-size: 10px;
          color: var(--primary);
          padding: 0 5px;
        }

        .add-to-cart {
          padding: 15px 30px;
          border-radius: 5px;
        }

        .wishlist-btn, .compare-btn {
          width: 50px;
          height: 50px;
          border: 1px solid var(--border-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .wishlist-btn:hover, .compare-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-3px);
        }

        .product-meta-bottom {
          padding-top: 30px;
          border-top: 1px solid var(--border-color);
          font-size: 14px;
          color: var(--text-muted);
          line-height: 2;
        }

        .trust-badges {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
        }
        .badge-item {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .badge-item p { font-size: 13px; font-weight: 700; line-height: 1.2; }
        .badge-item p span { font-weight: 400; color: var(--text-muted); font-size: 12px; }

        /* Tabs */
        .product-tabs-container {
          border: 1px solid var(--border-color);
          border-radius: 15px;
          margin-bottom: 80px;
          overflow: hidden;
        }
        .tabs-header {
          display: flex;
          gap: 20px;
          padding: 0 40px;
          border-bottom: 1px solid var(--border-color);
          background: #fff;
        }
        .tabs-header button {
          padding: 25px 0;
          font-size: 18px;
          font-weight: 700;
          font-family: 'Quicksand';
          color: var(--text-muted);
          position: relative;
        }
        .tabs-header button.active {
          color: var(--primary);
        }
        .tabs-header button.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
        }
        .tabs-content { padding: 40px; }

        /* Sticky Bar */
        .sticky-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: white;
          box-shadow: 0 -10px 30px rgba(0,0,0,0.05);
          padding: 15px 0;
          z-index: 1000;
          border-top: 1px solid var(--border-color);
        }
        .sticky-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .sticky-prod { display: flex; gap: 15px; align-items: center; }
        .sticky-prod img { width: 50px; height: 50px; object-fit: contain; }
        .sticky-prod h4 { font-size: 16px; margin: 0; }
        .sticky-prod .rating { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--text-muted); }
        .sticky-actions { display: flex; gap: 20px; align-items: center; }
        .sticky-price { font-size: 24px; font-weight: 700; color: var(--primary); }
        .quantity-selector.small { width: 60px; height: 35px; }

        .related-section { margin-top: 80px; }
      ` }} />
    </div>
  );
};

export default ProductDetailsPage;
