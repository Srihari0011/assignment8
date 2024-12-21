const initialState = {
    address: '',
    paymentMethod: '',
    cart: [],
  };
  
  const checkoutReducer = (state, action) => {
    switch (action.type) {
      case 'SET_ADDRESS':
        return { ...state, address: action.payload };
      case 'SET_PAYMENT':
        return { ...state, paymentMethod: action.payload };
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      default:
        return state;
    }
  };
  
  export { checkoutReducer, initialState };
  