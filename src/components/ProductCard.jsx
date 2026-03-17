import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye, RefreshCw, Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { title, category, price, oldPrice, rating, badge, image } = product;

  return (
    <div className="product-card">
      {badge && <div className={`product-badge ${badge.toLowerCase()}`}>{badge}</div>}
      
      <div className="product-img-wrapper">
        <Link to={`/product/${product.id}`}>
          <img src={image} alt={title} className="product-img" />
        </Link>
        <div className="product-actions">
          <Link to={`/product/${product.id}`} title="Quick View"><button><Eye size={18} /></button></Link>
          <button title="Wishlist"><Heart size={18} /></button>
          <button title="Compare"><RefreshCw size={18} /></button>
        </div>
      </div>

      <div className="product-content">
        <span className="category">{category}</span>
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{title}</h3>
        </Link>
        <div className="rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < rating ? "#FDC040" : "none"} color={i < rating ? "#FDC040" : "#ddd"} />
            ))}
          </div>
          <span className="rating-count">({rating}.0)</span>
        </div>
        <div className="price-wrapper">
          <div className="prices">
            <span className="current-price">${price}</span>
            {oldPrice && <span className="old-price">${oldPrice}</span>}
          </div>
          <button className="add-btn">
            <ShoppingCart size={16} /> Add
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-card {
          border: 1px solid var(--border-color);
          border-radius: 15px;
          overflow: hidden;
          padding: 20px;
          position: relative;
          transition: var(--transition-slow);
          background: white;
        }
        .product-card:hover {
          border-color: #BCE3C9;
          box-shadow: var(--shadow-md);
          transform: translateY(-5px);
        }
        .product-badge {
          position: absolute;
          top: 0;
          left: 0;
          padding: 5px 15px;
          border-bottom-right-radius: 15px;
          font-size: 12px;
          font-weight: 600;
          color: white;
          z-index: 10;
        }
        .product-badge.hot { background: #f74b81; }
        .product-badge.new { background: var(--primary); }
        .product-badge.sale { background: #67bcee; }
        .product-badge.best { background: #f59758; }

        .product-img-wrapper {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 15px;
        }
        .product-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: var(--transition-slow);
        }
        .product-card:hover .product-img {
          transform: scale(1.05);
        }

        .product-actions {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          gap: 10px;
          opacity: 0;
          transition: var(--transition-slow);
        }
        .product-card:hover .product-actions {
          opacity: 1;
        }
        .product-actions button {
          background: white;
          color: var(--primary);
          width: 35px;
          height: 35px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          border: 1px solid #BCE3C9;
        }
        .product-actions button:hover {
          background: var(--primary);
          color: white;
        }

        .product-content .category {
          color: var(--text-muted);
          font-size: 12px;
        }
        .product-title {
          font-size: 16px;
          margin: 5px 0;
          height: 48px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .rating {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }
        .rating-count {
          font-size: 12px;
          color: var(--text-muted);
        }
        .price-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .prices {
          display: flex;
          flex-direction: column;
        }
        .current-price {
          color: var(--primary);
          font-size: 18px;
          font-weight: 700;
        }
        .old-price {
          color: var(--text-muted);
          text-decoration: line-through;
          font-size: 14px;
        }
        .add-btn {
          background: #DEF9EC;
          color: var(--primary);
          padding: 8px 15px;
          border-radius: 4px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: var(--transition-fast);
        }
        .add-btn:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
        }
      ` }} />
    </div>
  );
};

export default ProductCard;
