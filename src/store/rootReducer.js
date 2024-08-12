import {combineReducers} from 'redux';
import cartSlice from './slices/cartSlice.js';
import authSlice from './slices/authSlice.js';

const rootReducer = combineReducers({
    cart: cartSlice,
    auth: authSlice
});

export default rootReducer;