function calculateTotals(items) {
  const totalItems = items.length;
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return { totalItems, totalPrice };
}

function updateItemQuantity(items, id, delta) {
  return items.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity + delta };
    }
    return item;
  });
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedItems = [...state.items, action.payload];
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      return { ...state, items: updatedItems, totalItems, totalPrice };
    }

    case "INCREMENT_QUANTITY": {
      const updatedItems = updateItemQuantity(
        state.items,
        action.payload.id,
        1
      );
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      return { ...state, items: updatedItems, totalItems, totalPrice };
    }

    case "DECREMENT_QUANTITY": {
      const updatedItems = updateItemQuantity(
        state.items,
        action.payload.id,
        -1
      );
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      return { ...state, items: updatedItems, totalItems, totalPrice };
    }

    case "REMOVE_ITEM": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      const { totalItems, totalPrice } = calculateTotals(updatedItems);
      return { ...state, items: updatedItems, totalItems, totalPrice };
    }

    case "CLEAR_CART":
      return { ...state, items: [], totalItems: 0, totalPrice: 0 };

    default:
      return state;
  }
}

export default cartReducer;
