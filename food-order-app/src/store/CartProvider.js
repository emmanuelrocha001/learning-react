import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const ADD = (state, item) => {
  let updatedTotalAmount = state.totalAmount + item.price * item.amount;
  const index = state.items.findIndex((x) => x.id === item.id);
  if (index > -1) {
    state.items[index].amount = state.items[index].amount + item.amount;
    const updatedItems = [...state.items];
    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else {
    const updatedItems = state.items.concat(item);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const REMOVE = (state, id) => {
  const index = state.items.findIndex((x) => x.id === id);
  const item = state.items[index];
  let updatedTotalAmount = state.totalAmount - item.price;
  if (item.amount - 1 < 1) {
    state.items.splice(index, 1);
    const updatedItems = [...state.items];
    console.log(updatedItems);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else {
    item.amount = item.amount - 1;
    return {
      items: [...state.items],
      totalAmount: updatedTotalAmount,
    };
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return ADD(state, action.item);
    case "REMOVE":
      return REMOVE(state, action.id);
    default:
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    totalAmount: cartState.totalAmount,
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {" "}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
