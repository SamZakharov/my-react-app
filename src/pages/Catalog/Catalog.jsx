import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllProducts} from '../../store/productsSlice';
import ProductCard from '../../components/ProductCard/ProductCard';
import {CircularProgress, Container, Grid, Typography} from '@mui/material';
import {addItem} from '../../store/cartSlice';

const Catalog = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    if (loading) return <CircularProgress/>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container>
            <Grid container spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ProductCard
                            product={product}
                            onAddToCart={handleAddToCart}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Catalog;
