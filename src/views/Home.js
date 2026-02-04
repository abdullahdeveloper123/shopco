import React from 'react';
import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import NewArrivals from '../components/NewArrivals';
import TopSelling from '../components/TopSelling';
import BrowseByStyle from '../components/BrowseByStyle';
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <TopNav />
      <Navbar />
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <BrowseByStyle />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Home;