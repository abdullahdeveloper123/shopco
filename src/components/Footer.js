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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.564H7.078V12.073H10.125V9.405C10.125 6.348 11.917 4.688 14.658 4.688C15.97 4.688 17.344 4.922 17.344 4.922V7.875H15.83C14.34 7.875 13.875 8.8 13.875 9.75V12.073H17.203L16.671 15.564H13.875V24C19.612 23.094 24 18.1 24 12.073Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z" fill="currentColor"/>
                    </svg>
                  </a>
                  <a href="#" className="social-link github">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="currentColor"/>
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
              {/* Visa */}
              <div className="payment-icon visa">
                <svg width="46" height="30" viewBox="0 0 46 30" fill="none">
                  <rect width="46" height="30" rx="5" fill="#1A1F71"/>
                  <path d="M18.5 8.5H21.5L19.8 21.5H16.8L18.5 8.5ZM13.2 8.5L10.3 18.2L9.9 16.1L8.7 10.2C8.5 9.2 7.8 8.6 6.9 8.5H2.1L2 8.8C3.4 9.1 4.7 9.6 5.8 10.3L8.2 21.5H11.4L16.4 8.5H13.2ZM35.8 21.5H38.7L36.2 8.5H33.6C32.8 8.5 32.1 9 31.8 9.7L27.1 21.5H30.3L31 19.7H34.9L35.3 21.5H35.8ZM31.8 17.2L33.4 12.8L34.3 17.2H31.8ZM28.1 12.1L28.6 9.2C27.8 8.9 26.8 8.6 25.6 8.6C22.5 8.6 20.3 10.2 20.3 12.5C20.3 14.2 21.8 15.1 22.9 15.7C24.1 16.3 24.5 16.7 24.5 17.3C24.5 18.2 23.4 18.6 22.4 18.6C21.1 18.6 20.4 18.4 19.4 17.9L18.9 20.9C19.9 21.3 21.6 21.6 23.4 21.6C26.8 21.6 28.9 20.1 28.9 17.6C28.9 16.3 28.1 15.4 26.3 14.6C25.3 14.1 24.7 13.7 24.7 13C24.7 12.4 25.4 11.8 26.9 11.8C27.8 11.8 28.6 12 29.2 12.3L28.1 12.1Z" fill="white"/>
                </svg>
              </div>
              
              {/* Mastercard */}
              <div className="payment-icon mastercard">
                <svg width="46" height="30" viewBox="0 0 46 30" fill="none">
                  <rect width="46" height="30" rx="5" fill="#EB001B"/>
                  <circle cx="18" cy="15" r="9" fill="#FF5F00"/>
                  <circle cx="28" cy="15" r="9" fill="#F79E1B"/>
                  <path d="M23 8.5C25.5 10.4 27 13 27 15.9C27 18.8 25.5 21.4 23 23.3C20.5 21.4 19 18.8 19 15.9C19 13 20.5 10.4 23 8.5Z" fill="#FF5F00"/>
                </svg>
              </div>
              
              {/* PayPal */}
              <div className="payment-icon paypal">
                <svg width="46" height="30" viewBox="0 0 46 30" fill="none">
                  <rect width="46" height="30" rx="5" fill="#003087"/>
                  <path d="M16.8 8.5C17.8 8.5 18.7 8.6 19.5 8.9C21.8 9.7 22.8 11.8 22.4 14.5C21.9 17.8 19.4 19.5 16.1 19.5H14.2C13.8 19.5 13.5 19.8 13.4 20.2L12.8 23.5C12.7 23.8 12.5 24 12.2 24H9.8C9.6 24 9.5 23.8 9.6 23.6L11.8 9.1C11.9 8.7 12.2 8.5 12.6 8.5H16.8ZM28.2 8.5C29.2 8.5 30.1 8.6 30.9 8.9C33.2 9.7 34.2 11.8 33.8 14.5C33.3 17.8 30.8 19.5 27.5 19.5H25.6C25.2 19.5 24.9 19.8 24.8 20.2L24.2 23.5C24.1 23.8 23.9 24 23.6 24H21.2C21 24 20.9 23.8 21 23.6L23.2 9.1C23.3 8.7 23.6 8.5 24 8.5H28.2Z" fill="#0070BA"/>
                  <path d="M35.2 8.5C36.2 8.5 37.1 8.6 37.9 8.9C40.2 9.7 41.2 11.8 40.8 14.5C40.3 17.8 37.8 19.5 34.5 19.5H32.6C32.2 19.5 31.9 19.8 31.8 20.2L31.2 23.5C31.1 23.8 30.9 24 30.6 24H28.2C28 24 27.9 23.8 28 23.6L30.2 9.1C30.3 8.7 30.6 8.5 31 8.5H35.2Z" fill="#009CDE"/>
                </svg>
              </div>
              
              {/* Apple Pay */}
              <div className="payment-icon apple-pay">
                <svg width="46" height="30" viewBox="0 0 46 30" fill="none">
                  <rect width="46" height="30" rx="5" fill="#000000"/>
                  <path d="M15.2 10.8C15.8 10.1 16.2 9.2 16.1 8.3C15.3 8.4 14.3 8.9 13.7 9.6C13.2 10.2 12.7 11.1 12.8 12C13.7 12.1 14.6 11.5 15.2 10.8ZM16.1 12.1C14.8 12 13.7 12.8 13.1 12.8C12.4 12.8 11.5 12.1 10.5 12.1C9.2 12.1 7.9 12.9 7.2 14.2C5.8 16.7 6.8 20.4 8.2 22.4C8.8 23.4 9.6 24.5 10.6 24.5C11.6 24.4 12 23.8 13.2 23.8C14.4 23.8 14.7 24.4 15.8 24.4C16.9 24.4 17.6 23.4 18.2 22.4C18.9 21.3 19.2 20.2 19.2 20.1C19.2 20.1 17.1 19.3 17.1 16.9C17.1 14.9 18.7 13.9 18.8 13.9C17.9 12.5 16.5 12.2 16.1 12.1ZM23.5 8.5V24.2H25.2V19.8H28.1C30.5 19.8 32.2 18.2 32.2 15.6C32.2 13 30.6 11.4 28.2 11.4H23.5V8.5ZM25.2 13V18.2H27.7C29.3 18.2 30.4 17.2 30.4 15.6C30.4 14 29.3 13 27.7 13H25.2ZM33.5 20.5C33.5 22.3 34.9 23.4 37 23.4C39.1 23.4 40.5 22.3 40.5 20.5C40.5 18.7 39.1 17.6 37 17.6C34.9 17.6 33.5 18.7 33.5 20.5ZM35.2 20.5C35.2 19.5 35.9 18.9 37 18.9C38.1 18.9 38.8 19.5 38.8 20.5C38.8 21.5 38.1 22.1 37 22.1C35.9 22.1 35.2 21.5 35.2 20.5Z" fill="white"/>
                </svg>
              </div>
              
              {/* Google Pay */}
              <div className="payment-icon google-pay">
                <svg width="46" height="30" viewBox="0 0 46 30" fill="none">
                  <rect width="46" height="30" rx="5" fill="#4285F4"/>
                  <path d="M20.8 15.5V17.2H24.1C24 18.1 23.4 19.2 22.1 19.2C20.6 19.2 19.4 18 19.4 16.4C19.4 14.8 20.6 13.6 22.1 13.6C22.9 13.6 23.5 13.9 23.9 14.3L25.2 13C24.4 12.3 23.3 11.9 22.1 11.9C19.7 11.9 17.7 13.9 17.7 16.4C17.7 18.9 19.7 20.9 22.1 20.9C24.6 20.9 26.2 19.4 26.2 16.5C26.2 16.1 26.2 15.8 26.1 15.5H20.8ZM28.5 12.1V20.7H30.1V17.4H33.5V15.9H30.1V13.6H34V12.1H28.5ZM8.5 15.5C8.5 13.9 9.7 12.7 11.3 12.7C12.1 12.7 12.7 13 13.1 13.4L14.4 12.1C13.6 11.4 12.5 11 11.3 11C8.9 11 7 12.9 7 15.4C7 17.9 8.9 19.8 11.3 19.8C12.5 19.8 13.6 19.4 14.4 18.7L13.1 17.4C12.7 17.8 12.1 18.1 11.3 18.1C9.7 18.1 8.5 16.9 8.5 15.5Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;