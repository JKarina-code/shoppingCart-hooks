import { CartContext } from "./CartContext";
import { useReducer, useEffect } from "react";
const state = () => {
  return JSON.parse(localStorage.getItem("products")) || [];
};
const shoppingReducer = (state, action = {}) => {
  switch (action.type) {
    case "[CART] Add item":
      return [...state, action.payload];
    case "[CART] Increase item":
      return state.map((item) => {
        const numberItems = item.amount + 1;

        if (item.id === action.payload) return { ...item, amount: numberItems };
        return item;
      });
    case "[CART] Decrease item":
      return state.map((item) => {
        const numberItems = item.amount - 1;
        if (item.id === action.payload && item.amount > 1)
          return { ...item, amount: numberItems };
        return item;
      });
    case "[CART] Delete item":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
export const CartProvider = ({ children }) => {
  const [listShopping, dispatch] = useReducer(shoppingReducer, [], state);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(listShopping));
  }, [listShopping]);

  const addProduct = (item) => {
    item.amount = 1;
    const action = {
      type: "[CART] Add item",
      payload: item,
    };
    dispatch(action);
  };
  const increaseAmount = (id) => {
    const action = {
      type: "[CART] Increase item",
      payload: id,
    };
    dispatch(action);
  };

  const decreaseAmount = (id) => {
    const action = {
      type: "[CART] Decrease item",
      payload: id,
    };
    dispatch(action);
  };

  const deleteProduct = (id) => {
    const action = {
      type: "[CART] Delete item",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CartContext.Provider
      value={{
        listShopping,
        addProduct,
        increaseAmount,
        decreaseAmount,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
