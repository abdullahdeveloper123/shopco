import React from 'react';
import ad1 from '../assets/img/h_ad_1.png';
import ad2 from '../assets/img/h_ad_2.png';
import ad3 from '../assets/img/h_ad_3.png';
import ad4 from '../assets/img/h_ad_4.png';
import ad5 from '../assets/img/h_ad_5.png';

const Brands = () => {
  const brands = [
    { image: ad1, alt: 'Brand 1' },
    { image: ad2, alt: 'Brand 2' },
    { image: ad3, alt: 'Brand 3' },
    { image: ad4, alt: 'Brand 4' },
    { image: ad5, alt: 'Brand 5' }
  ];

  return (
    <section className="brands">
      <div className="brands-container">
        <div className="brands-list">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img 
                src={brand.image} 
                alt={brand.alt}
                className="brand-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;