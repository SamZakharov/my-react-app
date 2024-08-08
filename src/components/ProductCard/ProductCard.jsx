import PropTypes from 'prop-types';
import {Card, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import {AddShoppingCart as AddShoppingCartIcon} from '@mui/icons-material';
import NotificationSnackbar from "../NotificationSnackbar/index.js";

const ProductCard = ({product, onAddToCart}) => {
    const {title, price, description, image} = product;

    if (!image) {
        console.error('Invalid product data:', product);
        return null;
    }

    return (
        <Card style={{height: '100%'}}>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
                style={{objectFit: 'contain'}}
            />
            <CardContent
                style={{flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <Typography variant="h6" component="div" noWrap>
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                        }}
                    >
                        {description}
                    </Typography>
                </div>
                <div>
                    <Typography variant="h6" component="div">
                        ${price}
                    </Typography>
                    <IconButton onClick={() => onAddToCart(product)}>
                        <AddShoppingCartIcon/>
                        <NotificationSnackbar/>
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
