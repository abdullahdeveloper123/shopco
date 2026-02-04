import React, { useState } from 'react';

const TopNav = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="top-nav">
      <div className="top-nav-container">
        <div className="top-nav-content">
          <span className="top-nav-text">
            Sign up and get 20% off to your first order. 
            <a href="/signup" className="top-nav-link">Sign Up Now</a>
          </span>
        </div>
        <button className="top-nav-close" onClick={handleClose} aria-label="Close banner">
          ✕
        </button>
      </div>
    </div>
  );
};

export default TopNav;