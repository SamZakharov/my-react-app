import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {Triangle} from 'react-loader-spinner';
import {Box, Paper, Typography} from '@mui/material';
import {useGetProductByIdQuery} from '../../redux/productsApi/productsApi.js';
import AddToCart from '../../components/AddToCart';
import ImageSlider from '../../components/ImageSlider';
import NoProductFound from '../../components/NoProductFound';
import {styles} from './styles';

export default function DetailPage() {
    const {id} = useParams();
    const {data: product, error, isLoading} = useGetProductByIdQuery(id);

    // State to manage the current image index
    const [imgIndex, setImgIndex] = useState(0);

    if (isLoading) {
        return (
            <Box sx={styles.loaderWrapper}>
                <Triangle
                    visible
                    height="200"
                    width="200"
                    color="#703BF7"
                    ariaLabel="triangle-loading"
                />
            </Box>
        );
    }

    if (error || !product) {
        return <NoProductFound/>;
    }

    return (
        <Box sx={styles.wrapper}>
            <Paper sx={styles.container}>
                <ImageSlider
                    imageList={product.images || []} // Проверяем наличие images
                    setImgIndex={setImgIndex}
                    imgIndex={imgIndex}
                />
                <Box sx={styles.details}>
                    <Typography variant="h4" component="p" sx={styles.title}>
                        {product.title}
                    </Typography>
                    <Typography variant="body2" sx={styles.category}>
                        {product.category?.name || 'Unknown Category'}
                    </Typography>
                    <Typography variant="body1" sx={styles.description}>
                        {product.description || 'No description available'}
                    </Typography>
                    <Box sx={styles.priceContainer}>
                        <Box>
                            <Typography variant="body2" sx={styles.priceLabel}>
                                Price
                            </Typography>
                            <Typography variant="h5" sx={styles.price}>
                                $ {product.price.toLocaleString()}
                            </Typography>
                        </Box>
                        <AddToCart
                            cartData={{
                                id: product.id,
                                title: product.title,
                                price: product.price,
                            }}
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
