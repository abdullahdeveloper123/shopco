import React from 'react';
import { useParams } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
import ProductDetail from '../components/ProductDetail';
import ProductDetailReview from '../components/ProductDetailReview';
import Footer from '../components/Footer';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="product-details">
      <TopNav />
      <Navbar />
      <div style={{ padding: '40px 20px' }}>
        <ProductDetail productId={parseInt(id)} />
      </div>
      <ProductDetailReview />
      <Footer />
    </div>
  );
};

export default ProductDetails;