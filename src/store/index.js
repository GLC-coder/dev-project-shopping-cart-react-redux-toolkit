import { configureStore } from '@reduxjs/toolkit';
import cartUiSlice from './cartUi-slice';
import cartSlice from './cart-slice';

const state = configureStore({
    reducer: {cartUi: cartUiSlice.reducer, cart: cartSlice.reducer}
})

export default state;