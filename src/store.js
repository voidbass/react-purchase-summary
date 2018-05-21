// Import createStore and applyMiddleware
import { createStore, applyMiddleware } from 'redux';
// Import thunk
import thunk from 'redux-thunk';
// Import root reducer
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
