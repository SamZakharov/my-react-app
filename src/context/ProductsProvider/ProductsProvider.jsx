import React, {createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import useProducts from '../utils/hooks/useProducts';
import {Box, Typography} from '@mui/material';
import {styles} from './styles';

const ProductsContext = createContext();

function ProductsProvider({children}) {
    const products = useProducts();

    return (
        <ProductsContext.Provider value={products}>
            <Box sx={styles.container}>
                <Typography variant="h6" sx={styles.header}>
                    Products
                </Typography>
                {children}
            </Box>
        </ProductsContext.Provider>
    );
}

ProductsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductsProvider;

export const useProductConsumer = () => {
    return useContext(ProductsContext);
};

export const useGetProduct = (id) => {
    const context = useContext(ProductsContext);
    if (context !== undefined) {
        return context.find((product) => product.id === id);
    }
};
