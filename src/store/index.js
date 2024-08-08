import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import notificationReducer from './notificationSlice';
import productsReducer from './productsSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        notification: notificationReducer,
        products: productsReducer,
    },
});

export default store;
