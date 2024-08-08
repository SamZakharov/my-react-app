import {createSlice} from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        open: false,
        message: '',
        severity: 'info',
    },
    reducers: {
        showNotification: (state, action) => {
            state.open = true;
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        closeNotification: (state) => {
            state.open = false;
            state.message = '';
            state.severity = 'info';
        },
    },
});

export const {showNotification, closeNotification} = notificationSlice.actions;
export default notificationSlice.reducer;
