import React, { useState } from 'react';

const ProductDetailReview = () => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [sortBy, setSortBy] = useState('latest');

  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      rating: 4.5,
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      date: "August 14, 2023",
      verified: true
    },
    {
      id: 2,
      name: "Alex M.",
      rating: 4,
      review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      date: "August 15, 2023",
      verified: true
    },
    {
      id: 3,
      name: "Ethan R.",
      rating: 3.5,
      review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      date: "August 16, 2023",
      verified: true
    },
    {
      id: 4,
      name: "Olivia P.",
      rating: 4,
      review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
      date: "August 17, 2023",
      verified: true
    },
    {
      id: 5,
      name: "Liam K.",
      rating: 4,
      review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      date: "August 18, 2023",
      verified: true
    },
    {
      id: 6,
      name: "Ava H.",
      rating: 4.5,
      review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
      date: "August 19, 2023",
      verified: true
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="product-detail-review-star filled">★</span>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half" className="product-detail-review-star filled">★</span>
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="product-detail-review-star empty">★</span>
      );
    }
    
    return stars;
  };

  return (
    <div className="product-detail-review-container">
      {/* Tabs */}
      <div className="product-detail-review-tabs">
        <button 
          className={`product-detail-review-tab ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Product Details
        </button>
        <button 
          className={`product-detail-review-tab ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Rating & Reviews
        </button>
        <button 
          className={`product-detail-review-tab ${activeTab === 'faqs' ? 'active' : ''}`}
          onClick={() => setActiveTab('faqs')}
        >
          FAQs
        </button>
      </div>

      {activeTab === 'reviews' && (
        <>
          {/* Header */}
          <div className="product-detail-review-header">
            <div className="product-detail-review-title-section">
              <h3 className="product-detail-review-title">All Reviews</h3>
              <span className="product-detail-review-count">(451)</span>
            </div>
            
            <div className="product-detail-review-controls">
              <button className="product-detail-review-filter-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <select className="product-detail-review-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="latest">Latest</option>
                <option value="oldest">Oldest</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
              
              <button className="product-detail-review-write-button">
                Write a Review
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="product-detail-review-grid">
            {reviews.map((review) => (
              <div key={review.id} className="product-detail-review-card">
                <div className="product-detail-review-card-header">
                  <div>
                    <div className="product-detail-review-rating">
                      {renderStars(review.rating)}
                    </div>
                    <div className="product-detail-reviewer-info">
                      <span className="product-detail-reviewer-name">{review.name}</span>
                      {review.verified && (
                        <div className="product-detail-verified-badge">
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                            <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  <button className="product-detail-review-more-button">⋯</button>
                </div>
                
                <p className="product-detail-review-text">"{review.review}"</p>
                <p className="product-detail-review-date">Posted on {review.date}</p>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="product-detail-review-load-more">
            <button className="product-detail-review-load-more-button">
              Load More Reviews
            </button>
          </div>
        </>
      )}

      {activeTab === 'details' && (
        <div className="product-detail-review-tab-content">
          <h3>Product Details</h3>
          <p>Product details content would go here...</p>
        </div>
      )}

      {activeTab === 'faqs' && (
        <div className="product-detail-review-tab-content">
          <h3>Frequently Asked Questions</h3>
          <p>FAQ content would go here...</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailReview;