import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from './productsApi/productsApi.js';
import cartReducer from '../redux/slices/cartSlice.js';
import authReducer from '../redux/slices/authSlice.js';
import orderReducer from '../redux/slices/orderSlice'; // Путь к вашему слайсу заказов
import userReducer from '../redux/slices/userSlice'; // Путь к вашему слайсу пользователей

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        auth: authReducer,
        orders: orderReducer,
        users: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
