import { SET_CART, SET_PAYMENT, SET_ADDRESS } from "./cartActionTypes";

// CART
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

// PAYMENT
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

// ADDRESS
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
