import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const cartItems = [
    { id: 1, title: 'Belvita Chocolate Yogurt Crunch', price: 219, quantity: 1, image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg' },
  ];


  return (
    <div className={`cart-drawer-wrapper ${isOpen ? 'active' : ''}`}>
      {/* Overlay */}
      <div className="cart-drawer-overlay" onClick={onClose}></div>
      
      {/* Drawer */}
      <div className="cart-drawer">
        <div className="drawer-header">
          <h3>Shopping Cart</h3>
          <button onClick={onClose}><X size={24} /></button>
        </div>

        <div className="drawer-content">
          <div className="free-shipping-notice">
             <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '100%' }}></div>
                <span className="truck-icon">🚚</span>
             </div>
             <p>Congratulations! Your order is eligible for <strong>FREE Delivery.</strong></p>
          </div>

          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="drawer-item">
                <div className="item-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-info">
                  <h4>{item.title}</h4>
                  <p>{item.quantity} × <span className="price">${item.price}</span></p>
                </div>
                <button className="remove-item"><X size={14} /></button>
              </div>
            ))}
          </div>
        </div>

        <div className="drawer-footer">
          <div className="subtotal-row">
            <span>Subtotal:</span>
            <span className="subtotal-price">$219.00</span>
          </div>
          <div className="drawer-actions">
            <Link to="/cart" className="view-cart-btn" onClick={onClose}>View Cart</Link>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cart-drawer-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9998;
          visibility: hidden;
          transition: visibility 0.3s;
        }
        .cart-drawer-wrapper.active {
          visibility: visible;
        }

        .cart-drawer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .cart-drawer-wrapper.active .cart-drawer-overlay {
          opacity: 1;
        }

        .cart-drawer {
          position: absolute;
          top: 0;
          right: 0;
          width: 400px;
          height: 100%;
          background: white;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }
        .cart-drawer-wrapper.active .cart-drawer {
          transform: translateX(0);
        }
        
        .drawer-header {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eee;
        }
        .drawer-header h3 { font-size: 20px; font-weight: 700; margin: 0; }
        
        .drawer-content {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }

        .free-shipping-notice {
          text-align: center;
          margin-bottom: 30px;
        }
        .progress-bar-container {
          height: 8px;
          background: #eee;
          border-radius: 10px;
          position: relative;
          margin-bottom: 15px;
        }
        .progress-bar {
          height: 100%;
          background: var(--primary);
          border-radius: 10px;
        }
        .truck-icon {
          position: absolute;
          right: -5px;
          top: -10px;
          font-size: 18px;
        }
        .free-shipping-notice p { font-size: 13px; color: var(--text-muted); }

        .drawer-item {
          display: flex;
          gap: 15px;
          padding: 20px 0;
          border-bottom: 1px solid #eee;
          position: relative;
        }
        .item-img {
          width: 80px;
          height: 80px;
          border: 1px solid #eee;
          padding: 5px;
          border-radius: 5px;
        }
        .item-img img { width: 100%; height: 100%; object-fit: contain; }
        .item-info h4 { font-size: 14px; margin: 0 0 5px 0; line-height: 1.4; color: var(--text-main); }
        .item-info p { margin: 0; font-size: 14px; color: var(--text-muted); }
        .item-info .price { color: var(--primary); font-weight: 700; }
        .remove-item {
          position: absolute;
          top: 20px;
          right: 0;
          color: #999;
        }

        .drawer-footer {
          padding: 20px;
          border-top: 1px solid #eee;
          background: #fdfdfd;
        }
        .subtotal-row {
          display: flex;
          justify-content: space-between;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .subtotal-price { color: #f74b81; }

        .drawer-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .view-cart-btn {
          padding: 15px;
          border: 1px solid var(--text-main);
          border-radius: 5px;
          text-align: center;
          font-weight: 700;
          background: #000;
          color: #fff;
        }
        .checkout-btn {
          padding: 15px;
          background: var(--primary);
          color: white;
          border-radius: 5px;
          font-weight: 700;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      ` }} />
    </div>
  );
};

export default CartDrawer;
