import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, CircularProgress, List, ListItem, Paper, Typography} from '@mui/material';
import {createOrder} from '../../../redux/slices/orderSlice'; // Импортируем экшены из слайса заказов
import EmptyOrders from '../../EmptyOrders';
import {styles} from './styles';

const MyOrders = () => {
    const dispatch = useDispatch();
    const {orders, status, error} = useSelector((state) => state.orders);
    const {cartItems} = useSelector((state) => state.cart); // Предположим, что у вас есть состояние корзины

    useEffect(() => {
        if (cartItems.length > 0) {
            // Создаем данные заказа на основе корзины
            const orderData = {
                addedProducts: cartItems,
                ordersCount: cartItems.length, // Примерный подсчет количества товаров
                totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0) // Примерный подсчет общей стоимости
                // Другие необходимые поля, такие как адрес, способ оплаты и т. д.
            };
            console.log(order.addedProducts);
            dispatch(createOrder(orderData));
        }
    }, [dispatch, cartItems]); // Добавляем cartItems в зависимости

    if (status === 'loading') return <CircularProgress color="primary"/>;
    if (status === 'failed') return <Typography>Error creating order: {error}</Typography>;

    // return (
    //     <Box sx={styles.container}>
    //         {!orders.length ? (
    //             <EmptyOrders/>
    //         ) : (
    //             orders.map((order) => (
    //                 <Paper key={order.id} sx={styles.orderCard}> {/* Используем id вместо _id */}
    //                     <List sx={{padding: 0, margin: 0}}>
    //                         {order.addedProducts.map((product) => (
    //                             <ListItem key={product.id} sx={styles.productRow}> {/* Используем id вместо _id */}
    //                                 <Box sx={{flexGrow: 1}}>
    //                                     <Typography variant="body1" sx={styles.productTitle}>
    //                                         {product.title}
    //                                     </Typography>
    //                                     <Typography variant="body1" sx={styles.productPrice}>
    //                                         ${product.price}
    //                                     </Typography>
    //                                     <Typography variant="body1" sx={styles.productQuantity}>
    //                                         Quantity: {product.quantity}
    //                                     </Typography>
    //                                 </Box>
    //                             </ListItem>
    //                         ))}
    //                     </List>
    //                     <Box sx={styles.orderSummary}>
    //                         <Typography variant="body1" sx={styles.orderTotal}>
    //                             Total Orders: {order.ordersCount}
    //                         </Typography>
    //                         <Typography variant="body1" sx={styles.orderTotal}>
    //                             Total Price: ${order.totalPrice}
    //                         </Typography>
    //                     </Box>
    //                 </Paper>
    //             ))
    //         )}
    //     </Box>
    // );
    return (
        <Box sx={styles.container}>
            {!orders.length ? (
                <EmptyOrders/>
            ) : (
                orders.map((order) => {
                    const productItems = [];
                    order.addedProducts.forEach((product) => {
                        productItems.push(
                            <ListItem key={product.id} sx={styles.productRow}>
                                <Box sx={{flexGrow: 1}}>
                                    <Typography variant="body1" sx={styles.productTitle}>
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body1" sx={styles.productPrice}>
                                        ${product.price}
                                    </Typography>
                                    <Typography variant="body1" sx={styles.productQuantity}>
                                        Quantity: {product.quantity}
                                    </Typography>
                                </Box>
                            </ListItem>
                        );
                    });

                    return (
                        <Paper key={order.id} sx={styles.orderCard}>
                            <List sx={{padding: 0, margin: 0}}>
                                {productItems}
                            </List>
                            <Box sx={styles.orderSummary}>
                                <Typography variant="body1" sx={styles.orderTotal}>
                                    Total Orders: {order.ordersCount}
                                </Typography>
                                <Typography variant="body1" sx={styles.orderTotal}>
                                    Total Price: ${order.totalPrice}
                                </Typography>
                            </Box>
                        </Paper>
                    );
                })
            )}
        </Box>
    );

};

export default MyOrders;
