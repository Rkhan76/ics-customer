import React, { useState } from 'react';
import { Trash2, ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Field Roast Chao Cheese Creamy Original', price: 2.51, quantity: 1, image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg' },
    { id: 2, title: 'Blue Diamond Almonds Lightly Salted', price: 3.2, quantity: 1, image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg' },
    { id: 3, title: 'Fresh Organic Baby Spinach', price: 2.43, quantity: 1, image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-3-1.jpg' },
  ]);

  const updateQuantity = (id, delta) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-page-main py-50">
      <div className="container">
        <h1 className="page-title">Your Cart</h1>
        <p className="items-count">There are <span className="primary">{items.length}</span> products in your cart</p>

        <div className="cart-layout">
          <div className="cart-main">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td className="product-info-cell">
                      <img src={item.image} alt="" />
                      <div>
                        <h4>{item.title}</h4>
                        <div className="rating">⭐⭐⭐⭐⭐</div>
                      </div>
                    </td>
                    <td className="price-cell">${item.price.toFixed(2)}</td>
                    <td className="qty-cell">
                      <div className="qty-wrap">
                         <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                         <span>{item.quantity}</span>
                         <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                      </div>
                    </td>
                    <td className="subtotal-cell">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="action-cell">
                       <button className="del-btn"><Trash2 size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-actions">
              <Link to="/shop" className="continue-btn"><ArrowLeft size={18} /> Continue Shopping</Link>
              <button className="update-btn"><RefreshCw size={18} /> Update Cart</button>
            </div>
          </div>

          <aside className="cart-summary">
            <div className="summary-card">
               <h3>Total</h3>
               <div className="summary-line">
                  <span>Subtotal</span>
                  <span className="price">${total.toFixed(2)}</span>
               </div>
               <div className="summary-line">
                  <span>Shipping</span>
                  <span className="price">Free</span>
               </div>
               <div className="summary-line">
                  <span>Estimate for</span>
                  <span className="price">United Kingdom</span>
               </div>
               <div className="summary-line total">
                  <span>Total</span>
                  <span className="price total-price">${total.toFixed(2)}</span>
               </div>
               <button className="checkout-btn">Proceed To Checkout</button>
            </div>
          </aside>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cart-page-main { 
          padding-top: 40px;
          min-height: 60vh;
        }
        .page-title { font-size: 40px; margin-bottom: 10px; }
        .items-count { color: var(--text-muted); margin-bottom: 40px; }
        .primary { color: var(--primary); font-weight: 700; }

        .cart-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 40px;
        }

        .cart-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 30px;
        }
        .cart-table th {
          text-align: left;
           background: #f8f9fa;
           padding: 15px;
           border-radius: 10px;
        }
        .cart-table td {
          padding: 20px 15px;
          border-bottom: 1px solid #eee;
        }

        .product-info-cell {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .product-info-cell img { width: 80px; height: 80px; object-fit: contain; border: 1px solid #eee; border-radius: 10px; }
        .product-info-cell h4 { font-size: 16px; margin: 0; color: var(--text-main); }
        
        .price-cell, .subtotal-cell {
           font-size: 18px;
           font-weight: 700;
           color: var(--text-muted);
        }
        .subtotal-cell { color: var(--primary); }

        .qty-wrap {
          display: flex;
          align-items: center;
          gap: 15px;
          border: 2px solid var(--primary);
          padding: 5px 15px;
          border-radius: 5px;
          width: fit-content;
        }
        .qty-wrap button { color: var(--primary); font-weight: 700; }
        .qty-wrap span { font-weight: 700; font-size: 16px; }

        .del-btn { color: #999; }
        .del-btn:hover { color: #f74b81; }

        .cart-actions {
          display: flex;
          justify-content: space-between;
        }
        .continue-btn, .update-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 25px;
          border-radius: 5px;
          font-weight: 700;
        }
        .continue-btn { background: var(--primary); color: white; }
        .update-btn { border: 1px solid #eee; }

        .summary-card {
          border: 1px solid #eee;
          padding: 30px;
          border-radius: 15px;
          position: sticky;
          top: 40px;
        }
        .summary-card h3 { font-size: 24px; margin-bottom: 25px; border-bottom: 1px solid #eee; padding-bottom: 15px; }
        .summary-line {
          display: flex;
          justify-content: space-between;
          padding: 15px 0;
          border-bottom: 1px solid #eee;
          color: var(--text-muted);
          font-weight: 600;
        }
        .summary-line.total { border: none; font-size: 24px; color: var(--text-main); }
        .total-price { color: var(--primary); }
        
        .checkout-btn {
          width: 100%;
          padding: 18px;
          background: var(--primary);
          color: white;
          border-radius: 5px;
          font-weight: 700;
          margin-top: 20px;
        }
      ` }} />
    </div>
  );
};

export default CartPage;
