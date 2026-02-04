import React from 'react';
import { useCart } from '../context/CartContext';

const CartCard = ({ 
  id,
  name,
  image,
  size,
  color,
  price,
  quantity
}) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id, color, size);
    } else {
      updateQuantity(id, color, size, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(id, color, size);
  };

  return (
    <div className="cart-card">
      <div className="cart-card-content">
        <div className="cart-card-image">
          <img src={image} alt={name} />
        </div>
        
        <div className="cart-card-details">
          <div className="cart-card-header">
            <h3 className="cart-card-title">{name}</h3>
            <button className="cart-card-remove" onClick={handleRemove}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="cart-card-info">
            <p className="cart-card-size">Size: <span>{size}</span></p>
            <p className="cart-card-color">Color: <span>{color}</span></p>
          </div>
          
          <div className="cart-card-footer">
            <div className="cart-card-price">${price}</div>
            
            <div className="cart-card-quantity">
              <button 
                className="quantity-btn quantity-decrease"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                −
              </button>
              <span className="quantity-display">{quantity}</span>
              <button 
                className="quantity-btn quantity-increase"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;