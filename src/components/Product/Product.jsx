// import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
// import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';
// import AddToCart from '../AddToCart';
// import {styles} from './styles';
// import Button from "@mui/material/Button";
//
// const Product = ({productData}) => {
//     const {id, title, price, images, category, description} = productData;
//     const image = images[0];
//     const categoryName = category.name;
//
//     return (
//         <Card sx={styles.main}>
//             <Link to={`${id}`}>
//                 <CardMedia
//                     component="img"
//                     image={image}
//                     alt={title}
//                     sx={styles.image}
//                 />
//             </Link>
//             <CardContent>
//                 <Typography variant="body2" color="textSecondary" sx={styles.category}>
//                     {categoryName}
//                 </Typography>
//                 <Typography variant="h6" component="div" sx={styles.title}>
//                     {title}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" sx={styles.description}>
//                     {description.length > 100 ? `${description.slice(0, 100)}...` : description}
//                     <Link to={`${id}`} state={{some: 'value'}} style={styles.readMore}>
//                         Read More
//                     </Link>
//                 </Typography>
//
//                 <Box sx={styles.priceContainer}>
//                     <Typography variant="body2" color="textSecondary">
//                         Price
//                     </Typography>
//                     <Typography variant="h6" sx={styles.price}>
//                         ${price.toLocaleString()}
//                     </Typography>
//                 </Box>
//                 <AddToCart cartData={{id, title, price}}/>
//                 <Button sx={styles.button}>Add to cart</Button>
//             </CardContent>
//         </Card>
//     );
// }
//
// Product.propTypes = {
//     productData: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         images: PropTypes.arrayOf(PropTypes.string).isRequired,
//         category: PropTypes.shape({
//             name: PropTypes.string.isRequired,
//         }).isRequired,
//         description: PropTypes.string.isRequired,
//     }).isRequired,
// };
//
// export default Product;


import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';
import AddToCart from '../AddToCart';
import {styles} from './styles';
import Button from "@mui/material/Button";

const Product = ({productData}) => {
    const {id, title, price, images, category, description} = productData;
    const image = images[0];
    const categoryName = category.name;

    return (
        <Card sx={styles.main}>
            <Link to={`/products/${id}`}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={styles.image}
                />
            </Link>
            <CardContent>
                <Typography variant="body2" color="textSecondary" sx={styles.category}>
                    {categoryName}
                </Typography>
                <Typography variant="h6" component="div" sx={styles.title}>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={styles.description}>
                    {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                    <Link to={`/products/${id}`} state={{some: 'value'}} style={styles.readMore}>
                        Read More
                    </Link>
                </Typography>

                <Box sx={styles.priceContainer}>
                    <Typography variant="body2" color="textSecondary">
                        Price
                    </Typography>
                    <Typography variant="h6" sx={styles.price}>
                        ${price.toLocaleString()}
                    </Typography>
                </Box>
                <AddToCart cartData={{id, title, price}}/>
                <Button sx={styles.button}>Add to cart</Button>
            </CardContent>
        </Card>
    );
}

Product.propTypes = {
    productData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        category: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
};

export default Product;
