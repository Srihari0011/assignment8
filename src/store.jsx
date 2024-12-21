import { createStore, combineReducers } from 'redux';

// Reducer for product catalog
const productReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(rootReducer);

export default store;
