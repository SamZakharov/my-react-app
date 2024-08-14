import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '../../utils/api/api.js';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        // Продукты
        getProducts: builder.query({
            query: () => 'products',
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),
        getAllCategories: builder.query({
            query: () => 'categories',
        }),
        getAllProductsByCategory: builder.query({
            query: (categoryId) => `products/category/${categoryId}`,
        }),

        // Пользователи
        getAllUsers: builder.query({
            query: () => 'users',
        }),
        getUserById: builder.query({
            query: (userId) => `users/${userId}`,
        }),
        createUser: builder.mutation({
            query: (userData) => ({
                url: 'users',
                method: 'POST',
                body: userData,
            }),
        }),
        updateUser: builder.mutation({
            query: ({userId, userData}) => ({
                url: `users/${userId}`,
                method: 'PUT',
                body: userData,
            }),
        }),
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `users/${userId}`,
                method: 'DELETE',
            }),
        }),

        createOrder: builder.mutation({
            query: (orderData) => ({
                url: 'orders',
                method: 'POST',
                body: orderData,
            }),
        }),

        login: builder.mutation({
            query: (loginData) => ({
                url: 'auth/login',
                method: 'POST',
                body: loginData,
            }),
        }),


    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useGetAllCategoriesQuery,
    useGetAllProductsByCategoryQuery,
    useGetAllUsersQuery,
    useGetUserByIdQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useCreateOrderMutation,
    useLoginMutation,
} = productsApi;
