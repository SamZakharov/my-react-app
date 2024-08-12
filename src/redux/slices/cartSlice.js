import {createSlice} from '@reduxjs/toolkit';
import {manageQuantity, orderSum, PriceSum} from '../../utils/manageQuantity.js';

const initialState = {
    checkout: false,
    ordersCount: 0,
    totalPrice: 0,
    addedProducts: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const {id} = action.payload;
            if (!state.addedProducts.find(product => product.id === id)) {
                state.addedProducts.push({...action.payload, quantity: 1});
            }
            state.ordersCount = orderSum(state.addedProducts);
            state.totalPrice = PriceSum(state.addedProducts);
        },
        increase: (state, action) => {
            manageQuantity(state.addedProducts, action.payload, 'INCREASE');
            state.ordersCount = orderSum(state.addedProducts);
            state.totalPrice = PriceSum(state.addedProducts);
        },
        decrease: (state, action) => {
            manageQuantity(state.addedProducts, action.payload, 'DECREASE');
            state.ordersCount = orderSum(state.addedProducts);
            state.totalPrice = PriceSum(state.addedProducts);
        },
        deleteProduct: (state, action) => {
            state.addedProducts = state.addedProducts.filter(product => product.id !== action.payload);
            state.ordersCount = orderSum(state.addedProducts);
            state.totalPrice = PriceSum(state.addedProducts);
        },
        checkout: (state) => {
            state.checkout = true;
        },
        clear: () => {
            return initialState;
        },
        getFromDb: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        }
    }
});

export const {addProduct, increase, decrease, deleteProduct, checkout, clear, getFromDb} = cartSlice.actions;

// Селекторы
export const selectCartState = (state) => state.cart;

export default cartSlice.reducer;
