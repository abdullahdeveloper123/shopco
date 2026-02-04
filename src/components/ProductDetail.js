import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import mockData from '../mock_data.json';

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [addToCartMessage, setAddToCartMessage] = useState('');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    // Find product from all available products (newArrivals, topSelling, allProducts)
    const allProducts = [
      ...mockData.newArrivals,
      ...mockData.topSelling,
      ...mockData.allProducts
    ];
    
    const foundProduct = allProducts.find(p => p.id === productId);
    
    if (foundProduct) {
      // Convert the product to match the expected format for ProductDetail
      const detailProduct = {
        ...foundProduct,
        name: foundProduct.title,
        images: [
          foundProduct.image,
          foundProduct.image.replace('text=', 'text=Alt+'),
          foundProduct.image.replace('text=', 'text=Side+')
        ],
        description: `This ${foundProduct.title.toLowerCase()} is perfect for any occasion. Crafted from high-quality materials, it offers superior comfort and style.`,
        sizes: foundProduct.sizes || ["Small", "Medium", "Large", "X-Large"]
      };
      setProduct(detailProduct);
      // Set default selected size if available
      if (detailProduct.sizes && detailProduct.sizes.length > 0) {
        setSelectedSize(detailProduct.sizes[2] || detailProduct.sizes[0]); // Default to 3rd size or first
      }
    } else {
      // Fallback to default product if not found
      setProduct(mockData.productDetails);
    }
  }, [productId]);

  const handleAddToCart = () => {
    if (!product || isAddingToCart) return;

    setIsAddingToCart(true);
    const selectedColorName = product.colors[selectedColor];
    const success = addToCart(product, selectedColorName, selectedSize, quantity);
    
    if (success) {
      setAddToCartMessage('Added to cart successfully!');
      setTimeout(() => {
        setAddToCartMessage('');
        setIsAddingToCart(false);
      }, 2000);
    } else {
      setIsAddingToCart(false);
    }
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} style={{ color: '#ffc633' }}>★</span>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <span key="half" style={{ color: '#ffc633' }}>★</span>
      );
    }
    
    const emptyStars = 5 - Math.ceil(product.rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} style={{ color: '#d1d5db' }}>★</span>
      );
    }
    
    return stars;
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="product-detail-breadcrumb">
        <span>Home</span>
        <span>›</span>
        <span>Shop</span>
        <span>›</span>
        <span>{product.category}</span>
        <span>›</span>
        <span>{product.name}</span>
      </div>

      <div className="product-detail-container">
        {/* Images Section */}
        <div className="product-detail-images-section">
          <div className="product-detail-thumbnails">
            {product.images.map((image, index) => (
              <div
                key={index}
                className={`product-detail-thumbnail ${selectedImage === index ? 'selected' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                />
              </div>
            ))}
          </div>
          
          <div className="product-detail-main-image">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="product-detail-details-section">
          <h1 className="product-detail-title">{product.name}</h1>
          
          <div className="product-detail-rating">
            <div className="product-detail-stars">
              {renderStars()}
            </div>
            <span className="product-detail-rating-text">{product.rating}/5</span>
          </div>

          <div className="product-detail-price">
            <span className="product-detail-current-price">${product.price}</span>
            <span className="product-detail-original-price">${product.originalPrice}</span>
            <span className="product-detail-discount">-{product.discount}%</span>
          </div>

          <p className="product-detail-description">{product.description}</p>

          {/* Color Selection */}
          <div className="product-detail-section">
            <div className="product-detail-section-title">Select Colors</div>
            <div className="product-detail-color-options">
              {product.colors.map((color, index) => (
                <div
                  key={color}
                  className={`product-detail-color-option ${color} ${selectedColor === index ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(index)}
                >
                  {selectedColor === index && (
                    <div className="product-detail-color-checkmark">✓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="product-detail-section">
            <div className="product-detail-section-title">Choose Size</div>
            <div className="product-detail-size-options">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`product-detail-size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="product-detail-quantity">
            <div className="product-detail-quantity-control">
              <button
                className="product-detail-quantity-button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                −
              </button>
              <span className="product-detail-quantity-display">{quantity}</span>
              <button
                className="product-detail-quantity-button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            
            <button 
              className="product-detail-add-to-cart" 
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              style={{
                backgroundColor: isAddingToCart ? '#4CAF50' : '',
                cursor: isAddingToCart ? 'default' : 'pointer'
              }}
            >
              {isAddingToCart ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
          </div>

          {/* Add to Cart Success Message */}
          {addToCartMessage && (
            <div style={{
              marginTop: '16px',
              padding: '12px',
              backgroundColor: '#4CAF50',
              color: 'white',
              borderRadius: '8px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              {addToCartMessage}
            </div>
          )}
        </div>
      </div>

      {/* You might also like section */}
      <div style={{ marginTop: '60px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', fontWeight: '700' }}>
          YOU MIGHT ALSO LIKE
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {getRelatedProducts().map(relatedProduct => (
            <div key={relatedProduct.id} style={{ cursor: 'pointer' }} onClick={() => window.location.href = `/product/${relatedProduct.id}`}>
              <img 
                src={relatedProduct.image} 
                alt={relatedProduct.title}
                style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px' }}
              />
              <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0' }}>{relatedProduct.title}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px', fontWeight: '700' }}>${relatedProduct.price}</span>
                {relatedProduct.originalPrice && (
                  <span style={{ fontSize: '16px', textDecoration: 'line-through', color: '#999' }}>
                    ${relatedProduct.originalPrice}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  function getRelatedProducts() {
    const allProducts = [
      ...mockData.newArrivals,
      ...mockData.topSelling,
      ...mockData.allProducts
    ];
    
    // Filter products by same category, excluding current product
    const relatedProducts = allProducts
      .filter(p => p.category === product?.category && p.id !== productId)
      .slice(0, 4);
    
    // If not enough related products, fill with random products
    if (relatedProducts.length < 4) {
      const otherProducts = allProducts
        .filter(p => p.id !== productId && !relatedProducts.find(rp => rp.id === p.id))
        .slice(0, 4 - relatedProducts.length);
      relatedProducts.push(...otherProducts);
    }
    
    return relatedProducts;
  }
};

export default ProductDetail;