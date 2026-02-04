import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
import CartCard from '../components/CartCard';
import Footer from '../components/Footer';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = getCartTotal();
  const discountAmount = subtotal * (discount / 100);
  const deliveryFee = 15;
  const total = subtotal - discountAmount + deliveryFee;

  const handleApplyPromo = () => {
    // Simple promo code logic - you can expand this
    if (promoCode.toLowerCase() === 'save20') {
      setDiscount(20);
    } else {
      setDiscount(0);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <TopNav />
      <Navbar />
      
      <div className="cart-container">
        {/* Breadcrumb */}
        <div className="cart-breadcrumb">
          <span>Home</span>
          <span>›</span>
          <span>Cart</span>
        </div>

        {/* Main Cart Content */}
        <div className="cart-content">
          {/* Cart Items Section */}
          <div className="cart-items-section">
            <h1 className="cart-title">YOUR CART</h1>
            
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="cart-items-list">
                {cartItems.map((item, index) => (
                  <CartCard
                    key={`${item.id}-${item.color}-${item.size}`}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    size={item.size}
                    color={item.color}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="order-summary-section">
            <div className="order-summary-card">
              <h2 className="order-summary-title">Order Summary</h2>
              
              <div className="order-summary-details">
                <div className="summary-row">
                  <span className="summary-label">Subtotal</span>
                  <span className="summary-value">${subtotal.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="summary-row discount-row">
                    <span className="summary-label">Discount (-{discount}%)</span>
                    <span className="summary-value discount-value">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="summary-row">
                  <span className="summary-label">Delivery Fee</span>
                  <span className="summary-value">${deliveryFee}</span>
                </div>
                
                <div className="summary-divider"></div>
                
                <div className="summary-row total-row">
                  <span className="summary-label">Total</span>
                  <span className="summary-value total-value">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code Section */}
              <div className="promo-code-section">
                <div className="promo-code-input-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="promo-icon">
                    <path d="M21.44 11.05L12.25 1.86C11.46 1.07 10.54 1.07 9.75 1.86L0.56 11.05C-0.23 11.84 -0.23 12.76 0.56 13.55L9.75 22.74C10.54 23.53 11.46 23.53 12.25 22.74L21.44 13.55C22.23 12.76 22.23 11.84 21.44 11.05ZM7 12C5.9 12 5 11.1 5 10S5.9 8 7 8 9 8.9 9 10 8.1 12 7 12ZM17 16C15.9 16 15 15.1 15 14S15.9 12 17 12 19 12.9 19 14 18.1 16 17 16Z" fill="#00000066"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Add promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="promo-code-input"
                  />
                </div>
                <button 
                  className="apply-promo-btn"
                  onClick={handleApplyPromo}
                >
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button 
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Go to Checkout
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;