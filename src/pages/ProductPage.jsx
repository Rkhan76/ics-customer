import React from 'react';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Grid, List, ChevronDown, Filter } from 'lucide-react';

const ProductPage = () => {
  const products = [
    { id: 1, title: 'Snack of Change Organic Quinoa, Brown, & Red Rice', category: 'Snack', price: 28.85, oldPrice: 32.8, rating: 4, badge: 'Hot', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-1-1.jpg' },
    { id: 2, title: 'All Natural Italian-Style Chicken Meatballs', category: 'Meat', price: 52.85, oldPrice: 55.8, rating: 3, badge: 'Sale', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-2-1.jpg' },
    { id: 3, title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn', category: 'Snack', price: 48.85, oldPrice: 52.8, rating: 4, badge: 'New', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-3-1.jpg' },
    { id: 4, title: 'Foster Farms Takeout Crispy Classic Buffalo Wings', category: 'Vegetables', price: 17.85, oldPrice: 19.8, rating: 4, badge: '', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-4-1.jpg' },
    { id: 5, title: 'Blue Diamond Almonds Lightly Salted Vegetables', category: 'Pet Foods', price: 23.85, oldPrice: 25.8, rating: 3, badge: 'Hot', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-5-1.jpg' },
    { id: 6, title: 'Chobani Greek Yogurt Greek Blueberry & Peach', category: 'Hodo Foods', price: 28.85, oldPrice: 32.8, rating: 4, badge: 'Best', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-6-1.jpg' },
    { id: 7, title: 'Canada Dry Ginger Ale - 2 L Bottle - Refreshing', category: 'Drink', price: 32.85, oldPrice: 35.8, rating: 4, badge: 'Sale', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-7-1.jpg' },
    { id: 8, title: 'Encore Seafoods Stuffed Orange Roughy', category: 'Seafood', price: 28.85, oldPrice: 32.8, rating: 4, badge: 'Hot', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-8-1.jpg' },
    { id: 9, title: 'Gorton’s Beer Battered Fish Fillets with Sauce', category: 'Seafood', price: 23.85, oldPrice: 25.8, rating: 3, badge: 'Hot', image: 'https://nest-frontend-v6.netlify.app/assets/imgs/shop/product-9-1.jpg' },
  ];

  return (
    <div className="product-page">
      <div className="breadcrumb-wrapper">
        <div className="container">
          <div className="breadcrumb">
            <span className="home-link">Home</span>
            <ChevronRight size={14} />
            <span>Shop</span>
            <ChevronRight size={14} />
            <span className="current">Snack</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="shop-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="filter-card">
              <h3>Category</h3>
              <ul className="filter-list">
                <li><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-1.svg" alt="" /> Milks & Dairies <span className="count">30</span></li>
                <li><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-2.svg" alt="" /> Clothing <span className="count">35</span></li>
                <li><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-3.svg" alt="" /> Pet Foods <span className="count">42</span></li>
                <li><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-4.svg" alt="" /> Baking <span className="count">68</span></li>
                <li><img src="https://nest-frontend-v6.netlify.app/assets/imgs/theme/icons/category-5.svg" alt="" /> Fresh Fruit <span className="count">87</span></li>
              </ul>
            </div>

            <div className="filter-card">
              <h3>Fill by Price</h3>
              <div className="price-range">
                <input type="range" min="0" max="500" />
                <div className="price-inputs">
                  <span>From: <strong className="primary">$0</strong></span>
                  <span>To: <strong className="primary">$500</strong></span>
                </div>
                <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }}>
                  <Filter size={16} /> Filter
                </button>
              </div>

              <div className="sub-filter">
                <h4>Color</h4>
                <ul>
                    <li><input type="checkbox" /> Red (56)</li>
                    <li><input type="checkbox" /> Green (45)</li>
                    <li><input type="checkbox" /> Blue (42)</li>
                </ul>
              </div>

              <div className="sub-filter">
                <h4>Item Condition</h4>
                <ul>
                    <li><input type="checkbox" /> New (1506)</li>
                    <li><input type="checkbox" /> Refurbished (27)</li>
                    <li><input type="checkbox" /> Used (45)</li>
                </ul>
              </div>
            </div>

            <div className="sidebar-banner">
                <div className="banner-content">
                    <span className="primary">Organic</span>
                    <h3>Save 17% on <br /> Organic Juice</h3>
                </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="content">
            <div className="shop-toolbar">
              <div className="toolbar-left">
                <p>We found <span className="primary">29</span> items for you!</p>
              </div>
              <div className="toolbar-right">
                <div className="view-mode">
                   <button className="active"><Grid size={18} /></button>
                   <button><List size={18} /></button>
                </div>
                <div className="sort-dropdown">
                    Show: 50 <ChevronDown size={14} />
                </div>
                <div className="sort-dropdown">
                    Sort by: Featured <ChevronDown size={14} />
                </div>
              </div>
            </div>

            <div className="shop-products-grid">
               {products.map(p => (
                   <ProductCard key={p.id} product={p} />
               ))}
                {products.map(p => (
                   <ProductCard key={p.id + 20} product={{...p, id: p.id + 20}} />
               ))}
            </div>

            <div className="pagination">
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">...</button>
                <button className="page-btn">6</button>
                <button className="page-btn next"><ArrowRight size={16}/></button>
            </div>
          </main>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-page { padding-bottom: 80px; }
        .breadcrumb-wrapper {
            border-bottom: 1px solid var(--border-color);
            padding: 20px 0;
            margin-bottom: 50px;
        }
        .breadcrumb {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            font-weight: 700;
            font-family: 'Quicksand';
            color: var(--primary);
        }
        .breadcrumb span.home-link { color: var(--primary); list-style:none; }
        .breadcrumb span:not(.home-link) { color: var(--text-muted); }
        .breadcrumb span.current { color: var(--primary); }

        .shop-layout {
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 30px;
        }

        .filter-card {
            background: white;
            border: 1px solid var(--border-color);
            border-radius: 15px;
            padding: 30px;
            box-shadow: var(--shadow-sm);
            margin-bottom: 30px;
        }
        .filter-card h3 {
            font-size: 24px;
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--border-color);
            position: relative;
        }
        .filter-card h3::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 80px;
            height: 2px;
            background: #BCE3C9;
        }
        .filter-list li {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 10px;
            border: 1px solid var(--border-color);
            border-radius: 5px;
            margin-bottom: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition-fast);
        }
        .filter-list li:hover {
            border-color: #BCE3C9;
            box-shadow: var(--shadow-sm);
            color: var(--primary);
        }
        .filter-list li img { width: 30px; }
        .filter-list li .count {
            margin-left: auto;
            background: #DEF9EC;
            color: var(--primary);
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }

        .sub-filter { margin-top: 30px; }
        .sub-filter h4 { margin-bottom: 15px; font-size: 18px; }
        .sub-filter ul li { margin-bottom: 10px; display: flex; align-items: center; gap: 10px; }

        .sidebar-banner {
            height: 400px;
            background: url('https://nest-frontend-v6.netlify.app/assets/imgs/banner/banner-11.png') no-repeat center bottom;
            background-size: cover;
            border-radius: 15px;
            padding: 40px;
        }
        .sidebar-banner .primary { color: var(--primary); font-weight: 700; font-family: 'Quicksand'; display: block; margin-bottom: 10px; }
        .sidebar-banner h3 { font-size: 28px; }

        .shop-toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        .toolbar-right { display: flex; gap: 20px; align-items: center; }
        .view-mode { display: flex; gap: 10px; }
        .view-mode button {
            width: 40px;
            height: 40px;
            border: 1px solid var(--border-color);
            background: white;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .view-mode button.active { background: var(--primary); color: white; border-color: var(--primary); }
        .sort-dropdown {
            height: 40px;
            padding: 0 15px;
            border: 1px solid var(--border-color);
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            background: white;
            cursor: pointer;
        }

        .shop-products-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
        }

        .pagination {
            display: flex;
            gap: 10px;
            margin-top: 50px;
            justify-content: center;
        }
        .page-btn {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--border-color);
            background: white;
            font-weight: 700;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition-fast);
        }
        .page-btn.active, .page-btn:hover {
            background: var(--primary);
            color: white;
            border-color: var(--primary);
        }
      ` }} />
    </div>
  );
};

const ArrowRight = ({ size }) => <ChevronRight size={size} />;

export default ProductPage;
