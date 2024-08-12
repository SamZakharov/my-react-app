// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import api from '../../services/axiosConfig'; // Путь к вашему API
//
// // Создаем асинхронные экшены для получения данных
// export const fetchProductById = createAsyncThunk(
//     'products/fetchProductById',
//     async (id) => {
//         const response = await api.get(`/products/${id}`);
//         return response.data;
//     }
// );
//
// export const fetchAllProducts = createAsyncThunk(
//     'products/fetchAllProducts',
//     async () => {
//         const response = await api.get('/products');
//         return response.data;
//     }
// );
//
// const productsSlice = createSlice({
//     name: 'products',
//     initialState: {
//         allProducts: [], // Для хранения всех продуктов
//         productById: {}, // Для хранения продукта по ID
//         status: 'idle',
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             // Обработка получения всех продуктов
//             .addCase(fetchAllProducts.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchAllProducts.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.allProducts = action.payload;
//             })
//             .addCase(fetchAllProducts.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             })
//             // Обработка получения продукта по ID
//             .addCase(fetchProductById.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(fetchProductById.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.productById[action.payload.id] = action.payload;
//             })
//             .addCase(fetchProductById.rejected, (state, action) => {
//                 state.status = 'failed';
//                 state.error = action.error.message;
//             });
//     },
// });
//
// export default productsSlice.reducer;
// productsSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
    fetchProductById as fetchProductByIdApi,
    fetchProducts as fetchAllProductsApi
} from '../../services/axiosConfig'; // Импорт функций

// Создаем асинхронные экшены для получения данных
export const fetchProductById = createAsyncThunk(
    'products/fetchProductById',
    async (id) => {
        try {
            const data = await fetchProductByIdApi(id);
            return data;
        } catch (error) {
            throw error; // Перенаправляем ошибку для обработки в extraReducers
        }
    }
);

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        try {
            const data = await fetchAllProductsApi();
            return data;
        } catch (error) {
            throw error; // Перенаправляем ошибку для обработки в extraReducers
        }
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [], // Для хранения всех продуктов
        productById: {}, // Для хранения продукта по ID
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Обработка получения всех продуктов
            .addCase(fetchAllProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.allProducts = action.payload;
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            // Обработка получения продукта по ID
            .addCase(fetchProductById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.productById[action.payload.id] = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productsSlice.reducer;
