import PropTypes from 'prop-types';
import {MdOutlineDelete} from 'react-icons/md';
import findItem from '../../utils/FindCartProduct.js';
import {useCartCunsumer} from '../../context/CartProvider/CartProvider.jsx';
import {useAuth} from '../../context/AuthenticateProvider/AuthenticateProvider.jsx';
import {useNavigate} from 'react-router-dom';
import {Box, Button, IconButton, Typography} from '@mui/material';
import {styles} from './styles'; // Import the styles

const AddToCart = ({cartData}) => {
    const {cartState, dispatch} = useCartCunsumer();
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const cartInfo = {...cartData, quantity: 1};

    const item = findItem(cartState.addedProducts, cartInfo.id);

    const addHandler = () => {
        if (!isAuthenticated) return navigate('/auth/login');
        dispatch({type: 'ADD_PRODUCT', payload: cartInfo});
    };

    const increaseHandler = () => {
        dispatch({type: 'INCREASE', payload: cartInfo.id});
    };

    const decreaseHandler = () => {
        dispatch({type: 'DECREASE', payload: cartInfo.id});
    };

    const removeHandler = () => {
        dispatch({type: 'DELETE', payload: cartInfo.id});
    };

    return (
        <Box sx={styles.container}>
            {cartState.addedProducts.find(cartProduct => cartProduct.id === cartData.id) ? (
                <Box sx={styles.quantityControls}>
                    <IconButton sx={styles.button} onClick={increaseHandler}>
                        +
                    </IconButton>
                    <Typography sx={styles.quantity}>{item.quantity}</Typography>
                    {item.quantity > 1 ? (
                        <IconButton sx={styles.button} onClick={decreaseHandler}>
                            -
                        </IconButton>
                    ) : (
                        <IconButton sx={styles.removeButton} onClick={removeHandler}>
                            <MdOutlineDelete/>
                        </IconButton>
                    )}
                </Box>
            ) : (
                <Button sx={styles.addButton} onClick={addHandler}>
                    Add To Cart
                </Button>
            )}
        </Box>
    );
};

AddToCart.propTypes = {
    cartData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default AddToCart;
