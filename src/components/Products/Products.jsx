import React from 'react';
import {useGetProductsQuery} from '../../redux/productsApi/productsApi.js';
import Product from '../Product';
import {Triangle} from 'react-loader-spinner';
import Search from '../Search';
import FilterCategory from '../FilterCategory';
import NoProductFound from '../NoProductFound';
import {Box, Container, Typography} from '@mui/material';
import {styles} from "./styles.js";
import searchFilterHandler from "../../utils/searchFilterHandler.js";

function Products() {
    const {data: products = [], error, isLoading} = useGetProductsQuery();
    const [query, setQuery] = React.useState({});
    const [notFound, setNotFound] = React.useState(false);

    const filteredProducts = searchFilterHandler(query, products);

    React.useEffect(() => {
        const check = setTimeout(() => {
            setNotFound(!filteredProducts.length && query !== '');
        }, 1);
        return () => clearTimeout(check);
    }, [filteredProducts, query]);

    return (
        <Container sx={styles.container}>


            <Box sx={styles.contentWrapper}>
                <Search query={{query, setQuery}} setQuery={setQuery}/>
                <Box sx={styles.productsGrid}>
                    {isLoading && (
                        <Box sx={styles.loader}>
                            <Triangle
                                visible
                                height="200"
                                width="200"
                                color="#703BF7"
                                ariaLabel="triangle-loading"
                            />
                        </Box>
                    )}
                    {error && <Typography color="error">Error loading products</Typography>}
                    {notFound && <NoProductFound/>}
                    {!filteredProducts.length && !notFound && !isLoading && (
                        <NoProductFound/>
                    )}
                    {filteredProducts.map((product) => (
                        <Product key={product.id} productData={product}/>
                    ))}
                </Box>
            </Box>
            <FilterCategory query={{query}} setQuery={setQuery} sx={styles.categoryContainer}/>
        </Container>
    );
}

export default Products;
