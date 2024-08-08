import React from 'react';
import {IconButton, ListItem, ListItemText} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import PropTypes from 'prop-types';

const CartItem = ({item, onRemove}) => {
    return (
        <ListItem>
            <ListItemText primary={item.title} secondary={`$${item.price}`}/>
            <IconButton edge="end" onClick={() => onRemove(item.id)}>
                <RemoveIcon/>
            </IconButton>
        </ListItem>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default CartItem;
