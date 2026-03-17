import React, { useState } from 'react';
import { User, ShoppingBag, MapPin, Heart, LogOut, Settings, CreditCard } from 'lucide-react';

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const menuItems = [
    { name: 'Dashboard', icon: <User size={20} /> },
    { name: 'Orders', icon: <ShoppingBag size={20} /> },
    { name: 'My Address', icon: <MapPin size={20} /> },
    { name: 'Account Details', icon: <Settings size={20} /> },
    { name: 'Wishlist', icon: <Heart size={20} /> },
    { name: 'Payments', icon: <CreditCard size={20} /> },
    { name: 'Logout', icon: <LogOut size={20} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="tab-content">
            <h2 className="tab-title">Hello Rosie!</h2>
            <p>From your account dashboard. you can easily check & view your <span className="primary">recent orders</span>, manage your <span className="primary">shipping and billing addresses</span> and <span className="primary">edit your password and account details.</span></p>
            
            <div className="stats-grid">
               <div className="stat-card">
                  <h3>$1,245.00</h3>
                  <p>Total Spent</p>
               </div>
               <div className="stat-card">
                  <h3>12</h3>
                  <p>Total Orders</p>
               </div>
               <div className="stat-card">
                  <h3>4</h3>
                  <p>In Progress</p>
               </div>
            </div>
          </div>
        );
      case 'Orders':
        return (
          <div className="tab-content">
            <h2 className="tab-title">Your Orders</h2>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1357</td>
                  <td>March 4, 2024</td>
                  <td><span className="status-badge success">Completed</span></td>
                  <td>$125.00 for 3 items</td>
                  <td><button className="view-btn">View</button></td>
                </tr>
                <tr>
                  <td>#1246</td>
                  <td>Feb 28, 2024</td>
                  <td><span className="status-badge processing">Processing</span></td>
                  <td>$45.00 for 1 item</td>
                  <td><button className="view-btn">View</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'My Address':
        return (
          <div className="tab-content">
            <h2 className="tab-title">Billing Address</h2>
            <div className="address-card">
              <address>
                <strong>Rosie Alexander</strong><br />
                4517 Washington Ave.<br />
                Manchester, Kentucky 39495<br />
                United States<br />
                Phone: (123) 456-7890
              </address>
              <button className="edit-link">Edit</button>
            </div>
          </div>
        );
      case 'Account Details':
        return (
          <div className="tab-content">
            <h2 className="tab-title">Account Details</h2>
            <form className="account-form">
               <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" defaultValue="Rosie" />
               </div>
               <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" defaultValue="Alexander" />
               </div>
               <div className="form-group full">
                  <label>Email Address *</label>
                  <input type="email" defaultValue="rosie@example.com" />
               </div>
               <div className="form-group full">
                  <label>Current Password</label>
                  <input type="password" />
               </div>
               <div className="form-group full">
                  <label>New Password</label>
                  <input type="password" />
               </div>
               <button className="btn-primary" type="button">Save Changes</button>
            </form>
          </div>
        );
      default:
        return <div>Content for {activeTab}</div>;
    }
  };

  return (
    <div className="account-page py-50">
      <div className="container">
        <div className="account-layout">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <ul className="account-nav">
              {menuItems.map((item) => (
                <li 
                  key={item.name} 
                  className={activeTab === item.name ? 'active' : ''}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="account-main">
            {renderContent()}
          </main>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .account-page {
          padding-top: 40px;
        }

        .account-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
        }

        .account-sidebar {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 20px;
          height: fit-content;
        }

        .account-nav {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .account-nav li {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          border-radius: 10px;
          cursor: pointer;
          font-weight: 700;
          font-family: 'Quicksand';
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .account-nav li:hover {
          color: var(--primary);
          background: #F2FCE4;
          transform: translateX(5px);
        }

        .account-nav li.active {
          background: var(--primary);
          color: white;
        }

        .account-main {
           background: white;
           border: 1px solid var(--border-color);
           border-radius: 15px;
           padding: 40px;
        }

        .tab-title {
          font-size: 32px;
          margin-bottom: 25px;
        }

        .primary { color: var(--primary); }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 40px;
        }

        .stat-card {
          padding: 30px;
          border: 1px solid var(--border-color);
          border-radius: 15px;
          text-align: center;
          background: #f8f9fa;
        }

        .stat-card h3 {
          font-size: 24px;
          color: var(--primary);
          margin-bottom: 5px;
        }

        /* Orders Table */
        .orders-table {
          width: 100%;
          border-collapse: collapse;
        }

        .orders-table th {
          text-align: left;
          padding: 15px;
          background: #f8f9fa;
          border-bottom: 2px solid var(--border-color);
        }

        .orders-table td {
          padding: 15px;
          border-bottom: 1px solid var(--border-color);
        }

        .status-badge {
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge.success { background: #DEF9EC; color: #3BB77E; }
        .status-badge.processing { background: #FEF0E1; color: #f59758; }

        .view-btn {
          color: var(--primary);
          font-weight: 700;
        }

        .address-card {
          border: 1px solid var(--border-color);
          padding: 30px;
          border-radius: 15px;
          max-width: 400px;
        }

        .address-card address {
          font-style: normal;
          line-height: 2;
          color: var(--text-muted);
        }

        .edit-link {
          color: var(--primary);
          font-weight: 700;
          margin-top: 15px;
          display: block;
        }

        /* Account Form */
        .account-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full {
          grid-column: span 2;
        }

        .form-group label {
          font-weight: 700;
          font-family: 'Quicksand';
        }

        .form-group input {
          padding: 12px 15px;
          border: 1px solid var(--border-color);
          border-radius: 5px;
          outline: none;
        }

        .form-group input:focus {
          border-color: var(--primary);
        }
      ` }} />
    </div>
  );
};

export default AccountPage;
