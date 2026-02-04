import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h2 className="newsletter-title">
              STAY UPTO DATE ABOUT<br />
              OUR LATEST OFFERS
            </h2>
          </div>
          <div className="newsletter-form">
            <div className="email-input-wrapper">
              <svg className="email-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="email-input"
              />
            </div>
            <button className="subscribe-btn">Subscribe to Newsletter</button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
          <div className="row">
            {/* Brand Section */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-brand">
                <h3 className="brand-name">SHOP.CO</h3>
                <p className="brand-description">
                  We have clothes that suits your style and which you're proud to wear. From women to men.
                </p>
                <div className="social-links">
                  <a href="#" className="social-link twitter">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M23 3A10.9 10.9 0 0 1 20.1 4.7A4.48 4.48 0 0 0 22.46 2A9 9 0 0 1 19.36 3.74A4.48 4.48 0 0 0 12.93 7.36V8.1A10.66 10.66 0 0 1 3 4S-1 13 8 17A11.64 11.64 0 0 1 0 19C9 24 20 19 20 7.5V7A7.72 7.72 0 0 0 23 3Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link facebook">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" stroke="currentColor" strokeWidth="2"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link github">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19C4 20.5 4 16.5 2 16M22 16V19.13A2.38 2.38 0 0 1 20.77 21.5C20.14 21.81 19.47 22 18.8 22H5.2C4.53 22 3.86 21.81 3.23 21.5A2.38 2.38 0 0 1 2 19.13V16M22 16L20.5 10.5L18 9L15.5 10.5L14 16M10 16L8.5 10.5L6 9L3.5 10.5L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-links">
                <h4 className="links-title">COMPANY</h4>
                <ul className="links-list">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Works</a></li>
                  <li><a href="#">Career</a></li>
                </ul>
              </div>
            </div>

            {/* Help Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-links">
                <h4 className="links-title">HELP</h4>
                <ul className="links-list">
                  <li><a href="#">Customer Support</a></li>
                  <li><a href="#">Delivery Details</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            {/* FAQ Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <div className="footer-links">
                <h4 className="links-title">FAQ</h4>
                <ul className="links-list">
                  <li><a href="#">Account</a></li>
                  <li><a href="#">Manage Deliveries</a></li>
                  <li><a href="#">Orders</a></li>
                  <li><a href="#">Payments</a></li>
                </ul>
              </div>
            </div>

            {/* Resources Links */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="footer-links">
                <h4 className="links-title">RESOURCES</h4>
                <ul className="links-list">
                  <li><a href="#">Free eBooks</a></li>
                  <li><a href="#">Development Tutorial</a></li>
                  <li><a href="#">How to - Blog</a></li>
                  <li><a href="#">Youtube Playlist</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="payment-methods">
              <img src="https://via.placeholder.com/46x30/1a1f71/ffffff?text=VISA" alt="Visa" className="payment-icon" />
              <img src="https://via.placeholder.com/46x30/eb001b/ffffff?text=MC" alt="Mastercard" className="payment-icon" />
              <img src="https://via.placeholder.com/46x30/003087/ffffff?text=PP" alt="PayPal" className="payment-icon" />
              <img src="https://via.placeholder.com/46x30/000000/ffffff?text=AP" alt="Apple Pay" className="payment-icon" />
              <img src="https://via.placeholder.com/46x30/00d4aa/ffffff?text=GP" alt="Google Pay" className="payment-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;