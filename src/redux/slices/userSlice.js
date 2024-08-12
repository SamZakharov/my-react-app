import {createSlice} from '@reduxjs/toolkit';
import {productsApi} from '../productsApi/productsApi.js';

const initialState = {
    users: [],
    currentUser: null,
    status: 'idle',
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        clearCurrentUser: (state) => {
            state.currentUser = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                productsApi.endpoints.getAllUsers.matchFulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.users = action.payload;
                }
            )
            .addMatcher(
                productsApi.endpoints.getAllUsers.matchRejected,
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                }
            )
            .addMatcher(
                productsApi.endpoints.getUserById.matchFulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    state.currentUser = action.payload;
                }
            )
            .addMatcher(
                productsApi.endpoints.getUserById.matchRejected,
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                }
            );
    },
});

export const {setCurrentUser, clearCurrentUser} = userSlice.actions;
export default userSlice.reducer;
