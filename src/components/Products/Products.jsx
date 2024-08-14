// import React from 'react';
// import {useGetProductsQuery} from '../../redux/productsApi/productsApi.js';
// import Product from '../Product';
// import {Triangle} from 'react-loader-spinner';
// import Search from '../Search';
// import FilterCategory from '../FilterCategory';
// import NoProductFound from '../NoProductFound';
// import {Box, Container, Typography} from '@mui/material';
// import {styles} from "./styles.js";
// import searchFilterHandler from "../../utils/searchFilterHandler.js";
//
// function Products() {
//     const {data: products = [], error, isLoading} = useGetProductsQuery();
//     const [query, setQuery] = React.useState({category: 'all', search: ''});
//     const [notFound, setNotFound] = React.useState(false);
//
//     const filteredProducts = searchFilterHandler(query, products);
//
//     React.useEffect(() => {
//         const check = setTimeout(() => {
//             setNotFound(!filteredProducts.length && query !== '');
//         }, 1);
//         return () => clearTimeout(check);
//     }, [filteredProducts, query]);
//
//     return (
//         <Container sx={styles.container}>
//
//
//             <Box sx={styles.contentWrapper}>
//
//                 <Search query={{query, setQuery}} setQuery={setQuery}/>
//
//                 <Box sx={styles.productsGrid}>
//                     {isLoading && (
//                         <Box sx={styles.loader}>
//                             <Triangle
//                                 visible
//                                 height="100"
//                                 width="200"
//                                 color="#703BF7"
//                                 ariaLabel="triangle-loading"
//                             />
//                         </Box>
//                     )}
//                     {error && <Typography color="error">Error loading products</Typography>}
//                     {notFound && <NoProductFound/>}
//                     {!filteredProducts.length && !notFound && !isLoading && (
//                         <NoProductFound/>
//                     )}
//                     {filteredProducts.map((product) => (
//                         <Product key={product.id} productData={product}/>
//                     ))}
//                 </Box>
//             </Box>
//             <FilterCategory query={query} setQuery={setQuery}/>
//         </Container>
//     );
// }
//
// export default Products;
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
    const [query, setQuery] = React.useState({category: 'all', search: ''}); // Инициализируем с дефолтными значениями
    const [notFound, setNotFound] = React.useState(false);

    const filteredProducts = searchFilterHandler(query, products);

    React.useEffect(() => {
        const check = setTimeout(() => {
            // Обновляем условие проверки на отсутствие найденных товаров
            setNotFound(filteredProducts.length === 0 && query.search !== '' && query.category !== 'all');
        }, 1);
        return () => clearTimeout(check);
    }, [filteredProducts, query]);

    // Если происходит загрузка данных, отображаем спиннер
    if (isLoading) {
        return (
            <Container sx={styles.container}>
                <Box sx={styles.loader}>
                    <Triangle
                        visible
                        height="100"
                        width="200"
                        color="#703BF7"
                        ariaLabel="triangle-loading"
                    />
                </Box>
            </Container>
        );
    }

    // Если произошла ошибка загрузки данных, отображаем сообщение об ошибке
    if (error) {
        return (
            <Container sx={styles.container}>
                <Typography color="error">Error loading products</Typography>
            </Container>
        );
    }

    return (
        <Container sx={styles.container}>
            <Box sx={styles.contentWrapper}>
                <Search query={{query, setQuery}} setQuery={setQuery}/>

                <Box sx={styles.productsGrid}>
                    {notFound && <NoProductFound/>}
                    {!filteredProducts.length && !notFound && !isLoading && (
                        <NoProductFound/>
                    )}
                    {filteredProducts.map((product) => (
                        <Product key={product.id} productData={product}/>
                    ))}
                </Box>
            </Box>
            <FilterCategory query={query} setQuery={setQuery}/>
        </Container>
    );
}

export default Products;
