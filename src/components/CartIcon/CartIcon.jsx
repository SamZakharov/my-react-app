// import Badge from '@mui/material/Badge';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import {useNavigate} from 'react-router-dom';
// import {styled} from '@mui/material/styles';
// import {useSelector} from 'react-redux';
// import {selectCart} from '../../store/cartSlice.js';
//
// const StyledBadge = styled(Badge)(({theme}) => ({
//     '& .MuiBadge-badge': {
//         right: -3,
//         top: 13,
//         border: `2px solid ${theme.palette.background.paper}`,
//         padding: '0 4px',
//     },
// }));
//
// const CustomizedBadges = () => {
//     const navigate = useNavigate();
//     const cart = useSelector(selectCart);
//     const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0); // Подсчет общего количества товаров в корзине
//
//     const handleClick = () => {
//         navigate('/cart');
//     };
//
//     return (
//         <IconButton aria-label="cart" onClick={handleClick}>
//             <StyledBadge badgeContent={cartItemCount} color="secondary">
//                 <ShoppingCartIcon/>
//             </StyledBadge>
//         </IconButton>
//     );
// };
//
// export default CustomizedBadges;

import React from 'react';
import {Badge, IconButton} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from 'react-redux';

const CartIcon = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const itemCount = cartItems.length;

    return (
        <IconButton aria-label="cart">
            <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCartIcon/>
            </Badge>
        </IconButton>
    );
};

export default CartIcon;

