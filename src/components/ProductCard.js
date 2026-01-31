import React from 'react';
import './ProductCard.css'


const ProductCard = ({ 
  image, 
  title, 
  rating = 4.5, 
  maxRating = 5, 
  price, 
  originalPrice,
  discount 
}) => {
  // Generate star rating display
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} style={{ fontSize: '18.49px', color: '#ffc633', lineHeight: 1 }}>★</span>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half" style={{ fontSize: '18.49px', color: '#ffc633', lineHeight: 1, position: 'relative' }}>★</span>
      );
    }
    
    const emptyStars = maxRating - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} style={{ fontSize: '18.49px', color: '#d1d5db', lineHeight: 1 }}>★</span>
      );
    }
    
    return stars;
  };

  const cardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '295px',
    border: 'none',
    boxShadow: 'none'
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '298px',
    background: '#f0f0f0',
    borderRadius: '20px',
    overflow: 'hidden',
    marginBottom: '16px'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  };

  const discountBadgeStyle = {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: '#ff3333',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '62px',
    fontSize: '12px',
    fontWeight: '500'
  };

  const infoStyle = {
    padding: '0 4px'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#000000',
    margin: '0 0 8px 0',
    lineHeight: '1.2',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '13px',
    marginBottom: '8px'
  };

  const starsStyle = {
    display: 'flex',
    gap: '1px'
  };

  const ratingTextStyle = {
    fontSize: '14px',
    color: '#000000',
    opacity: '0.6'
  };

  const pricingStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  };

  const currentPriceStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#000000'
  };

  const originalPriceStyle = {
    fontSize: '24px',
    fontWeight: '700',
    color: '#000000',
    opacity: '0.4',
    textDecoration: 'line-through'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={imageContainerStyle}>
        <img 
          src={image} 
          alt={title} 
          style={imageStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        {discount && (
          <div style={discountBadgeStyle}>-{discount}%</div>
        )}
      </div>
      
      <div style={infoStyle}>
        <h3 style={titleStyle}>{title}</h3>
        
        <div style={ratingStyle}>
          <div style={starsStyle}>
            {renderStars()}
          </div>
          <span style={ratingTextStyle}>{rating}/{maxRating}</span>
        </div>
        
        <div style={pricingStyle}>
          <span style={currentPriceStyle}>${price}</span>
          {originalPrice && (
            <span style={originalPriceStyle}>${originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;