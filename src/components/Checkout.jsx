import React, { useReducer } from 'react';
import { useTheme } from '../context/ThemeContext';
import { checkoutReducer, initialState } from '../reducers/checkoutReducer';

const Checkout = () => {
  const { isDark } = useTheme();
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const handleAddressChange = (event) => {
    dispatch({ type: 'SET_ADDRESS', payload: event.target.value });
  };

  const handlePaymentChange = (event) => {
    dispatch({ type: 'SET_PAYMENT', payload: event.target.value });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        <h3>Address</h3>
        <input
          type="text"
          value={state.address}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <h3>Payment</h3>
        <input
          type="text"
          value={state.paymentMethod}
          onChange={handlePaymentChange}
        />
      </div>
      <div>
        <h3>Review Order</h3>
        <button>Submit Order</button>
      </div>
    </div>
  );
};

export default Checkout;
