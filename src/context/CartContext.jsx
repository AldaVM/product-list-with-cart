import { createContext, useEffect, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

function getCartFromLocalStorage() {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : initialState;
  } catch (error) {
    console.error("Error retrieving cart from localStorage:", error);
    return initialState;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, getCartFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
