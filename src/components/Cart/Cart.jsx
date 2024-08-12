import {useDispatch, useSelector} from 'react-redux';
import {Box, Button, Typography} from '@mui/material';
import {deleteProduct} from '../../redux/slices/cartSlice';
import {styles} from './styles';

function Cart() {
    const dispatch = useDispatch();
    const {addedProducts, totalPrice} = useSelector((state) => state.cart);

    return (
        <Box sx={styles.container}>
            <Typography variant="h6" sx={styles.header}>
                Cart
            </Typography>
            {addedProducts.length === 0 ? (
                <Typography>Your cart is empty</Typography>
            ) : (
                <>
                    {addedProducts.map((item) => (
                        <Box key={item.id} sx={styles.item}>
                            <Typography variant="body1">{item.title}</Typography>
                            <Typography variant="body2">Price: ${item.price.toLocaleString()}</Typography>
                            <Typography variant="body2">Quantity: {item.quantity}</Typography>
                            <Button onClick={() => dispatch(deleteProduct(item.id))} sx={styles.removeButton}>
                                Remove
                            </Button>
                        </Box>
                    ))}
                    <Box sx={styles.totalContainer}>
                        <Typography variant="h6">Total Price: ${totalPrice.toLocaleString()}</Typography>
                    </Box>
                </>
            )}
        </Box>
    );
}

export default Cart;
