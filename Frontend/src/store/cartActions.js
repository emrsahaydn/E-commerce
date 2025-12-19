import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
} from "./cartActionTypes";


export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});


export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});


export const updateCartItem = (productId, updates) => ({
  type: UPDATE_CART_ITEM,
  payload: { productId, updates },
});


export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});


export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});