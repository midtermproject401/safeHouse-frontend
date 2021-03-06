// import the createStore:
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// import the .composeWithDevTools
import { composeWithDevTools } from "redux-devtools-extension";

import hotels from "./reducers/hotels";

// import thunk from './middlewares/thunk';

import { cartReducer } from "./reducers/cartReducer";
import { dataRed } from "./reducers/dataRed";

const reducers = combineReducers({
  cart: cartReducer,
  data: dataRed,
  hotels: hotels,
});

// let reducers = combineReducers({ reducers });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
