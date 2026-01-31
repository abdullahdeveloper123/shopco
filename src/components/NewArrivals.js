import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './NewArrivals.css'


const NewArrivals = () => {
  const [showAll, setShowAll] = useState(false);

  const allProducts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/295x298/f0f0f0/666666?text=T-Shirt',
      title: 'T-shirt with Tape Details',
      rating: 4.5,
      price: 120
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/295x298/f0f0f0/666666?text=Jeans',
      title: 'Skinny Fit Jeans',
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: 20
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/295x298/f0f0f0/666666?text=Shirt',
      title: 'Checkered Shirt',
      rating: 4.5,
      price: 180
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/295x298/f0f0f0/666666?text=Sleeve+Striped',
      title: 'Sleeve Striped T-shirt',
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: 30
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/295x298/f0f0f0/666666?text=Hoodie',
      title: 'Courage Graphic T-shirt',
      rating: 4.0,
      price: 145
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/295x298/f0f0f0/666666?text=Shorts',
      title: 'Loose Fit Bermuda Shorts',
      rating: 3.0,
      price: 80
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/295x298/f0f0f0/666666?text=Polo',
      title: 'Faded Skinny Jeans',
      rating: 4.5,
      price: 210
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/295x298/f0f0f0/666666?text=Jacket',
      title: 'Vertical Striped Shirt',
      rating: 5.0,
      price: 212,
      originalPrice: 232,
      discount: 20
    }
  ];

  const productsToShow = showAll ? allProducts : allProducts.slice(0, 4);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className="new-arrivals">
      <div className="container">
        <h2 className="section-title">NEW ARRIVALS</h2>
        
        <div className="products-container">
          <div className="row">
            {productsToShow.map(product => (
              <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
                <ProductCard
                  image={product.image}
                  title={product.title}
                  rating={product.rating}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="view-all-container">
          <button className="view-all-btn" onClick={handleViewAll}>
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;