import React, { useState } from 'react';

const Shipping = ({ onNext, onBack }) => {
  const [selectedShipping, setSelectedShipping] = useState('free');
  const [selectedDate, setSelectedDate] = useState('');

  const shippingOptions = [
    {
      id: 'free',
      title: 'Free',
      subtitle: 'Regular shipment',
      price: 0,
      deliveryDate: '17 Oct, 2023'
    },
    {
      id: 'express',
      title: '$8.50',
      subtitle: 'Get your delivery as soon as possible',
      price: 8.50,
      deliveryDate: '1 Oct, 2023'
    },
    {
      id: 'schedule',
      title: 'Schedule',
      subtitle: 'Pick a date when you want to get your delivery',
      price: 0,
      deliveryDate: null,
      isScheduled: true
    }
  ];

  const handleShippingSelect = (shippingId) => {
    setSelectedShipping(shippingId);
    if (shippingId !== 'schedule') {
      setSelectedDate('');
    }
  };

  const handleDateSelect = () => {
    // This would open a date picker in a real implementation
    setSelectedDate('15 Oct, 2023');
  };

  const handleNext = () => {
    const selectedOption = shippingOptions.find(option => option.id === selectedShipping);
    const shippingData = {
      method: selectedShipping,
      price: selectedOption.price,
      deliveryDate: selectedShipping === 'schedule' ? selectedDate : selectedOption.deliveryDate
    };
    
    if (onNext) {
      onNext(shippingData);
    }
  };

  const canProceed = selectedShipping && (selectedShipping !== 'schedule' || selectedDate);

  return (
    <div className="shipping-component">
      <h2 className="shipping-title">Shipment Method</h2>
      
      <div className="shipping-options">
        {shippingOptions.map((option) => (
          <div 
            key={option.id}
            className={`shipping-option ${selectedShipping === option.id ? 'selected' : ''}`}
            onClick={() => handleShippingSelect(option.id)}
          >
            <div className="shipping-content">
              <div className="shipping-radio-wrapper">
                <input
                  type="radio"
                  id={option.id}
                  name="shipping"
                  value={option.id}
                  checked={selectedShipping === option.id}
                  onChange={() => handleShippingSelect(option.id)}
                  className="shipping-radio"
                />
                <div className="shipping-info">
                  <div className="shipping-header">
                    <span className="shipping-title-text">{option.title}</span>
                    <span className="shipping-subtitle">{option.subtitle}</span>
                  </div>
                </div>
              </div>
              
              <div className="shipping-delivery">
                {option.isScheduled ? (
                  <button 
                    className={`select-date-btn ${selectedDate ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDateSelect();
                    }}
                  >
                    {selectedDate || 'Select Date'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ) : (
                  <span className="delivery-date">{option.deliveryDate}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="shipping-navigation">
        <button className="nav-btn back-btn" onClick={onBack}>
          Back
        </button>
        <button 
          className="nav-btn next-btn" 
          onClick={handleNext}
          disabled={!canProceed}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Shipping;