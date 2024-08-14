import {Box, Typography} from '@mui/material';
import {styles} from './styles';
import emptycart from '../../assets/image/404/404.svg';

const EmptyCart = () => {
    return (
        <Box sx={styles.wrapper}>
            <img className='emptycart-image' src={emptycart} alt="emptycart"/>
            <Typography variant="h4" sx={styles.title}>
                Your cart is empty
            </Typography>
            <Typography variant="body1" sx={styles.subTitle}>
                Start adding items to enjoy shopping!
            </Typography>
        </Box>
    );
};


export default EmptyCart;
