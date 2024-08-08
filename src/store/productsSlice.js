import {createSlice} from '@reduxjs/toolkit';
import {fetchProductById as fetchProductByIdApi, fetchProducts} from '../services/products';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        item: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchProductsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductsSuccess: (state, action) => {
            state.items = action.payload;
            state.loading = false;
        },
        fetchProductsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        fetchProductByIdStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchProductByIdSuccess: (state, action) => {
            state.item = action.payload;
            state.loading = false;
        },
        fetchProductByIdFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    fetchProductsStart,
    fetchProductsSuccess,
    fetchProductsFailure,
    fetchProductByIdStart,
    fetchProductByIdSuccess,
    fetchProductByIdFailure,
} = productsSlice.actions;

export const fetchAllProducts = () => async (dispatch) => {
    dispatch(fetchProductsStart());
    try {
        const data = await fetchProducts();
        dispatch(fetchProductsSuccess(data));
    } catch (error) {
        dispatch(fetchProductsFailure(error.message));
    }
};

export const fetchProductById = (id) => async (dispatch) => {
    dispatch(fetchProductByIdStart());
    try {
        const data = await fetchProductByIdApi(id);
        dispatch(fetchProductByIdSuccess(data));
    } catch (error) {
        dispatch(fetchProductByIdFailure(error.message));
    }
};

export const selectProducts = (state) => state.products.items;
export const selectProduct = (state) => state.products.item;

export default productsSlice.reducer;
