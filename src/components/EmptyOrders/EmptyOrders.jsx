import {Box, Typography} from '@mui/material';
import {styles} from './styles';
import emptyorders from '../../assets/image/404/404.svg';

const EmptyOrders = () => {
    return (
        <Box sx={styles.wrapper}>
            <img className='emptyorders-image' src={emptyorders} alt="emptyorders"/>
            <Typography variant="h4" sx={styles.title}>
                No orders
            </Typography>
            <Typography variant="body1" sx={styles.subTitle}>
                {`You have no orders yet. It's never too late to change it.`}
            </Typography>
        </Box>
    );
};


export default EmptyOrders;
