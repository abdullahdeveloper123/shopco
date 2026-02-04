import React from 'react';
import heroImage from '../assets/img/hero-model.jpg';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              FIND CLOTHES<br />
              THAT MATCHES<br />
              YOUR STYLE
            </h1>
            <p className="hero-description">
              Browse through our diverse range of meticulously crafted garments, designed
              to bring out your individuality and cater to your sense of style.
            </p>
            <button className="hero-cta">
              Shop Now
            </button>

            <div className="hero-stats">
              <div className="mob_stats_wrapper_1">
                <div className="stat-item">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">International Brands</span>
                </div>

                <div className="stat-item">
                  <span className="stat-number">2,000+</span>
                  <span className="stat-label">High-Quality Products</span>
                </div>
              </div>
              <div className="mob_stats_wrapper_2">
                <div className="stat-item">
                  <span className="stat-number">30,000+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                </div>

            </div>
          </div>

          <div className="hero-image">
            <div className="hero-image-placeholder">
              <div className="image-placeholder">
                <img src={heroImage} alt="" />
              </div>
            </div>

            {/* Decorative Stars */}
            <div className="star-hero star-1">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path d="M28 0L34.4 21.6L56 28L34.4 34.4L28 56L21.6 34.4L0 28L21.6 21.6L28 0Z" fill="currentColor" />
              </svg>
            </div>
            <div className="star-hero star-2">
              <svg width="104" height="104" viewBox="0 0 104 104" fill="none">
                <path d="M52 0L63.7 40.3L104 52L63.7 63.7L52 104L40.3 63.7L0 52L40.3 40.3L52 0Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;