import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItemType, CartType } from './CartTypes';
import { RootState } from '../../../app/store/store';
import { calculateCartTotals } from './calculateCartTotals';

const initialState: CartType = {
  quantity: 0,
  items: [],
  subtotal: 0,
  total: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<CartItemType>) => {
      const item = state.items.find(o =>
        o.id === action.payload.id &&
        o.product.id === action.payload.product.id)

      if (item) {
        if (action.payload.qty > 0) {
          item.qty = action.payload.qty
        } else {
          // Remove from cart
          item.qty = 0
        }
      } else {
        if (action.payload.qty > 0) {
          state.items.push(action.payload)
        }
      }

      calculateCartTotals(state)
    },
    addItemToCartWithoutReplace: (state, action: PayloadAction<CartItemType>) => {
      const availableQty = Math.min(action.payload.product.attributes.quantity, action.payload.qty);

      action.payload.qty = availableQty

      const item = state.items.find(
        o => o.product.id === action.payload.product.id)
      if (item) {
        if (action.payload.qty > 0) {
          item.qty += action.payload.qty
        }
        if (item.qty > (action.payload.product.attributes.quantity)) {
          item.qty = (action.payload.product.attributes.quantity)
        }

      } else {
        if (action.payload.qty > 0) {
          state.items.push(action.payload)
        }
      }

      calculateCartTotals(state)
    },

    clearCart: () => initialState,
    removeItemFromCart: (state, action: PayloadAction<CartItemType>) => {
      const item = state.items.find(
        o => o.product.id === action.payload.product.id)

      if (item) {
        const index = state.items.indexOf(item, 0);
        if (index > -1) {
          state.items.splice(index, 1);
        }
      }

      calculateCartTotals(state)
    }
  },
})

export const {
  addItemToCart,
  addItemToCartWithoutReplace,
  clearCart,
  removeItemFromCart,
} = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart

export const cartReducer = cartSlice.reducer