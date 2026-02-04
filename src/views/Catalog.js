import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import mockData from '../mock_data.json';

const Catalog = () => {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Most Popular');
  const [filters, setFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const productsPerPage = 9;

  // Get category display name
  const getCategoryDisplayName = (cat) => {
    if (!cat) return 'All Products';
    switch (cat.toLowerCase()) {
      case 'new-arrivals':
        return 'New Arrivals';
      case 'on-sale':
      case 'sale':
        return 'On Sale';
      default:
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }
  };

  const categoryDisplayName = getCategoryDisplayName(category);

  useEffect(() => {
    // Combine all products from different sections
    const combinedProducts = [
      ...mockData.newArrivals,
      ...mockData.topSelling,
      ...mockData.allProducts
    ];
    
    // Filter by category if specified
    let categoryProducts = combinedProducts;
    if (category) {
      categoryProducts = combinedProducts.filter(product => {
        const productCategory = product.category?.toLowerCase();
        const productGender = product.gender?.toLowerCase();
        const productStyle = product.style?.toLowerCase();
        const urlCategory = category.toLowerCase();
        
        // Map categories to product types
        switch (urlCategory) {
          case 'men':
            return productGender === 'men' || productGender === 'unisex';
          case 'women':
            return productGender === 'women' || productGender === 'unisex';
          case 'kids':
            return productGender === 'kids';
          case 'accessories':
            return productCategory === 'accessories';
          case 'shoes':
            return productCategory === 'shoes';
          case 'casual':
            return productStyle === 'casual';
          case 'formal':
            return productStyle === 'formal';
          case 'party':
            return productStyle === 'party';
          case 'gym':
            return productStyle === 'gym';
          case 'new-arrivals':
            // Show products from newArrivals section
            return mockData.newArrivals.some(newProduct => newProduct.id === product.id);
          case 'sale':
          case 'on-sale':
            // Show products with discounts
            return product.discount && product.discount > 0;
          case 'brands':
            // Show all products (you can customize this based on specific brands)
            return true;
          default:
            return true;
        }
      });
    }
    
    setAllProducts(categoryProducts);
    setFilteredProducts(categoryProducts);
  }, [category]);

  useEffect(() => {
    applyFiltersAndSort();
  }, [filters, sortBy, allProducts]);

  const applyFiltersAndSort = () => {
    let filtered = [...allProducts];

    // Apply filters
    if (filters.style && filters.style.length > 0) {
      filtered = filtered.filter(product => 
        filters.style.some(style => 
          product.category?.toLowerCase().includes(style.toLowerCase()) ||
          product.title?.toLowerCase().includes(style.toLowerCase())
        )
      );
    }

    if (filters.price) {
      filtered = filtered.filter(product => 
        product.price >= filters.price.min && product.price <= filters.price.max
      );
    }

    if (filters.colors && filters.colors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors && product.colors.some(color => 
          filters.colors.includes(color.toLowerCase())
        )
      );
    }

    if (filters.size && filters.size.length > 0) {
      filtered = filtered.filter(product => 
        product.sizes && product.sizes.some(size => 
          filters.size.includes(size)
        )
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'Most Popular':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'Price: Low to High':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'Newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const closeFilters = () => {
    setIsFilterOpen(false);
  };

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPagination = () => {
    const pages = [];
    const maxVisiblePages = 7;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="catalog-page">
      <TopNav />
      <Navbar />
      
      <div className="catalog-container">
        {/* Breadcrumb */}
        <div className="catalog-breadcrumb">
          <span>Home</span>
          <span>›</span>
          <span>{categoryDisplayName}</span>
        </div>

        <div className="catalog-content">
          {/* Filters Sidebar */}
          <div className={`catalog-sidebar ${isFilterOpen ? 'mobile-open' : ''}`}>
            <Filters onFiltersChange={handleFiltersChange} onClose={closeFilters} />
          </div>

          {/* Mobile Filter Overlay */}
          {isFilterOpen && <div className="mobile-filter-overlay" onClick={closeFilters}></div>}

          {/* Main Content */}
          <div className="catalog-main">
            {/* Header */}
            <div className="catalog-header">
              <div className="catalog-title-section">
                <h1 className="catalog-title">{categoryDisplayName}</h1>
                <button className="mobile-filter-toggle" onClick={toggleFilters}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Filters
                </button>
              </div>
              <div className="catalog-controls">
                <div className="catalog-results">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} Products
                </div>
                <div className="catalog-sort">
                  <span>Sort by:</span>
                  <select 
                    value={sortBy} 
                    onChange={handleSortChange}
                    className="sort-select"
                  >
                    <option value="Most Popular">Most Popular</option>
                    <option value="Price: Low to High">Price: Low to High</option>
                    <option value="Price: High to Low">Price: High to Low</option>
                    <option value="Newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="catalog-products-grid">
              {currentProducts.map(product => (
                <ProductCard
                  key={product.id}
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
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="catalog-pagination">
                <button 
                  className="pagination-btn pagination-prev"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Previous
                </button>

                <div className="pagination-numbers">
                  {renderPagination().map((page, index) => (
                    <button
                      key={index}
                      className={`pagination-number ${page === currentPage ? 'active' : ''} ${page === '...' ? 'dots' : ''}`}
                      onClick={() => typeof page === 'number' && handlePageChange(page)}
                      disabled={page === '...'}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button 
                  className="pagination-btn pagination-next"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Catalog;