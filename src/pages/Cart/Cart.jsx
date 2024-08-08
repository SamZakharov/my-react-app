import React from 'react';
import {useSelector} from 'react-redux';
import {Button, Container, List, ListItem, ListItemText, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleHome = () => {
        navigate('/'); // Go to the home page
    };

    if (cartItems.length === 0) {
        return (
            <Container>
                <Typography variant="h4" component="div" gutterBottom>
                    Your Cart
                </Typography>
                <Typography variant="body1" color="textSecondary">
                    Your cart is empty.
                </Typography>
                <Button variant="outlined" onClick={handleBack}>
                    Back
                </Button>
                <Button variant="outlined" onClick={handleHome}>
                    Home
                </Button>
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4" component="div" gutterBottom>
                Your Cart
            </Typography>
            <List>
                {cartItems.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={item.title}
                            secondary={`Price: $${item.price}`}
                        />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" onClick={handleCheckout}>
                Proceed to Checkout
            </Button>
            <Button variant="outlined" onClick={handleBack}>
                Back
            </Button>
            <Button variant="outlined" onClick={handleHome}>
                Home
            </Button>
        </Container>
    );
};

export default Cart;
