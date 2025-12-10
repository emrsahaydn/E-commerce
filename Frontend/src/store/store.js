import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import { setUser } from "./clientActions";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const logger = createLogger({ collapsed: true });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));


//   localStorage YÜKLENSİN! (Remember Me)
const savedToken = localStorage.getItem("token");
const savedUser = localStorage.getItem("user");

if (savedToken && savedUser) {
  try {
    store.dispatch(setUser(JSON.parse(savedUser)));
  } catch (err) {
    console.error("Failed to load saved user");
  }
}


export default store;
