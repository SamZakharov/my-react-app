// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchProductById} from '../../store/slices/productsSlice.js';
// import {Triangle} from 'react-loader-spinner';
// import {Box, Paper, Typography} from '@mui/material';
// import {useParams} from 'react-router-dom';
// import AddToCart from '../../components/AddToCart';
// import ImageSlider from '../../components/ImageSlider';
// import NoProductFound from '../../components/NoProductFound';
// import {useDetailPageStyles} from './DetailPageStyles';
//
// export default function DetailPage() {
//     const dispatch = useDispatch();
//     const {id} = useParams();
//     const product = useSelector((state) => state.products.productById[id]);
//     const status = useSelector((state) => state.products.status);
//     const classes = useDetailPageStyles();
//
//     useEffect(() => {
//         if (!product) {
//             dispatch(fetchProductById(id));
//         }
//     }, [dispatch, id, product]);
//
//     return (
//         <Box className={classes.wrapper}>
//             {status === 'loading' ? (
//                 <Triangle
//                     visible
//                     height="200"
//                     width="200"
//                     color="#703BF7"
//                     ariaLabel="triangle-loading"
//                 />
//             ) : !product ? (
//                 <NoProductFound/>
//             ) : (
//                 <Paper className={classes.container}>
//                     <ImageSlider
//                         imageList={product.images}
//                         setImgIndex={setImgIndex}
//                         imgIndex={imgIndex}
//                     />
//                     <Box className={classes.details}>
//                         <Typography variant="h4" component="p" className={classes.title}>
//                             {product.title}
//                         </Typography>
//                         <Typography variant="body2" className={classes.category}>
//                             {product.category.name}
//                         </Typography>
//                         <Typography variant="body1" className={classes.description}>
//                             {product.description}
//                         </Typography>
//                         <Box className={classes.priceContainer}>
//                             <Box>
//                                 <Typography variant="body2" className={classes.priceLabel}>
//                                     Price
//                                 </Typography>
//                                 <Typography variant="h5" className={classes.price}>
//                                     $ {product.price.toLocaleString()}
//                                 </Typography>
//                             </Box>
//                             <AddToCart
//                                 cartData={{
//                                     id: product.id,
//                                     title: product.title,
//                                     price: product.price,
//                                 }}
//                             />
//                         </Box>
//                     </Box>
//                 </Paper>
//             )}
//         </Box>
//     );
// }

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductById} from '../../store/slices/productsSlice.js';
import {Triangle} from 'react-loader-spinner';
import {Box, Paper, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import AddToCart from '../../components/AddToCart';
import ImageSlider from '../../components/ImageSlider';
import NoProductFound from '../../components/NoProductFound';
import styles from './DetailPage.module.css'; // Importing CSS module

export default function DetailPage() {
    const dispatch = useDispatch();
    const {id} = useParams();
    const product = useSelector((state) => state.products.productById[id]);
    const status = useSelector((state) => state.products.status);

    // State to manage the current image index
    const [imgIndex, setImgIndex] = useState(0);

    useEffect(() => {
        if (!product) {
            dispatch(fetchProductById(id));
        }
    }, [dispatch, id, product]);

    console.log(product?.images);

    return (
        <Box className={styles.wrapper}>
            {status === 'loading' ? (
                <Triangle
                    visible
                    height="200"
                    width="200"
                    color="#703BF7"
                    ariaLabel="triangle-loading"
                />
            ) : !product ? (
                <NoProductFound/>
            ) : (
                <Paper className={styles.container}>
                    <ImageSlider
                        imageList={product.images}
                        setImgIndex={setImgIndex}
                        imgIndex={imgIndex}
                    />
                    <Box className={styles.details}>
                        <Typography variant="h4" component="p" className={styles.title}>
                            {product.title}
                        </Typography>
                        <Typography variant="body2" className={styles.category}>
                            {product.category.name}
                        </Typography>
                        <Typography variant="body1" className={styles.description}>
                            {product.description}
                        </Typography>
                        <Box className={styles.priceContainer}>
                            <Box>
                                <Typography variant="body2" className={styles.priceLabel}>
                                    Price
                                </Typography>
                                <Typography variant="h5" className={styles.price}>
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
            )}
        </Box>
    );
}
