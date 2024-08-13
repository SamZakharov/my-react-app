import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    status: 'idle', // Можно использовать для отслеживания статуса загрузки
    error: null,    // Можно использовать для хранения ошибок
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.status = 'succeeded';
        },
        clearUserInfo: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.status = 'idle';
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.status = 'idle';
            state.error = null;
        },
        // Дополнительные редюсеры могут быть добавлены здесь
        // Например, редюсеры для обработки ошибок или статусов загрузки
        setAuthError: (state, action) => {
            state.error = action.payload;
            state.status = 'failed';
        },
        setAuthStatus: (state, action) => {
            state.status = action.payload;
        }
    },
});

export const {setUserInfo, clearUserInfo, logout, setAuthError, setAuthStatus} = authSlice.actions;

// Селекторы
export const selectUserInfo = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;
