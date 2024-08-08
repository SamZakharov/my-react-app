import React from 'react';
import {useNavigate} from 'react-router-dom';
import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    My E-Commerce Store
                </Typography>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="cart"
                    onClick={handleCartClick}
                >
                    <ShoppingCartIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
