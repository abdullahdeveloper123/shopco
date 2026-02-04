import React, { useState } from 'react';

const Filters = ({ onFiltersChange, onClose }) => {
  const [filters, setFilters] = useState({
    style: [],
    price: { min: 50, max: 200 },
    colors: [],
    size: [],
    dressStyle: []
  });

  const [isStyleOpen, setIsStyleOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isDressStyleOpen, setIsDressStyleOpen] = useState(true);

  const styleOptions = ['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'];
  const colorOptions = [
    { name: 'Green', value: 'green', color: '#00C12B' },
    { name: 'Red', value: 'red', color: '#F50606' },
    { name: 'Yellow', value: 'yellow', color: '#F5DD06' },
    { name: 'Orange', value: 'orange', color: '#F57906' },
    { name: 'Cyan', value: 'cyan', color: '#06CAF5' },
    { name: 'Blue', value: 'blue', color: '#063AF5' },
    { name: 'Purple', value: 'purple', color: '#7D06F5' },
    { name: 'Pink', value: 'pink', color: '#F506A4' },
    { name: 'White', value: 'white', color: '#FFFFFF' },
    { name: 'Black', value: 'black', color: '#000000' }
  ];
  const sizeOptions = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large', '4X-Large'];
  const dressStyleOptions = ['Casual', 'Formal', 'Party', 'Gym'];

  const handleStyleChange = (style) => {
    const newStyles = filters.style.includes(style)
      ? filters.style.filter(s => s !== style)
      : [...filters.style, style];
    
    const newFilters = { ...filters, style: newStyles };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handlePriceChange = (type, value) => {
    const newPrice = { ...filters.price, [type]: parseInt(value) };
    const newFilters = { ...filters, price: newPrice };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleColorChange = (color) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    
    const newFilters = { ...filters, colors: newColors };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleSizeChange = (size) => {
    const newSizes = filters.size.includes(size)
      ? filters.size.filter(s => s !== size)
      : [...filters.size, size];
    
    const newFilters = { ...filters, size: newSizes };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const handleDressStyleChange = (style) => {
    const newDressStyles = filters.dressStyle.includes(style)
      ? filters.dressStyle.filter(s => s !== style)
      : [...filters.dressStyle, style];
    
    const newFilters = { ...filters, dressStyle: newDressStyles };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const applyFilters = () => {
    onFiltersChange(filters);
  };

  return (
    <div className="filters-container">
      <div className="filters-header">
        <h3 className="filters-title">Filters</h3>
        <div className="filters-header-actions">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="filters-icon">
            <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <button className="mobile-close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Style Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => setIsStyleOpen(!isStyleOpen)}>
          <span className="filter-label">Style</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`filter-arrow ${isStyleOpen ? 'open' : ''}`}
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {isStyleOpen && (
          <div className="filter-options">
            {styleOptions.map(style => (
              <label key={style} className="filter-option">
                <input
                  type="checkbox"
                  checked={filters.style.includes(style)}
                  onChange={() => handleStyleChange(style)}
                />
                <span className="checkmark"></span>
                <span className="option-text">{style}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => setIsPriceOpen(!isPriceOpen)}>
          <span className="filter-label">Price</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`filter-arrow ${isPriceOpen ? 'open' : ''}`}
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {isPriceOpen && (
          <div className="filter-options">
            <div className="price-range">
              <div className="price-inputs">
                <input
                  type="number"
                  value={filters.price.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  className="price-input"
                  placeholder="Min"
                />
                <span className="price-separator">-</span>
                <input
                  type="number"
                  value={filters.price.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  className="price-input"
                  placeholder="Max"
                />
              </div>
              <div className="price-slider">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={filters.price.min}
                  onChange={(e) => handlePriceChange('min', e.target.value)}
                  className="slider slider-min"
                />
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={filters.price.max}
                  onChange={(e) => handlePriceChange('max', e.target.value)}
                  className="slider slider-max"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Colors Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => setIsColorsOpen(!isColorsOpen)}>
          <span className="filter-label">Colors</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`filter-arrow ${isColorsOpen ? 'open' : ''}`}
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {isColorsOpen && (
          <div className="filter-options">
            <div className="color-options">
              {colorOptions.map(color => (
                <div
                  key={color.value}
                  className={`color-option ${filters.colors.includes(color.value) ? 'selected' : ''}`}
                  style={{ backgroundColor: color.color }}
                  onClick={() => handleColorChange(color.value)}
                  title={color.name}
                >
                  {filters.colors.includes(color.value) && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke={color.value === 'white' ? '#000' : '#fff'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => setIsSizeOpen(!isSizeOpen)}>
          <span className="filter-label">Size</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`filter-arrow ${isSizeOpen ? 'open' : ''}`}
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {isSizeOpen && (
          <div className="filter-options">
            <div className="size-options">
              {sizeOptions.map(size => (
                <button
                  key={size}
                  className={`size-option ${filters.size.includes(size) ? 'selected' : ''}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Dress Style Filter */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => setIsDressStyleOpen(!isDressStyleOpen)}>
          <span className="filter-label">Dress Style</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`filter-arrow ${isDressStyleOpen ? 'open' : ''}`}
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {isDressStyleOpen && (
          <div className="filter-options">
            {dressStyleOptions.map(style => (
              <label key={style} className="filter-option">
                <input
                  type="checkbox"
                  checked={filters.dressStyle.includes(style)}
                  onChange={() => handleDressStyleChange(style)}
                />
                <span className="checkmark"></span>
                <span className="option-text">{style}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Apply Filter Button */}
      <button className="apply-filter-btn" onClick={applyFilters}>
        Apply Filter
      </button>
    </div>
  );
};

export default Filters;