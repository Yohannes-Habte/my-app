import React, { useState } from 'react';

const Checkout = () => {
  // Local state variables
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState(null);
  const [couponCode, setCouponCode] = useState('');
  const [couponCodeData, setCouponCodeData] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const [userInfo, setUserInfo] = useState(false);

  // updateChange
  const updateChange = (e) => {
    switch (e.target.name) {
      case 'street':
        setStreet(e.target.value);
        break;
      case 'zipCode':
        setZipCode(e.target.value);
        break;
      case 'city':
        setCity(e.target.value);
        break;
      case 'state':
        setState(e.target.value);
        break;
      case 'country':
        setCountry(e.target.value);
        break;
      default:
        break;
    }
  };

  // Reset variables
  const reset = () => {
    setCountry('');
    setState('');
    setCity('');
    setStreet('');
    setZipCode(null);
  };

  return (
    <section className="cart-checkout-wrapper">
      <h4 onClick={'paymentPage'} className="proceed-payment">
        Proceed to Payment
      </h4>
    </section>
  );
};

export default Checkout;
