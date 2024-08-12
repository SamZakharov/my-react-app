import {createContext, useContext, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import cartReducer from '../../utils/searchFilterHandler.js';
import {api} from '../../services/axiosConfig.js';
import {useAuth} from '../AuthenticateProvider/AuthenticateProvider.jsx';
import {Box, Typography} from '@mui/material';
import {styles} from './styles';

const CartContext = createContext();

const initialValue = {
    checkout: false,
    ordersCount: 0,
    totalPrice: 0,
    addedProducts: [],
};

function CartProvider({children}) {
    const [cartState, dispatch] = useReducer(cartReducer, initialValue);
    const {isAuthenticated} = useAuth();

    useEffect(() => {
        if (!isAuthenticated) return;

        const getUserCart = async () => {
            try {
                const {data} = await api.get('/user/cart');
                dispatch({type: 'GETFROMDB', payload: data});
            } catch (err) {
                if (err.response?.status === 404) {
                    // Handle 404 error (cart not found)
                }
            }
        };

        getUserCart();
    }, [isAuthenticated]);

    useEffect(() => {
        const controller = new AbortController();
        const {signal} = controller;

        const postCart = async () => {
            try {
                await api.post('/user/updatecart', {cartState}, {signal});
            } catch (err) {
                if (err.code === 'ERR_CANCELED') throw new err;
            }
        };

        postCart();

        return () => {
            controller.abort();
        };
    }, [cartState]);

    return (
        <CartContext.Provider value={{cartState, dispatch}}>
            <Box sx={styles.container}>
                <Typography variant="h6" sx={styles.header}>
                    Cart
                </Typography>
                {children}
            </Box>
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CartProvider;

export const useCartConsumer = () => {
    return useContext(CartContext);
};
