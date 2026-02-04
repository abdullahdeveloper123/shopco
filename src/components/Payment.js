import React, { useState } from 'react';
import OrderSummary from './OrderSummary';

const Payment = ({ onNext, onBack, addressData, shippingData }) => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
    sameAsBilling: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
      return;
    }

    let formattedValue = value;

    // Format card number (XXXX XXXX XXXX XXXX)
    if (name === 'cardNumber') {
      // Remove all non-digits
      const digits = value.replace(/\D/g, '');
      // Limit to 16 digits
      const limitedDigits = digits.slice(0, 16);
      // Add spaces every 4 digits
      formattedValue = limitedDigits.replace(/(\d{4})(?=\d)/g, '$1 ');
    }

    // Format expiration date (MM/YY)
    if (name === 'expDate') {
      // Remove all non-digits
      const digits = value.replace(/\D/g, '');
      // Limit to 4 digits
      const limitedDigits = digits.slice(0, 4);
      // Add slash after 2 digits
      if (limitedDigits.length >= 2) {
        formattedValue = limitedDigits.slice(0, 2) + '/' + limitedDigits.slice(2);
      } else {
        formattedValue = limitedDigits;
      }
    }

    // Format CVV (XXX)
    if (name === 'cvv') {
      // Remove all non-digits
      const digits = value.replace(/\D/g, '');
      // Limit to 3 digits only
      formattedValue = digits.slice(0, 3);
    }

    // Format cardholder name (letters, spaces, hyphens, apostrophes only)
    if (name === 'cardholderName') {
      // Allow only letters, spaces, hyphens, and apostrophes
      formattedValue = value.replace(/[^a-zA-Z\s\-']/g, '').slice(0, 50);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = () => {
    // Validate form before submission
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      // You could set errors state here to show validation messages
      console.log('Validation errors:', errors);
      return;
    }

    const paymentData = {
      method: paymentMethod,
      ...formData
    };
    
    if (onNext) {
      onNext(paymentData);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate cardholder name
    if (!formData.cardholderName.trim()) {
      errors.cardholderName = 'Cardholder name is required';
    }

    // Validate card number
    const cardDigits = formData.cardNumber.replace(/\s/g, '');
    if (!cardDigits) {
      errors.cardNumber = 'Card number is required';
    } else if (cardDigits.length !== 16) {
      errors.cardNumber = 'Card number must be 16 digits';
    }

    // Validate expiration date
    if (!formData.expDate) {
      errors.expDate = 'Expiration date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expDate)) {
      errors.expDate = 'Invalid date format (MM/YY)';
    } else {
      const [month, year] = formData.expDate.split('/');
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;
      
      if (parseInt(month) < 1 || parseInt(month) > 12) {
        errors.expDate = 'Invalid month';
      } else if (parseInt(year) < currentYear || (parseInt(year) === currentYear && parseInt(month) < currentMonth)) {
        errors.expDate = 'Card has expired';
      }
    }

    // Validate CVV
    if (!formData.cvv) {
      errors.cvv = 'CVV is required';
    } else if (formData.cvv.length !== 3) {
      errors.cvv = 'CVV must be exactly 3 digits';
    }

    return errors;
  };

  const isFormValid = () => {
    return formData.cardholderName.trim() && 
           formData.cardNumber.replace(/\s/g, '').length === 16 && 
           formData.expDate.length === 5 && 
           formData.cvv.length === 3;
  };

  return (
    <div className="payment-component">
      <div className="payment-layout">
        {/* Left Side - Order Summary */}
        <div className="payment-summary">
          <OrderSummary addressData={addressData} shippingData={shippingData} />
        </div>

        {/* Right Side - Payment Details */}
        <div className="payment-details">
          <h3 className="payment-title">Payment</h3>
          
          {/* Payment Method Tabs */}
          <div className="payment-methods">
            <button 
              className={`payment-method-tab ${paymentMethod === 'credit-card' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('credit-card')}
            >
              Credit Card
            </button>
            <button 
              className={`payment-method-tab ${paymentMethod === 'paypal' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('paypal')}
            >
              PayPal
            </button>
            <button 
              className={`payment-method-tab ${paymentMethod === 'paypal-credit' ? 'active' : ''}`}
              onClick={() => handlePaymentMethodChange('paypal-credit')}
            >
              PayPal Credit
            </button>
          </div>

          {/* Payment Method Content */}
          {paymentMethod === 'credit-card' ? (
            <>
              {/* Credit Card Visual */}
              <div className="credit-card-visual">
                <div className="card-chip">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                    <rect width="24" height="18" rx="3" fill="#FFD700"/>
                    <rect x="2" y="2" width="20" height="14" rx="2" fill="#FFA500"/>
                  </svg>
                </div>
                <div className="card-contactless">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M3 8C3 5.79086 4.79086 4 7 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M3 8C3 10.2091 4.79086 12 7 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M5 8C5 6.89543 5.89543 6 7 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M5 8C5 9.10457 5.89543 10 7 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="card-number">4085 9536 8475 9530</div>
                <div className="card-holder">Cardholder</div>
                <div className="card-logos">
                  <div className="mastercard-logo">
                    <div className="circle red"></div>
                    <div className="circle yellow"></div>
                  </div>
                </div>
              </div>

              {/* Payment Form */}
              <div className="payment-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="cardholderName"
                    placeholder="Cardholder Name"
                    value={formData.cardholderName}
                    onChange={handleInputChange}
                    className="form-input"
                    maxLength="50"
                    autoComplete="cc-name"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number (XXXX XXXX XXXX XXXX)"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="form-input"
                    maxLength="19"
                    autoComplete="cc-number"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group half">
                    <input
                      type="text"
                      name="expDate"
                      placeholder="MM/YY"
                      value={formData.expDate}
                      onChange={handleInputChange}
                      className="form-input"
                      maxLength="5"
                      autoComplete="cc-exp"
                    />
                  </div>
                  <div className="form-group half">
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="form-input"
                      maxLength="3"
                      autoComplete="cc-csc"
                    />
                  </div>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="sameAsBilling"
                      checked={formData.sameAsBilling}
                      onChange={handleInputChange}
                      className="checkbox-input"
                    />
                    <span className="checkbox-custom"></span>
                    Same as billing address
                  </label>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="payment-navigation">
                <button className="nav-btn back-btn" onClick={onBack}>
                  Back
                </button>
                <button 
                  className="nav-btn pay-btn" 
                  onClick={handleSubmit}
                  disabled={!isFormValid()}
                >
                  Pay
                </button>
              </div>
            </>
          ) : (
            /* Coming Soon Placeholder for PayPal and PayPal Credit */
            <div className="coming-soon-placeholder">
              <div className="coming-soon-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="coming-soon-title">Coming Soon</h3>
              <p className="coming-soon-text">
                {paymentMethod === 'paypal' ? 'PayPal' : 'PayPal Credit'} payment option will be available soon. 
                Please use Credit Card for now.
              </p>
              <button 
                className="coming-soon-btn"
                onClick={() => handlePaymentMethodChange('credit-card')}
              >
                Use Credit Card Instead
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;