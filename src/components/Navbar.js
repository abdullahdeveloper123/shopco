import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopDropdown = (e) => {
    e.preventDefault();
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShopDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/" className="logo-link">
            SHOP.CO
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Mobile Search - Only visible in mobile menu */}
          <li className="navbar-item mobile-search">
            <div className="search-container">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="search-icon">
                <path 
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="search-input"
              />
            </div>
          </li>
          
          <li className="navbar-item dropdown" ref={dropdownRef}>
            <a href="#" className="navbar-link" onClick={toggleShopDropdown}>
              Shop
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className={`dropdown-arrow ${isShopDropdownOpen ? 'open' : ''}`}>
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className={`dropdown-menu ${isShopDropdownOpen ? 'show' : ''}`}>
              <a href="/catalog/men" className="dropdown-item" onClick={(e) => { e.preventDefault(); navigate('/catalog/men'); setIsShopDropdownOpen(false); }}>Men</a>
              <a href="/catalog/women" className="dropdown-item" onClick={(e) => { e.preventDefault(); navigate('/catalog/women'); setIsShopDropdownOpen(false); }}>Women</a>
              <a href="/catalog/kids" className="dropdown-item" onClick={(e) => { e.preventDefault(); navigate('/catalog/kids'); setIsShopDropdownOpen(false); }}>Kids</a>
              <a href="/catalog/accessories" className="dropdown-item" onClick={(e) => { e.preventDefault(); navigate('/catalog/accessories'); setIsShopDropdownOpen(false); }}>Accessories</a>
              <a href="/catalog/shoes" className="dropdown-item" onClick={(e) => { e.preventDefault(); navigate('/catalog/shoes'); setIsShopDropdownOpen(false); }}>Shoes</a>
            </div>
          </li>
          <li className="navbar-item">
            <a href="/catalog/sale" className="navbar-link" onClick={(e) => { e.preventDefault(); navigate('/catalog/sale'); }}>On Sale</a>
          </li>
          <li className="navbar-item">
            <a href="/catalog/new-arrivals" className="navbar-link" onClick={(e) => { e.preventDefault(); navigate('/catalog/new-arrivals'); }}>New Arrivals</a>
          </li>
          <li className="navbar-item">
            <a href="/catalog/brands" className="navbar-link" onClick={(e) => { e.preventDefault(); navigate('/catalog/brands'); }}>Brands</a>
          </li>

          {/* Mobile Actions - Only visible in mobile menu */}
          <li className="navbar-item mobile-actions">
            <div className="mobile-action-buttons">
              <a href="/cart" className="mobile-action-link" style={{ position: 'relative' }} onClick={(e) => { e.preventDefault(); handleCartClick(); }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M17 13H7" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Cart</span>
                {cartCount > 0 && (
                  <span 
                    style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '15px',
                      backgroundColor: '#ff3333',
                      color: 'white',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 'bold'
                    }}
                  >
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </a>
              <a href="/profile" className="mobile-action-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path 
                    d="M20 21V19C20 17.9 19.1 17 18 17H6C4.9 17 4 17.9 4 19V21M16 7C16 9.2 14.2 11 12 11C9.8 11 8 9.2 8 7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Profile</span>
              </a>
            </div>
          </li>
        </ul>

        {/* Search Bar */}
        <div className="navbar-search">
          <div className="search-container">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="search-icon">
              <path 
                d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="search-input"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="navbar-actions">
          <button className="action-button cart-button" style={{ position: 'relative' }} onClick={handleCartClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M17 13H7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            {cartCount > 0 && (
              <span 
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-8px',
                  backgroundColor: '#ff3333',
                  color: 'white',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  minWidth: '20px'
                }}
              >
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>
          <button className="action-button profile-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M20 21V19C20 17.9 19.1 17 18 17H6C4.9 17 4 17.9 4 19V21M16 7C16 9.2 14.2 11 12 11C9.8 11 8 9.2 8 7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;