import React, { useState } from 'react';

const Address = ({ onNext, onBack }) => {
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [addresses, setAddresses] = useState([
    {
      id: 'home',
      label: '2118 Thornridge',
      type: 'HOME',
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      phone: '(209) 555-0104'
    },
    {
      id: 'office',
      label: 'Headoffice',
      type: 'OFFICE',
      address: '2715 Ash Dr. San Jose, South Dakota 83475',
      phone: '(704) 555-0127'
    }
  ]);

  const handleAddressSelect = (addressId) => {
    setSelectedAddress(addressId);
  };

  const handleEditAddress = (addressId) => {
    // Handle edit address functionality
    console.log('Edit address:', addressId);
  };

  const handleDeleteAddress = (addressId) => {
    setAddresses(addresses.filter(addr => addr.id !== addressId));
    if (selectedAddress === addressId) {
      setSelectedAddress(addresses.length > 1 ? addresses[0].id : '');
    }
  };

  const handleAddNewAddress = () => {
    // Handle add new address functionality
    console.log('Add new address');
  };

  const handleNext = () => {
    if (selectedAddress && onNext) {
      onNext({ selectedAddress: addresses.find(addr => addr.id === selectedAddress) });
    }
  };

  return (
    <div className="address-component">
      <h2 className="address-title">Select Address</h2>
      
      <div className="address-list">
        {addresses.map((address) => (
          <div 
            key={address.id}
            className={`address-item ${selectedAddress === address.id ? 'selected' : ''}`}
          >
            <div className="address-content">
              <div className="address-header">
                <div className="address-radio-wrapper">
                  <input
                    type="radio"
                    id={address.id}
                    name="address"
                    value={address.id}
                    checked={selectedAddress === address.id}
                    onChange={() => handleAddressSelect(address.id)}
                    className="address-radio"
                  />
                  <label htmlFor={address.id} className="address-label">
                    {address.label}
                  </label>
                </div>
                <span className="address-type-badge">{address.type}</span>
              </div>
              
              <div className="address-details">
                <p className="address-text">{address.address}</p>
                <p className="address-phone">{address.phone}</p>
              </div>
            </div>
            
            <div className="address-actions">
              <button 
                className="address-action-btn edit-btn"
                onClick={() => handleEditAddress(address.id)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="address-action-btn delete-btn"
                onClick={() => handleDeleteAddress(address.id)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="add-new-address">
        <button className="add-address-btn" onClick={handleAddNewAddress}>
          <div className="add-address-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>Add New Address</span>
        </button>
      </div>

      <div className="address-navigation">
        <button className="nav-btn back-btn" onClick={onBack}>
          Back
        </button>
        <button 
          className="nav-btn next-btn" 
          onClick={handleNext}
          disabled={!selectedAddress}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Address;