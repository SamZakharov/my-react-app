import {configureStore} from '@reduxjs/toolkit';
import {productsApi} from './productsApi/productsApi.js';
import cartReducer from '../redux/slices/cartSlice.js';
import authReducer from '../redux/slices/authSlice.js';
import orderReducer from '../redux/slices/orderSlice';
import userReducer from '../redux/slices/userSlice';
import themeReducer from '../redux/slices/themeSlice.js';

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
        auth: authReducer,
        orders: orderReducer,
        users: userReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
