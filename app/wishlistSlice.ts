import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WishlistType } from './WishlistType';
import { ProductType } from '../components/shared/ProductTypes';
import { RootState } from './store/store';

const initialState: WishlistType = {
    products: [],
};

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<ProductType>) => {
            const item = state.products.find(o => o.id === action.payload.id)

            if (!item) {
                state.products.push(action.payload);
            }
        },
        removeFromWishlist: (state, action: PayloadAction<ProductType>) => {
            const item = state.products.find(o => o.id === action.payload.id)

            if (item) {
                const index = state.products.indexOf(item, 0);
                if (index > -1) {
                    state.products.splice(index, 1);
                }
            }
        },
        removeAllProductsFromWishlist: state => {
            state.products = []
        }
    },
});

export const {
    addToWishlist,
    removeFromWishlist,
    removeAllProductsFromWishlist,
} = wishlistSlice.actions;

export const selectWishlist = (state: RootState) => state.wishlist

export const wishlistReducer = wishlistSlice.reducer