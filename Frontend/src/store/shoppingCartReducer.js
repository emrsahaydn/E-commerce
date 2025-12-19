import { 
  SET_CART, 
  SET_PAYMENT, 
  SET_ADDRESS, 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  UPDATE_CART_ITEM 
} from "./cartActionTypes";

const savedCart = localStorage.getItem("cart");
const initialCart = savedCart ? JSON.parse(savedCart) : [];

const initialState = {
  cart: initialCart, 
  payment: {},
  address: {},
};

export default function shoppingCartReducer(state = initialState, action) {
  let newState;

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
        newState = { ...state, cart: updatedCart };
      } else {
        newState = {
          ...state,
          cart: [...state.cart, { count: 1, checked: true, product: action.payload }],
        };
      }
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
    }

    case REMOVE_FROM_CART: {
      newState = {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
    }

    case UPDATE_CART_ITEM: {
      newState = {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, ...action.payload.updates }
            : item
        ),
      };
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
    }

    case SET_CART: {
      newState = { ...state, cart: action.payload };
      localStorage.setItem("cart", JSON.stringify(newState.cart));
      return newState;
    }

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    default:
      return state;
  }
}