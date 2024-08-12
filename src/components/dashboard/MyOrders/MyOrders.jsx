import {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {useAuth} from "../../../context/AuthenticateProvider";
import {api} from "../../../services/axiosConfig.js";
import {Box, CircularProgress, Paper, Typography} from "@mui/material";
import EmptyOrders from "../../EmptyOrders";
import {styles} from "./styles.js";

const MyOrders = () => {
    const {isAuthenticated} = useAuth();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const {data, status} = await api.get("/user/myorders");
                if (status === 204) setIsloading(false);
                setOrders(data);
                setIsloading(false);
            } catch (error) {
                console.error("Error fetching orders:", error);
                setIsloading(false);
            }
        };

        if (isAuthenticated) getOrders();
    }, [isAuthenticated]);

    return (
        <Box sx={styles.container}>
            {isLoading ? (
                <CircularProgress color="primary"/>
            ) : !orders.length ? (
                <EmptyOrders/>
            ) : (
                orders.map((order) => (
                    <Paper key={order._id} sx={styles.orderCard}>
                        <ul>
                            {order.addedProducts.map((product) => (
                                <Box key={product._id} sx={styles.productRow}>
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
                            ))}
                        </ul>
                        <Box sx={styles.orderSummary}>
                            <Typography variant="body1" sx={styles.orderTotal}>
                                Total Orders: {order.ordersCount}
                            </Typography>
                            <Typography variant="body1" sx={styles.orderTotal}>
                                Total Price: ${order.totalPrice}
                            </Typography>
                        </Box>
                    </Paper>
                ))
            )}
        </Box>
    );
};

MyOrders.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            addedProducts: PropTypes.arrayOf(
                PropTypes.shape({
                    _id: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    price: PropTypes.number.isRequired,
                    quantity: PropTypes.number.isRequired,
                })
            ).isRequired,
            ordersCount: PropTypes.number.isRequired,
            totalPrice: PropTypes.number.isRequired,
        })
    ),
};

export default MyOrders;
