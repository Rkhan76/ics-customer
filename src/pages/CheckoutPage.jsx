import React from 'react';
import { CreditCard, Truck, ShieldCheck, MapPin } from 'lucide-react';

const CheckoutPage = () => {
  return (
    <div className="checkout-page py-50">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <p className="items-count">There are <span className="primary">3</span> products in your cart</p>

        <div className="checkout-layout">
          <div className="checkout-main">
            {/* Billing Details */}
            <section className="checkout-section">
              <h3 className="section-title">Billing Details</h3>
              <form className="checkout-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Company Name (optional)</label>
                  <input type="text" placeholder="Company Name" />
                </div>
                <div className="form-group">
                  <label>Street Address *</label>
                  <input type="text" placeholder="House number and street name" style={{ marginBottom: '15px' }} />
                  <input type="text" placeholder="Apartment, suite, unit, etc (optional)" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Town / City *</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>Postcode / ZIP *</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone *</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input type="email" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Order Notes (optional)</label>
                  <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                </div>
              </form>
            </section>
          </div>

          <aside className="checkout-sidebar">
            <div className="order-summary-card">
              <h3 className="section-title">Your Order</h3>
              <div className="order-items">
                <div className="order-item">
                  <div className="item-detail">
                    <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg" alt="" />
                    <span>Field Roast Chao Cheese x 1</span>
                  </div>
                  <span className="item-price">$2.51</span>
                </div>
                <div className="order-item">
                  <div className="item-detail">
                    <img src="https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg" alt="" />
                    <span>Blue Diamond Almonds x 1</span>
                  </div>
                  <span className="item-price">$3.20</span>
                </div>
              </div>

              <div className="calculation-lines">
                <div className="line">
                  <span>Subtotal</span>
                  <span className="value">$5.71</span>
                </div>
                <div className="line">
                  <span>Shipping</span>
                  <span className="value">Free</span>
                </div>
                <div className="line total">
                  <span>Total</span>
                  <span className="value">$5.71</span>
                </div>
              </div>

              <div className="payment-method">
                <h4 className="method-title">Payment Method</h4>
                <div className="payment-options">
                  <label className="option">
                    <input type="radio" name="payment" defaultChecked />
                    <span>Direct Bank Transfer</span>
                  </label>
                  <label className="option">
                    <input type="radio" name="payment" />
                    <span>Cash on Delivery</span>
                  </label>
                  <label className="option">
                    <input type="radio" name="payment" />
                    <span>Card Payment</span>
                  </label>
                </div>
              </div>

              <button className="place-order-btn">Place Order</button>
            </div>
            
            <div className="trust-info">
               <div className="trust-item">
                 <Truck size={18} />
                 <span>Free Shipping on orders over $50</span>
               </div>
               <div className="trust-item">
                 <ShieldCheck size={18} />
                 <span>100% Secure Payment Gateways</span>
               </div>
            </div>
          </aside>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .checkout-page { padding-top: 40px; }
        .page-title { font-size: 40px; margin-bottom: 10px; }
        .items-count { color: var(--text-muted); margin-bottom: 40px; }
        .primary { color: var(--primary); font-weight: 700; }

        .checkout-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 50px;
        }

        .checkout-section {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 30px;
          margin-bottom: 30px;
        }
        .section-title {
          font-size: 24px;
          margin-bottom: 30px;
          font-family: 'Quicksand';
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 15px;
        }

        .checkout-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .form-group label {
          font-weight: 700;
          color: var(--text-main);
        }
        .form-group input, .form-group textarea {
          padding: 12px 15px;
          border: 1px solid var(--border-color);
          border-radius: 5px;
          outline: none;
        }
        .form-group textarea { min-height: 120px; resize: vertical; }
        .form-group input:focus, .form-group textarea:focus { border-color: var(--primary); }

        .order-summary-card {
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 30px;
          background: #f8f9fa;
        }
        .order-items {
          margin-bottom: 25px;
        }
        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          border-bottom: 1px solid #ddd;
        }
        .item-detail {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .item-detail img { width: 50px; height: 50px; object-fit: contain; }
        .item-detail span { font-weight: 600; font-size: 14px; }
        .item-price { font-weight: 700; color: var(--primary); }

        .calculation-lines {
          margin-bottom: 30px;
        }
        .line {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          font-weight: 600;
          color: var(--text-muted);
        }
        .line.total {
          border-top: 2px solid #ddd;
          margin-top: 10px;
          padding-top: 20px;
          font-size: 20px;
          color: var(--text-main);
          font-weight: 700;
        }
        .line.total .value { color: var(--primary); }

        .payment-method { margin-bottom: 30px; }
        .method-title { font-size: 18px; margin-bottom: 15px; }
        .payment-options { display: flex; flex-direction: column; gap: 12px; }
        .option { display: flex; align-items: center; gap: 10px; cursor: pointer; font-weight: 600; }
        .option input { accent-color: var(--primary); width: 18px; height: 18px; }

        .place-order-btn {
          width: 100%;
          padding: 18px;
          background: var(--primary);
          color: white;
          border-radius: 5px;
          font-weight: 700;
          font-size: 18px;
          transition: var(--transition-fast);
        }
        .place-order-btn:hover { background: #2ea36f; transform: translateY(-2px); }

        .trust-info { margin-top: 30px; display: flex; flex-direction: column; gap: 15px; }
        .trust-item { display: flex; align-items: center; gap: 10px; color: var(--text-muted); font-size: 14px; }
        .trust-item span { font-weight: 600; }
      ` }} />
    </div>
  );
};

export default CheckoutPage;
