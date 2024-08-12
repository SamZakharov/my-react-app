import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import AddToCart from "../../components/AddToCart";
import EmptyCart from "../../components/EmptyCart";
import {checkout, clear, selectCartState} from "../../redux/slices/cartSlice.js";
import {selectUserInfo} from "../../redux/slices/authSlice.js";
import {useCreateOrderMutation} from "../../redux/productsApi/productsApi.js";
import {styles} from './styles.js';
import PropTypes from "prop-types";

function CheckoutPage() {
    const dispatch = useDispatch();
    const cartState = useSelector(selectCartState);
    const userInfo = useSelector(selectUserInfo);
    const [createOrder, {isSuccess, isError, error}] = useCreateOrderMutation();

    useEffect(() => {
        if (!cartState.checkout) return;

        const postOrder = async () => {
            const orderData = {
                ...cartState,
                userInfo,
            };

            try {
                const response = await createOrder(orderData).unwrap();
                console.log(response);
                dispatch(clear());
            } catch (error) {
                console.error("Error posting order:", error);
            }
        };

        postOrder();
    }, [cartState, dispatch, userInfo, createOrder]);

    const checkoutHandler = () => {
        dispatch(checkout());
    };

    return (
        <>
            {cartState.checkout || !cartState.addedProducts.length ? (
                <EmptyCart/>
            ) : (
                <Box sx={styles.wrapper}>
                    <Grid container spacing={2} sx={styles.gridContainer}>
                        <Grid item xs={12} lg={8}>
                            <Paper sx={styles.cartDetails}>
                                <Box sx={styles.cartHeader}>
                                    <Typography variant="body1" sx={styles.cartHeaderText}>PRODUCT</Typography>
                                    <Typography variant="body1" sx={styles.cartHeaderText}>PRICE</Typography>
                                    <Typography variant="body1" sx={styles.cartHeaderText}>QUANTITY</Typography>
                                    <Typography variant="body1" sx={styles.cartHeaderText}>SUBTOTAL</Typography>
                                </Box>
                                {cartState.addedProducts.map((product) => (
                                    <Box key={product.id} sx={styles.cartItem}>
                                        <Typography variant="body2"
                                                    sx={styles.cartItemText}>{product.title}</Typography>
                                        <Typography variant="body2"
                                                    sx={styles.cartItemText}>$ {product.price}</Typography>
                                        <AddToCart
                                            cartData={{id: product.id, title: product.title, price: product.price}}/>
                                        <Typography variant="body2"
                                                    sx={styles.cartItemText}>$ {product.quantity * product.price}</Typography>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Paper sx={styles.summary}>
                                <Box sx={styles.summaryItem}>
                                    <Typography variant="h6">Order Total :</Typography>
                                    <Typography variant="h6">$ {cartState.totalPrice}</Typography>
                                </Box>
                                <Box sx={styles.summaryItem}>
                                    <Typography variant="h6">Sales volume :</Typography>
                                    <Typography variant="h6">{cartState.ordersCount}</Typography>
                                </Box>
                                <Box sx={styles.checkoutButtonWrapper}>
                                    <Button variant="contained" color="primary" onClick={checkoutHandler}>
                                        CHECKOUT
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
}

CheckoutPage.propTypes = {
    cartState: PropTypes.shape({
        checkout: PropTypes.bool.isRequired,
        addedProducts: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                quantity: PropTypes.number.isRequired,
            })
        ).isRequired,
        totalPrice: PropTypes.number.isRequired,
        ordersCount: PropTypes.number.isRequired,
    }).isRequired,
    userInfo: PropTypes.shape({
        // Определите форму userInfo при необходимости
    }).isRequired,
};

export default CheckoutPage;
