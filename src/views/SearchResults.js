import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import mockData from '../mock_data.json';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get search query from URL parameters
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      performSearch(query);
    } else {
      setSearchResults([]);
      setIsLoading(false);
    }
  }, [query]);

  const performSearch = (searchQuery) => {
    setIsLoading(true);
    
    // Combine all products from different sections
    const allProducts = [
      ...mockData.newArrivals,
      ...mockData.topSelling,
      ...mockData.allProducts
    ];

    // Remove duplicates based on id
    const uniqueProducts = allProducts.filter((product, index, self) => 
      index === self.findIndex(p => p.id === product.id)
    );

    // Search logic - case insensitive search in title, category, style, gender
    const results = uniqueProducts.filter(product => {
      const searchTerm = searchQuery.toLowerCase();
      return (
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.style.toLowerCase().includes(searchTerm) ||
        product.gender.toLowerCase().includes(searchTerm) ||
        (product.brand && product.brand.toLowerCase().includes(searchTerm))
      );
    });

    console.log('Search query:', searchQuery);
    console.log('Total products:', uniqueProducts.length);
    console.log('Search results:', results.length);
    console.log('First result:', results[0]);

    setSearchResults(results);
    setIsLoading(false);
  };

  const handleBackToCatalog = () => {
    navigate('/catalog');
  };

  if (isLoading) {
    return (
      <>
        <TopNav />
        <Navbar />
        <div className="search-results-container">
          <div className="search-loading">
            <div className="loading-spinner"></div>
            <p>Searching...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopNav />
      <Navbar />
      <div className="search-results-container">
        <div className="search-results-header">
          <div className="search-breadcrumb">
            <button onClick={handleBackToCatalog} className="back-to-catalog">
              ← Back to Catalog
            </button>
          </div>
          
          <div className="search-info">
            <h1 className="search-title">
              Search Results for "{query}"
            </h1>
            <p className="search-count">
              {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} found
            </p>
          </div>
        </div>

        {searchResults.length > 0 ? (
          <div className="search-results-grid">
            {searchResults.map((product) => (
              <div key={product.id} className="search-result-item">
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
        ) : (
          <div className="no-results">
            <div className="no-results-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
                <path d="M11 6v10" stroke="currentColor" strokeWidth="2"/>
                <path d="M6 11h10" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="no-results-title">No products found</h3>
            <p className="no-results-text">
              We couldn't find any products matching "{query}". Try searching with different keywords.
            </p>
            <div className="no-results-suggestions">
              <h4>Try searching for:</h4>
              <div className="suggestion-tags">
                <button onClick={() => navigate('/search?q=shirt')} className="suggestion-tag">Shirt</button>
                <button onClick={() => navigate('/search?q=jeans')} className="suggestion-tag">Jeans</button>
                <button onClick={() => navigate('/search?q=dress')} className="suggestion-tag">Dress</button>
                <button onClick={() => navigate('/search?q=shoes')} className="suggestion-tag">Shoes</button>
                <button onClick={() => navigate('/search?q=casual')} className="suggestion-tag">Casual</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchResults;