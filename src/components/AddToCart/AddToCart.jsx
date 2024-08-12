import PropTypes from 'prop-types';
import {MdOutlineDelete} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Box, Button, IconButton, Typography} from '@mui/material';
import {addProduct, decrease, deleteProduct, increase} from '../../redux/slices/cartSlice';
import {styles} from './styles';

const AddToCart = ({cartData}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const addedProducts = useSelector(state => state.cart.addedProducts);

    const cartInfo = {...cartData, quantity: 1};
    const item = addedProducts.find(product => product.id === cartInfo.id);

    const addHandler = () => {
        if (!isAuthenticated) return navigate('/auth/login');
        dispatch(addProduct(cartInfo));
    };

    const increaseHandler = () => {
        dispatch(increase(cartInfo.id));
    };

    const decreaseHandler = () => {
        dispatch(decrease(cartInfo.id));
    };

    const removeHandler = () => {
        dispatch(deleteProduct(cartInfo.id));
    };

    return (
        <Box sx={styles.container}>
            {item ? (
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
