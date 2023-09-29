import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoggedInAccountType } from './LoggedInAccountType';
import { RootState } from '../../../app/store/store';

const initialState: LoggedInAccountType = {
    isLoggedIn: false,
    user: {
        email: undefined,
        firstName: undefined,
        lastName: undefined,
        username: undefined
    },
    token: undefined
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        performLogin: (state, action: PayloadAction<LoggedInAccountType>) => {
            state.isLoggedIn = true
            state.user = action.payload.user
            if (action.payload.jwt) {
                sessionStorage.setItem('jwt', action.payload.jwt);
                state.jwt = action.payload.jwt
            }
        },
        logout: (state) => {
            state.isLoggedIn = false
            state.user = {}
            state.jwt = undefined
            sessionStorage.removeItem('jwt');
        }
    }
})

export const {
    performLogin,
    logout,
} = accountSlice.actions;

export const selectAccount = (state: RootState) => state.account;

export const accountReducer = accountSlice.reducer