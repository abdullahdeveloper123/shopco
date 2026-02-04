import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Navbar from '../components/Navbar';
import Address from '../components/Address';
import Shipping from '../components/Shipping';
import Payment from '../components/Payment';
import Footer from '../components/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [checkoutData, setCheckoutData] = useState({
    address: null,
    shipping: null,
    payment: null
  });

  const steps = [
    { number: 1, title: 'Address', icon: '📍' },
    { number: 2, title: 'Shipping', icon: '🚚' },
    { number: 3, title: 'Payment', icon: '💳' }
  ];

  const handleStepComplete = (stepNumber, data) => {
    setCheckoutData(prev => ({
      ...prev,
      [stepNumber === 1 ? 'address' : stepNumber === 2 ? 'shipping' : 'payment']: data
    }));
    
    if (stepNumber < 3) {
      setCurrentStep(stepNumber + 1);
    } else {
      // Handle final checkout completion
      console.log('Checkout complete:', { ...checkoutData, payment: data });
    }
  };

  const handleStepBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/cart');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Address 
            onNext={(data) => handleStepComplete(1, data)}
            onBack={handleStepBack}
          />
        );
      case 2:
        return (
          <Shipping 
            onNext={(data) => handleStepComplete(2, data)}
            onBack={handleStepBack}
          />
        );
      case 3:
        return (
          <Payment 
            onNext={(data) => handleStepComplete(3, data)}
            onBack={handleStepBack}
            addressData={checkoutData.address}
            shippingData={checkoutData.shipping}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="checkout-page">
      <TopNav />
      <Navbar />
      
      <div className="checkout-container">
        {/* Breadcrumb */}
        <div className="checkout-breadcrumb">
          <span>Home</span>
          <span>›</span>
          <span>Cart</span>
          <span>›</span>
          <span>Checkout</span>
        </div>

        {/* Step Navigation */}
        <div className="checkout-steps">
          {steps.map((step, index) => (
            <div key={step.number} className="step-wrapper">
              <div className={`step-item ${currentStep >= step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}>
                <div className="step-circle">
                  {currentStep > step.number ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span className="step-number">{step.number}</span>
                  )}
                </div>
                <div className="step-info">
                  <span className="step-title">Step {step.number}</span>
                  <span className="step-label">{step.title}</span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`step-connector ${currentStep > step.number ? 'completed' : ''}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="checkout-content">
          {renderStepContent()}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;