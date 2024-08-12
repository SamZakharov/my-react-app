import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// Создание API с использованием Redux Toolkit Query
export const api = createApi({
    reducerPath: 'api', // Имя редюсера для хранения состояния API
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.escuelajs.co/api/v1/', // Базовый URL для запросов
        credentials: 'include', // Включение credentials для передачи cookie (если требуется)
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products', // Запрос для получения списка товаров
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`, // Запрос для получения товара по ID
        }),
        // Добавьте другие эндпоинты по мере необходимости
    }),
});

// Экспортируйте хуки для использования в компонентах
export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    // Экспортируйте другие хуки, если добавите новые эндпоинты
} = api;
