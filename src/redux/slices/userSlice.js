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
            )
            .addMatcher(
                productsApi.endpoints.createUser.matchFulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    // Optional: Set currentUser if you want to log the user in immediately
                    state.currentUser = action.payload;
                }
            )
            .addMatcher(
                productsApi.endpoints.createUser.matchRejected,
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                }
            )
            .addMatcher(
                productsApi.endpoints.updateUser.matchFulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    // Optionally update the user in the state
                    const updatedUser = action.payload;
                    state.users = state.users.map(user =>
                        user.id === updatedUser.id ? updatedUser : user
                    );
                    if (state.currentUser?.id === updatedUser.id) {
                        state.currentUser = updatedUser;
                    }
                }
            )
            .addMatcher(
                productsApi.endpoints.updateUser.matchRejected,
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                }
            )
            .addMatcher(
                productsApi.endpoints.deleteUser.matchFulfilled,
                (state, action) => {
                    state.status = 'succeeded';
                    // Optionally remove the user from the state
                    const deletedUserId = action.meta.arg;
                    state.users = state.users.filter(user => user.id !== deletedUserId);
                    if (state.currentUser?.id === deletedUserId) {
                        state.currentUser = null;
                    }
                }
            )
            .addMatcher(
                productsApi.endpoints.deleteUser.matchRejected,
                (state, action) => {
                    state.status = 'failed';
                    state.error = action.error.message;
                }
            );
    },
});

export const {setCurrentUser, clearCurrentUser} = userSlice.actions;
export default userSlice.reducer;
