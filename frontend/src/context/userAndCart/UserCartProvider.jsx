import React, { createContext, useReducer } from 'react';
import UserCartReducer from './UserCartReducer';

// Initial State variables
export const initialState = {
  //& 2. Get saved user in the local storage
  user: null,

  cart: {
    cartItems: [],
    user: null,
    shippingAddress: {},
    paymentMethod: '',
  },
};

// Context
export const UserCartContext = createContext(initialState);

// Context Provider function
const UserCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserCartReducer, initialState);
  return (
    <UserCartContext.Provider
      value={{
        dispatch,
        user: state.user,
        cart: state.cart,
        cartItems: state.cart.cartItems,
        shippingAddress: state.cart.shippingAddress,
        paymentMethod: state.cart.paymentMethod,
      }}
    >
      {children}
    </UserCartContext.Provider>
  );
};

export default UserCartProvider;
