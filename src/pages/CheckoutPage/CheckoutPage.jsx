// import React, {useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {Box, Button, Grid, Paper, Typography} from "@mui/material";
// import AddToCart from "../../components/AddToCart";
// import EmptyCart from "../../components/EmptyCart";
// import api from "../../services/axiosConfig.js";
// import {useCheckoutPageStyles} from "./CheckoutPageStyles";
// import {checkout, clearCart, selectCartState} from "../../store/slices/cartSlice"; // Импортируем действия и селектор
// import {selectUserInfo} from "../../store/slices/authSlice.js"; // Импортируем селектор для информации о пользователе
//
// export default function CheckoutPage() {
//     const classes = useCheckoutPageStyles();
//     const dispatch = useDispatch();
//     const cartState = useSelector(selectCartState);
//     const userInfo = useSelector(selectUserInfo);
//
//     useEffect(() => {
//         if (!cartState.checkout) return;
//         const postOrder = async () => {
//             const orderData = {
//                 ...cartState,
//                 userInfo,
//             };
//             try {
//                 const response = await api.post("/order", orderData);
//                 console.log(response);
//                 dispatch(clearCart()); // Используем действие для очистки корзины
//             } catch (error) {
//                 console.error("Error posting order:", error);
//             }
//         };
//         postOrder();
//     }, [cartState, dispatch, userInfo]);
//
//     const checkoutHandler = () => {
//         dispatch(checkout()); // Используем действие для начала оформления заказа
//     };
//
//     return (
//         <>
//             {cartState.checkout || !cartState.addedProducts.length ? (
//                 <EmptyCart/>
//             ) : (
//                 <Box className={classes.wrapper}>
//                     <Grid container spacing={2} className={classes.gridContainer}>
//                         <Grid item xs={12} lg={8}>
//                             <Paper className={classes.cartDetails}>
//                                 <Box className={classes.cartHeader}>
//                                     <Typography variant="body1" className={classes.cartHeaderText}>PRODUCT</Typography>
//                                     <Typography variant="body1" className={classes.cartHeaderText}>PRICE</Typography>
//                                     <Typography variant="body1" className={classes.cartHeaderText}>QUANTITY</Typography>
//                                     <Typography variant="body1" className={classes.cartHeaderText}>SUBTOTAL</Typography>
//                                 </Box>
//                                 {cartState.addedProducts.map((product) => (
//                                     <Box key={product.id} className={classes.cartItem}>
//                                         <Typography variant="body2"
//                                                     className={classes.cartItemText}>{product.title}</Typography>
//                                         <Typography variant="body2"
//                                                     className={classes.cartItemText}>$ {product.price}</Typography>
//                                         <AddToCart
//                                             cartData={{id: product.id, title: product.title, price: product.price}}/>
//                                         <Typography variant="body2"
//                                                     className={classes.cartItemText}>$ {product.quantity * product.price}</Typography>
//                                     </Box>
//                                 ))}
//                             </Paper>
//                         </Grid>
//                         <Grid item xs={12} lg={4}>
//                             <Paper className={classes.summary}>
//                                 <Box className={classes.summaryItem}>
//                                     <Typography variant="h6">Order Total :</Typography>
//                                     <Typography variant="h6">$ {cartState.totalPrice}</Typography>
//                                 </Box>
//                                 <Box className={classes.summaryItem}>
//                                     <Typography variant="h6">Sales volume :</Typography>
//                                     <Typography variant="h6">{cartState.ordersCount}</Typography>
//                                 </Box>
//                                 <Box className={classes.checkoutButtonWrapper}>
//                                     <Button variant="contained" color="primary" onClick={checkoutHandler}>
//                                         CHECKOUT
//                                     </Button>
//                                 </Box>
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                 </Box>
//             )}
//         </>
//     );
// }


import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import AddToCart from "../../components/AddToCart";
import EmptyCart from "../../components/EmptyCart";
import api from "../../services/axiosConfig.js";
import styles from "./CheckoutPage.module.css"; // Импортируем CSS модуль
import {checkout, clearCart, selectCartState} from "../../store/slices/cartSlice"; // Импортируем действия и селектор
import {selectUserInfo} from "../../store/slices/authSlice.js"; // Импортируем селектор для информации о пользователе

export default function CheckoutPage() {
    const dispatch = useDispatch();
    const cartState = useSelector(selectCartState);
    const userInfo = useSelector(selectUserInfo);

    useEffect(() => {
        if (!cartState.checkout) return;
        const postOrder = async () => {
            const orderData = {
                ...cartState,
                userInfo,
            };
            try {
                const response = await api.post("/order", orderData);
                console.log(response);
                dispatch(clearCart()); // Используем действие для очистки корзины
            } catch (error) {
                console.error("Error posting order:", error);
            }
        };
        postOrder();
    }, [cartState, dispatch, userInfo]);

    const checkoutHandler = () => {
        dispatch(checkout()); // Используем действие для начала оформления заказа
    };

    return (
        <>
            {cartState.checkout || !cartState.addedProducts.length ? (
                <EmptyCart/>
            ) : (
                <Box className={styles.wrapper}>
                    <Grid container spacing={2} className={styles.gridContainer}>
                        <Grid item xs={12} lg={8}>
                            <Paper className={styles.cartDetails}>
                                <Box className={styles.cartHeader}>
                                    <Typography variant="body1" className={styles.cartHeaderText}>PRODUCT</Typography>
                                    <Typography variant="body1" className={styles.cartHeaderText}>PRICE</Typography>
                                    <Typography variant="body1" className={styles.cartHeaderText}>QUANTITY</Typography>
                                    <Typography variant="body1" className={styles.cartHeaderText}>SUBTOTAL</Typography>
                                </Box>
                                {cartState.addedProducts.map((product) => (
                                    <Box key={product.id} className={styles.cartItem}>
                                        <Typography variant="body2"
                                                    className={styles.cartItemText}>{product.title}</Typography>
                                        <Typography variant="body2"
                                                    className={styles.cartItemText}>$ {product.price}</Typography>
                                        <AddToCart
                                            cartData={{id: product.id, title: product.title, price: product.price}}/>
                                        <Typography variant="body2"
                                                    className={styles.cartItemText}>$ {product.quantity * product.price}</Typography>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Paper className={styles.summary}>
                                <Box className={styles.summaryItem}>
                                    <Typography variant="h6">Order Total :</Typography>
                                    <Typography variant="h6">$ {cartState.totalPrice}</Typography>
                                </Box>
                                <Box className={styles.summaryItem}>
                                    <Typography variant="h6">Sales volume :</Typography>
                                    <Typography variant="h6">{cartState.ordersCount}</Typography>
                                </Box>
                                <Box className={styles.checkoutButtonWrapper}>
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
