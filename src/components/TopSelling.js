import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import mockData from '../mock_data.json';

const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    // Load products from mock data
    setAllProducts(mockData.topSelling);
  }, []);

  // Show only 2 products on mobile, 4 on desktop
  const isMobile = window.innerWidth <= 768;
  const initialCount = isMobile ? 2 : 4;
  const productsToShow = showAll ? allProducts : allProducts.slice(0, initialCount);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="top-selling">
      <div className="container">
        <h2 className="section-title">TOP SELLING</h2>
        
        <div className="products-container">
          <div className="products-grid">
            {productsToShow.map(product => (
              <div key={product.id} className="product-item">
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                  colors={product.colors}
                  sizes={product.sizes}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="view-all-container">
          <button className="view-all-btn" onClick={handleViewAll}>
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopSelling;