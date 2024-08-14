// import {Box, Button, Container, Typography} from "@mui/material";
// import {useNavigate} from "react-router-dom";
// import {styles} from './styles';
//
// const Home = () => {
//     const navigate = useNavigate();
//
//     const handleButtonClick = () => {
//         navigate('/products'); // Здесь укажите маршрут для страницы магазина
//     };
//
//     return (
//         <Box sx={styles.homeContainer}>
//             <Container sx={styles.container}>
//
//                 <Box>
//                     <Typography
//                         variant="h4"
//                         align="center"
//                         sx={styles.title}>
//                         Welcome in our store
//                     </Typography>
//                 </Box>
//
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleButtonClick}
//                     sx={styles.button}>
//                     Let’s Start Shopping
//                 </Button>
//             </Container>
//         </Box>
//     );
// };
//
// export default Home;
import React from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useGetProductsQuery} from '../../redux/productsApi/productsApi.js'; // Импорт хука из вашего API-слайса
import {styles} from './styles';


const Home = () => {
    const navigate = useNavigate();
    const {data: products = [], isLoading, isError} = useGetProductsQuery();

    console.log('Products data:', products);


    const handleButtonClick = () => {
        navigate('/products'); // Здесь укажите маршрут для страницы магазина
    };

    if (isLoading) {
        console.log('Loading products...');
        return <Typography align="center">Loading...</Typography>;
    }

    if (isError) {
        console.log('Error loading products:', isError);
        return <Typography align="center">Error loading products.</Typography>;
    }

    return (
        <Box sx={styles.homeContainer}>
            <Container sx={styles.container}>
                <Box>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={styles.title}
                    >
                        Welcome to our store
                    </Typography>
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleButtonClick}
                    sx={styles.button}
                >
                    Let’s Start Shopping
                </Button>

                <Typography
                    variant="subtitle1"
                    color="indigo"
                    fontFamily="monospace"
                    sx={{mb: 2}}>
                    Here is an example of what you can buy:
                </Typography>

                <Box sx={styles.productsContainer}>
                    {products.length === 0 ? (
                        <Typography align="center">No products available.</Typography>
                    ) : (
                        products.slice(0, 3).map((product) => {
                            const hasImages = product.images && product.images.length > 0;
                            if (!hasImages) return null;

                            return (
                                <Box key={product.id} sx={styles.productBox}>
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        style={styles.productImage}
                                    />
                                    <Typography variant="body1" align="center" sx={styles.productTitle}>
                                        {product.title}
                                    </Typography>
                                    <Typography variant="body2" align="center" sx={styles.productPrice}>
                                        ${product.price}
                                    </Typography>
                                </Box>
                            );
                        })
                    )}
                </Box>

                {/*<Box sx={styles.productsContainer}>*/}
                {/*    {products.length === 0 ? (*/}
                {/*        <Typography align="center">No products available.</Typography>*/}
                {/*    ) : (*/}
                {/*        products.slice(0, 3).map((product) => {*/}
                {/*            return (*/}
                {/*                <Box key={product.id} sx={styles.productBox}>*/}
                {/*                    <img*/}
                {/*                        src={product.images[0]}*/}
                {/*                        alt={product.title}*/}
                {/*                        style={styles.productImage}*/}
                {/*                    />*/}
                {/*                    <Typography variant="body1" align="center" sx={styles.productTitle}>*/}
                {/*                        {product.title}*/}
                {/*                    </Typography>*/}
                {/*                    <Typography variant="body2" align="center" sx={styles.productPrice}>*/}
                {/*                        ${product.price}*/}
                {/*                    </Typography>*/}
                {/*                </Box>*/}
                {/*            );*/}
                {/*        })*/}
                {/*    )}*/}
                {/*</Box>*/}
            </Container>
        </Box>
    );
};

export default Home;

