import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userInfo: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
            state.isAuthenticated = true;
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
            state.isAuthenticated = false;
        },
    },
});

export const {setUserInfo, clearUserInfo} = authSlice.actions;

export const selectUserInfo = (state) => state.auth.userInfo;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;

export default authSlice.reducer;
