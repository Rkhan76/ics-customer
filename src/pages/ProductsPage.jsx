import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight, Eye, Star } from 'lucide-react';

const categories = [
  "Burger", "Chicken and Poultry",
  "Cooking Ingredients", "Dairy & Egg", "Dessertand Ice cream", "Doners & Kebabs",
  "Drinks", "Fish and Seafood", "Flour", "Fruits and Nuts", "Hygiene",
  "Kitchen Equipments", "Meat", "Oil", "Packaging", "Pastry", "Potato",
  "Rice, pasta & Dried Foods", "Sauces Dressing and Relishes", "Sugar and Sweeterners",
  "Vegetables", "Vegetarian and Vegan", "chocolates and snacks", "real-bakery", "stationery"
];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/products/${selectedCategory}.json`);
        const data = await response.json();
        const productsWithRatings = data.map(p => ({
          ...p,
          rating: (Math.random() * (5 - 3) + 3).toFixed(1)
        }));
        setProducts(productsWithRatings);
        setCurrentPage(1);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const filteredProducts = products.filter(p => 
    p["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="products-page">
      {/* Hero / Breadcrumb */}
      <section className="products-hero py-40" style={{ background: '#F2FCE4', marginTop: '20px' }}>
        <div className="container">
          <h1 style={{ fontSize: '36px', color: 'var(--secondary)', marginBottom: '10px' }}>{selectedCategory}</h1>
          <nav className="breadcrumb" style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--primary)', fontWeight: '700' }}>Home</Link> 
            <span style={{ margin: '0 10px' }}>/</span> 
            <span style={{ color: 'var(--secondary)' }}>{selectedCategory}</span>
          </nav>
        </div>
      </section>

      <div className="products-container py-60">
        <div className="container products-layout">
          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-widget">
              <h3 className="widget-title">Category</h3>
              <ul className="category-list">
                {categories.map((cat, i) => (
                  <li key={i} className={selectedCategory === cat ? 'active' : ''} onClick={() => setSelectedCategory(cat)}>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-widget">
              <h3 className="widget-title">Quick Search</h3>
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="Find product..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={18} className="search-icon" />
              </div>
            </div>

            <div className="promo-banner" style={{ background: '#DEF9EC', padding: '30px', borderRadius: '20px' }}>
              <h4 style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '10px' }}>Bulk Orders?</h4>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>Contact our team for specialized catering quotes.</p>
              <Link to="/#contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>Contact Us</Link>
            </div>
          </aside>

          {/* Main Content */}
          <main className="product-area">
            <div className="product-topbar">
              <div className="total-results">
                We found <span style={{ color: 'var(--primary)', fontWeight: '800' }}>{filteredProducts.length}</span> items in this category.
              </div>
              <div className="view-options">
                <select className="sort-select">
                  <option>Sort by: Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="loading-state" style={{ padding: '100px', textAlign: 'center' }}>
                <div className="spinner"></div>
                <p>Loading premium products...</p>
              </div>
            ) : (
              <>
                <div className="products-grid">
                  {currentProducts.map((product, i) => (
                    <div key={i} className="product-card">
                      <div className="product-img-wrapper">
                        <img 
                          src={product["Product Image Url"] || 'https://via.placeholder.com/300?text=No+Image'} 
                          alt={product["Product Name"]} 
                          onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=No+Image' }}
                        />
                        <div className="hover-actions">
                          <button className="action-btn"><Eye size={18} /></button>
                        </div>
                      </div>
                      <div className="product-details">
                        <span className="cat-label">{selectedCategory}</span>
                        <h4 className="p-name">{product["Product Name"]}</h4>
                        <div className="p-meta">
                          <span>Size: {product["pack size"]}</span>
                        </div>
                        <div className="product-footer">
                          <div className="rating-row">
                            <div className="stars">
                              {[...Array(5)].map((_, starIdx) => (
                                <Star 
                                  key={starIdx} 
                                  size={14} 
                                  fill={starIdx < Math.floor(product.rating) ? "#ffc107" : "none"}
                                  color={starIdx < Math.floor(product.rating) ? "#ffc107" : "#e4e4e4"} 
                                />
                              ))}
                            </div>
                            <span className="rating-num">({product.rating})</span>
                          </div>
                          <Link to="/#contact" className="btn-inquiry">Inquire Now</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="pagination">
                    <button className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => currentPage > 1 && paginate(currentPage - 1)}><ChevronLeft /></button>
                    {[...Array(totalPages)].map((_, i) => (
                      (i + 1 === 1 || i + 1 === totalPages || (i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1)) ? (
                        <button key={i} className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`} onClick={() => paginate(i + 1)}>{i + 1}</button>
                      ) : (
                        (i + 1 === 2 || i + 1 === totalPages - 1) ? <span key={i}>...</span> : null
                      )
                    ))}
                    <button className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`} onClick={() => currentPage < totalPages && paginate(currentPage + 1)}><ChevronRight /></button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .products-page { min-height: 100vh; background: #fff; }
        .py-40 { padding: 40px 0; }
        .py-60 { padding: 60px 0; }
        
        .products-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
        }

        /* Sidebar Widgets */
        .sidebar { display: flex; flex-direction: column; gap: 30px; }
        .sidebar-widget {
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #f1f1f1;
          box-shadow: 5px 5px 15px rgba(0,0,0,0.02);
        }
        .widget-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #f1f1f1;
          position: relative;
        }
        .widget-title::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 50px;
          height: 2px;
          background: var(--primary);
        }

        .category-list { list-style: none; padding: 0; max-height: 500px; overflow-y: auto; scrollbar-width: thin; }
        .category-list li {
          padding: 8px 12px;
          margin-bottom: 5px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          color: var(--secondary);
          transition: 0.2s;
        }
        .category-list li:hover, .category-list li.active {
          background: #F2FCE4;
          color: var(--primary);
          font-weight: 700;
        }

        /* Search Box */
        .search-box { position: relative; }
        .search-box input {
          width: 100%;
          padding: 10px 15px;
          padding-right: 40px;
          border-radius: 10px;
          border: 1px solid #ddd;
          outline: none;
        }
        .search-icon { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: #999; }

        /* Product Topbar */
        .product-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding: 15px 25px;
          background: #f8f9fa;
          border-radius: 15px;
        }
        .total-results { font-size: 14px; color: #666; }
        .sort-select { padding: 8px 15px; border-radius: 8px; border: 1px solid #ddd; outline: none; }

        /* Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        /* Product Card */
        .product-card {
          border: 1px solid #f1f1f1;
          border-radius: 15px;
          overflow: hidden;
          background: white;
          transition: 0.3s;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover { border-color: var(--primary); box-shadow: 0 10px 25px rgba(0,0,0,0.05); transform: translateY(-5px); }
        
        .product-img-wrapper {
          height: 180px;
          padding: 20px;
          background: #fdfdfd;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .product-img-wrapper img { max-width: 100%; max-height: 100%; object-fit: contain; }
        .hover-actions { position: absolute; top: 10px; right: 10px; opacity: 0; transition: 0.3s; }
        .product-card:hover .hover-actions { opacity: 1; }
        .action-btn { width: 35px; height: 35px; background: #fff; border: none; border-radius: 50%; color: var(--primary); box-shadow: 0 4px 10px rgba(0,0,0,0.1); cursor: pointer; }

        .product-details { padding: 20px; flex: 1; display: flex; flex-direction: column; }
        .cat-label { font-size: 12px; color: #999; }
        .p-name { font-size: 15px; font-weight: 700; color: var(--secondary); margin: 8px 0; min-height: 40px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .p-meta { font-size: 13px; color: #666; margin-bottom: 15px; }
        .product-footer { display: flex; flex-direction: column; gap: 15px; margin-top: auto; }
        .rating-row { display: flex; align-items: center; gap: 8px; }
        .stars { display: flex; gap: 2px; }
        .rating-num { font-size: 13px; color: #999; font-weight: 600; }
        .btn-inquiry { 
          background: #DEF9EC; 
          color: var(--primary); 
          text-align: center;
          text-decoration: none;
          padding: 10px; 
          border-radius: 8px; 
          font-size: 13px; 
          font-weight: 700; 
          transition: 0.3s; 
        }
        .btn-inquiry:hover { background: var(--primary); color: #fff; }

        /* Pagination */
        .pagination { display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 50px; }
        .page-btn { width: 40px; height: 40px; border-radius: 12px; border: 1px solid #f1f1f1; background: #fff; cursor: pointer; transition: 0.3s; display: flex; align-items: center; justify-content: center; font-weight: 700; }
        .page-btn:hover, .page-btn.active { background: var(--primary); color: #fff; border-color: var(--primary); }
        .page-btn.disabled { opacity: 0.5; cursor: not-allowed; }

        @media (min-width: 1400px) {
          .container { max-width: 1320px; }
          .products-grid { grid-template-columns: repeat(4, 1fr); }
        }

        @media (max-width: 1200px) {
          .products-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 991px) {
          .products-layout { 
            grid-template-columns: 1fr; 
            gap: 40px;
          }
          .sidebar { 
            order: 1; 
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .sidebar-widget { margin-bottom: 0; }
          .product-area { order: 2; }
          .products-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .products-hero h1 { font-size: 28px !important; }
        }

        @media (max-width: 768px) {
          .sidebar { grid-template-columns: 1fr; }
          .products-grid { grid-template-columns: repeat(2, 1fr); }
          .product-img-wrapper { height: 150px; }
          .p-name { font-size: 14px; min-height: 38px; }
        }

        @media (max-width: 576px) {
          .products-grid { grid-template-columns: 1fr; }
          .product-topbar { 
            flex-direction: column; 
            align-items: stretch; 
            gap: 15px; 
            padding: 15px;
          }
          .sort-select { width: 100%; }
          .total-results { text-align: center; }
          .products-hero { padding: 30px 0 !important; }
          .products-hero h1 { font-size: 24px !important; }
          .pagination { gap: 5px; }
          .page-btn { width: 35px; height: 35px; font-size: 13px; }
        }
      ` }} />
    </div>
  );
};

export default ProductsPage;
