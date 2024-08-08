import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductById, selectProduct} from '../../store/productsSlice';
import {Button, Card, CardContent, CardMedia, CircularProgress, Container, Typography} from '@mui/material';
import {addItem} from '../../store/cartSlice';

const Product = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(selectProduct);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    if (loading) return <CircularProgress/>;
    if (error) return <Typography color="error">{error}</Typography>;

    if (!product) return null;

    return (
        <Container>
            <Card>
                <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt={product.title}
                />
                <CardContent>
                    <Typography variant="h4" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="h6" component="div">
                        ${product.price}
                    </Typography>
                    <Typography variant="body1">
                        {product.description}
                    </Typography>
                    <Button onClick={handleAddToCart} variant="contained" color="primary">
                        Add to Cart
                    </Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Product;
