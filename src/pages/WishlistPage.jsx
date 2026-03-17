import React, { useState } from 'react';
import { Trash2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const [items, setItems] = useState([
    { id: 101, title: 'Organic Broccoli - Fresh Pack', category: 'Vegetables', price: 5.85, oldPrice: 8.8, stock: 'In Stock', rating: 5, image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg' },
    { id: 102, title: 'Fresh Strawberries - 500g', category: 'Fruits', price: 12.85, oldPrice: 15.8, stock: 'In Stock', rating: 5, image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg' },
    { id: 103, title: 'Premium Greek Yogurt', category: 'Dairy', price: 3.85, oldPrice: 5.8, stock: 'Out of Stock', rating: 4, image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-3-1.jpg' },
  ]);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="wishlist-page py-50">
      <div className="container">
        <h1 className="page-title">Your Wishlist</h1>
        <p className="items-count">There are <span className="primary">{items.length}</span> products in this list</p>

        <div className="wishlist-table-container">
          <table className="wishlist-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock Status</th>
                <th>Action</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td className="product-info-cell">
                    <img src={item.image} alt={item.title} />
                    <div className="info-wrap">
                      <Link to={`/product/${item.id}`}>
                        <h4>{item.title}</h4>
                      </Link>
                      <div className="rating">⭐⭐⭐⭐⭐</div>
                    </div>
                  </td>
                  <td className="price-cell">
                    <span className="current-price">${item.price.toFixed(2)}</span>
                    <span className="old-price">${item.oldPrice.toFixed(2)}</span>
                  </td>
                  <td className="stock-cell">
                    <span className={`stock-badge ${item.stock === 'In Stock' ? 'in' : 'out'}`}>
                      {item.stock}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button className="add-to-cart-btn" disabled={item.stock === 'Out of Stock'}>
                      <ShoppingCart size={18} /> Add to cart
                    </button>
                  </td>
                  <td className="remove-cell">
                    <button onClick={() => removeItem(item.id)} className="del-btn">
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {items.length === 0 && (
            <div className="empty-wishlist">
              <p>Your wishlist is empty.</p>
              <Link to="/shop" className="btn-primary">Go Shopping</Link>
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .wishlist-page { padding-top: 40px; }
        .page-title { font-size: 40px; margin-bottom: 10px; }
        .items-count { color: var(--text-muted); margin-bottom: 40px; }
        .primary { color: var(--primary); font-weight: 700; }

        .wishlist-table-container {
          background: white;
          border-radius: 15px;
          border: 1px solid var(--border-color);
          overflow: hidden;
        }

        .wishlist-table {
          width: 100%;
          border-collapse: collapse;
        }
        .wishlist-table th {
          text-align: left;
          background: #f8f9fa;
          padding: 20px;
          color: var(--text-main);
          font-weight: 700;
        }
        .wishlist-table td {
          padding: 20px;
          border-bottom: 1px solid var(--border-color);
          vertical-align: middle;
        }

        .product-info-cell {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .product-info-cell img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          border: 1px solid var(--border-color);
          border-radius: 10px;
        }
        .info-wrap h4 {
          margin: 0 0 5px 0;
          font-size: 16px;
          color: var(--text-main);
        }
        .info-wrap h4:hover { color: var(--primary); }

        .current-price {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary);
          margin-right: 10px;
        }
        .old-price {
          font-size: 16px;
          text-decoration: line-through;
          color: var(--text-muted);
        }

        .stock-badge {
          padding: 5px 12px;
          border-radius: 5px;
          font-weight: 700;
          font-size: 12px;
        }
        .stock-badge.in { background: #DEF9EC; color: #3BB77E; }
        .stock-badge.out { background: #FDE0E9; color: #F74B81; }

        .add-to-cart-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          background: var(--primary);
          color: white;
          padding: 12px 20px;
          border-radius: 5px;
          font-weight: 700;
          transition: var(--transition-fast);
        }
        .add-to-cart-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        .add-to-cart-btn:not(:disabled):hover {
          background: #2ea36f;
          transform: translateY(-2px);
        }

        .del-btn {
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .del-btn:hover { color: #f74b81; }

        .empty-wishlist {
          padding: 80px;
          text-align: center;
        }
        .empty-wishlist p { font-size: 20px; color: var(--text-muted); margin-bottom: 20px; }
      ` }} />
    </div>
  );
};

export default WishlistPage;
