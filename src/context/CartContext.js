import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    console.log('Loading cart from localStorage...');
    const savedCart = localStorage.getItem('shopco_cart');
    console.log('Saved cart data:', savedCart);
    
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        console.log('Parsed cart:', parsedCart);
        setCartItems(parsedCart);
        updateCartCount(parsedCart);
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        localStorage.removeItem('shopco_cart');
      }
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever cartItems changes (but not on initial load)
  useEffect(() => {
    if (isInitialized) {
      console.log('Saving cart to localStorage:', cartItems);
      localStorage.setItem('shopco_cart', JSON.stringify(cartItems));
      updateCartCount(cartItems);
    }
  }, [cartItems, isInitialized]);

  const updateCartCount = (items) => {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  };

  const addToCart = (product, selectedColor, selectedSize, quantity = 1) => {
    const cartItem = {
      id: product.id,
      name: product.name || product.title,
      price: product.price,
      image: product.image || product.images?.[0],
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      addedAt: new Date().toISOString()
    };

    setCartItems(prevItems => {
      // Check if item with same id, color, and size already exists
      const existingItemIndex = prevItems.findIndex(
        item => item.id === cartItem.id && 
                item.color === cartItem.color && 
                item.size === cartItem.size
      );

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Add new item
        return [...prevItems, cartItem];
      }
    });

    return true; // Success
  };

  const removeFromCart = (id, color, size) => {
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.id === id && item.color === color && item.size === size)
      )
    );
  };

  const updateQuantity = (id, color, size, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id, color, size);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
    localStorage.removeItem('shopco_cart');
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};