import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalQuantity: 0,
  isChecked: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCartItems: (state, action) => {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.isChecked = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItemFromCart: (state, action) => {
      state.isChecked = true;
      state.totalQuantity--;
      const updatedItemId = action.payload;
      const updatedItem = state.items.find((item) => item.id === updatedItemId);
      if (updatedItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== updatedItemId);
        console.log(state.items)
      } else {
        updatedItem.quantity--;
        updatedItem.totalPrice = updatedItem.totalPrice - updatedItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
