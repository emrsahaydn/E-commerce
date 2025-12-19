import { 
  SET_CART, 
  SET_PAYMENT, 
  SET_ADDRESS, 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  UPDATE_CART_ITEM 
} from "./cartActionTypes";

const initialState = {
  cart: [], 
  payment: {},
  address: {},
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, count: item.count + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      }

      return {
        ...state,
        cart: [...state.cart, { count: 1, checked: true, product: action.payload }],
      };
    }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };

    case UPDATE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, ...action.payload.updates }
            : item
        ),
      };

    case SET_CART:
      return { ...state, cart: action.payload };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
}