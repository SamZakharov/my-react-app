import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    addedProducts: [],
    totalPrice: 0,
    ordersCount: 0,
    checkout: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const {id, title, price} = action.payload;
            const existingProduct = state.addedProducts.find(product => product.id === id);

            if (existingProduct) {
                // If the product is already in the cart, increase its quantity
                existingProduct.quantity += 1;
            } else {
                // Otherwise, add a new product to the cart
                state.addedProducts.push({
                    id,
                    title,
                    price,
                    quantity: 1,
                });
            }

            // Update the total price and order count
            state.totalPrice += price;
            state.ordersCount += 1;
        },
        increase: (state, action) => {
            const {id} = action.payload;
            const product = state.addedProducts.find(product => product.id === id);

            if (product) {
                product.quantity += 1;
                state.totalPrice += product.price;
            }
        },
        decrease: (state, action) => {
            const {id} = action.payload;
            const product = state.addedProducts.find(product => product.id === id);

            if (product) {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                    state.totalPrice -= product.price;
                } else {
                    // Remove the product from the cart if quantity is 1
                    state.addedProducts = state.addedProducts.filter(product => product.id !== id);
                    state.totalPrice -= product.price;
                }
                state.ordersCount -= 1;
            }
        },
        deleteProduct: (state, action) => {
            const {id} = action.payload;
            const product = state.addedProducts.find(product => product.id === id);

            if (product) {
                // Remove the product from the cart
                state.addedProducts = state.addedProducts.filter(product => product.id !== id);
                state.totalPrice -= product.price * product.quantity;
                state.ordersCount -= product.quantity;
            }
        },
        clearCart: (state) => {
            state.addedProducts = [];
            state.totalPrice = 0;
            state.ordersCount = 0;
            state.checkout = false;
        },
        checkout: (state) => {
            state.checkout = true;
        },
    },
});

export const {addProduct, increase, decrease, deleteProduct, clearCart, checkout} = cartSlice.actions;

export const selectCartState = (state) => state.cart;

export default cartSlice.reducer;
