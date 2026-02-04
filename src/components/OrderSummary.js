import React from 'react';
import { useCart } from '../context/CartContext';

const OrderSummary = ({ addressData, shippingData }) => {
  const { cartItems, getCartTotal } = useCart();
  
  const subtotal = getCartTotal();
  const estimatedTax = Math.round(subtotal * 0.08); // 8% tax
  const shippingCost = shippingData?.price || 0;
  const total = subtotal + estimatedTax + shippingCost;

  return (
    <div className="order-summary">
      <h3 className="summary-title">Summary</h3>
      
      {/* Cart Items */}
      <div className="summary-items">
        {cartItems.map((item, index) => (
          <div key={`${item.id}-${item.color}-${item.size}`} className="summary-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h4 className="item-name">{item.name}</h4>
              {item.quantity > 1 && (
                <span className="item-quantity">Qty: {item.quantity}</span>
              )}
            </div>
            <div className="item-price">
              ${(item.price * item.quantity).toFixed(0)}
            </div>
          </div>
        ))}
      </div>

      {/* Address Section */}
      <div className="summary-section">
        <h4 className="section-title">Address</h4>
        <p className="section-content">
          {addressData?.selectedAddress?.address || '1131 Dusty Townline, Jacksonville, TX 40322'}
        </p>
      </div>

      {/* Shipment Method */}
      <div className="summary-section">
        <h4 className="section-title">Shipment method</h4>
        <p className="section-content">
          {shippingData?.method === 'free' ? 'Free' : 
           shippingData?.method === 'express' ? `Express ($${shippingData.price})` :
           shippingData?.method === 'schedule' ? 'Scheduled' : 'Free'}
        </p>
      </div>

      {/* Price Breakdown */}
      <div className="summary-totals">
        <div className="total-row">
          <span className="total-label">Subtotal</span>
          <span className="total-value">${subtotal}</span>
        </div>
        <div className="total-row">
          <span className="total-label">Estimated Tax</span>
          <span className="total-value">${estimatedTax}</span>
        </div>
        <div className="total-row">
          <span className="total-label">Estimated shipping & Handling</span>
          <span className="total-value">${shippingCost}</span>
        </div>
        <div className="total-row final-total">
          <span className="total-label">Total</span>
          <span className="total-value">${total}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;