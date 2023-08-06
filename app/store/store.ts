import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { webStorage } from './createWebStore';
import { wishlistReducer } from '../wishlistSlice';
import { cartReducer } from '../../components/shared/cart/cartSlice';
import { accountReducer } from '../../components/shared/auth/accountSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage: webStorage,
}

const rootReducer = combineReducers({
    account: accountReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    // Note: you can include options in the argument of the getDefaultMiddleware function call.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
});

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;