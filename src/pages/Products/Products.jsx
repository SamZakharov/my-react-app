// import React, {useEffect} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchAllProducts} from '../../store/slices/productsSlice.js';
// import Product from '../../components/Product';
// import {Triangle} from 'react-loader-spinner';
// import Search from '../../components/Search';
// import FilterCategory from '../../components/FilterCategory';
// import searchFilterHandler from '../../utils/searchFilterHandler';
// import NoProductFound from '../../components/NoProductFound';
// import {Box, Container} from '@mui/material';
// import {useProductsStyles} from './ProductsStyles';
//
// function Products() {
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.products.allProducts);
//     const status = useSelector((state) => state.products.status);
//     const [query, setQuery] = React.useState({search: ""});
//     const [notFound, setNotFound] = React.useState(false);
//
//     useEffect(() => {
//         dispatch(fetchAllProducts());
//     }, [dispatch]);
//
//     const data = searchFilterHandler(query, products);
//     const classes = useProductsStyles();
//
//     useEffect(() => {
//         const check = setTimeout(() => {
//             if (!data.length && query.search) {
//                 setNotFound(true);
//             } else {
//                 setNotFound(false);
//             }
//         }, 1);
//         return () => {
//             clearTimeout(check);
//         };
//     }, [data, query.search]);
//
//     return (
//         <Container className={classes.container}>
//             <Search query={{query, setQuery}}/>
//             <Box className={classes.contentWrapper}>
//                 <Box className={classes.productsGrid}>
//                     {status === 'loading' && (
//                         <Box className={classes.loader}>
//                             <Triangle
//                                 visible
//                                 height="200"
//                                 width="200"
//                                 color="#703BF7"
//                                 ariaLabel="triangle-loading"
//                             />
//                         </Box>
//                     )}
//                     {notFound && <NoProductFound/>}
//                     {!data.length && !notFound && status === 'succeeded' && (
//                         <NoProductFound/>
//                     )}
//                     {data.map((product) => (
//                         <Product key={product.id} productData={product}/>
//                     ))}
//                 </Box>
//                 <FilterCategory query={{query, setQuery}}/>
//             </Box>
//         </Container>
//     );
// }
//
// export default Products;


import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllProducts} from '../../store/slices/productsSlice.js';
import Product from '../../components/Product';
import {Triangle} from 'react-loader-spinner';
import Search from '../../components/Search';
import FilterCategory from '../../components/FilterCategory';
import searchFilterHandler from '../../utils/searchFilterHandler';
import NoProductFound from '../../components/NoProductFound';
import {Box, Container} from '@mui/material';
import styles from './Products.module.css'; // Import CSS module
import {useSearchParams} from 'react-router-dom';

function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.allProducts);
    const status = useSelector((state) => state.products.status);
    const [searchParams] = useSearchParams();
    const [query, setQuery] = React.useState({search: ""});
    const [notFound, setNotFound] = React.useState(false);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    useEffect(() => {
        const searchQuery = searchParams.get('search');
        if (searchQuery) {
            setQuery(() => ({search: searchQuery}));
            setNotFound(!products.length);
        }
    }, [searchParams, products]);

    const data = searchFilterHandler(query, products);

    useEffect(() => {
        const check = setTimeout(() => {
            if (!data.length && query.search) {
                setNotFound(true);
            } else {
                setNotFound(false);
            }
        }, 1);
        return () => {
            clearTimeout(check);
        };
    }, [data, query.search]);

    return (
        <Container className={styles.container}>
            <Search query={{query, setQuery}}/>
            <FilterCategory query={query} setQuery={setQuery}/>
            <Box className={styles.contentWrapper}>
                <Box className={styles.productsGrid}>
                    {status === 'loading' && (
                        <Box className={styles.loader}>
                            <Triangle
                                visible
                                height="200"
                                width="200"
                                color="#703BF7"
                                ariaLabel="triangle-loading"
                            />
                        </Box>
                    )}
                    {notFound && <NoProductFound/>}
                    {!data.length && !notFound && status === 'succeeded' && (
                        <NoProductFound/>
                    )}
                    {data.map((product) => (
                        <Product key={product.id} productData={product}/>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default Products;