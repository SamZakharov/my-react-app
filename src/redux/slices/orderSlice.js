// import {createSlice} from '@reduxjs/toolkit';
// import {productsApi} from '../productsApi/productsApi.js'
//
// const initialState = {
//     orders: [],
//     currentOrder: null,
//     status: 'idle',
//     error: null,
// };
//
// const orderSlice = createSlice({
//     name: 'orders',
//     initialState,
//     reducers: {
//         setCurrentOrder: (state, action) => {
//             state.currentOrder = action.payload;
//         },
//         clearCurrentOrder: (state) => {
//             state.currentOrder = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addMatcher(
//                 productsApi.endpoints.createOrder.matchPending,
//                 (state) => {
//                     state.status = 'loading';
//                 }
//             )
//             .addMatcher(
//                 productsApi.endpoints.createOrder.matchFulfilled,
//                 (state, action) => {
//                     state.status = 'succeeded';
//                     state.orders.push(action.payload);
//                 }
//             )
//             .addMatcher(
//                 productsApi.endpoints.createOrder.matchRejected,
//                 (state, action) => {
//                     state.status = 'failed';
//                     state.error = action.error.message;
//                 }
//             );
//     },
// });
//
// export const {setCurrentOrder, clearCurrentOrder} = orderSlice.actions;
// export default orderSlice.reducer;
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {productsApi} from '../productsApi/productsApi.js';

const initialState = {
    orders: [],
    currentOrder: null,
    status: 'idle',
    error: null,
};

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (orderData, {rejectWithValue}) => {
        try {
            const response = await productsApi.endpoints.createOrder.initiate(orderData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setCurrentOrder: (state, action) => {
            state.currentOrder = action.payload;
        },
        clearCurrentOrder: (state) => {
            state.currentOrder = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders.push(action.payload);
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const {setCurrentOrder, clearCurrentOrder} = orderSlice.actions;
export default orderSlice.reducer;
