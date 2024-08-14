import {Box, CardMedia, Typography} from '@mui/material';
import {styles} from './styles';
import searchnotfound from '../../assets/image/404/404.svg';

const NoProductFound = () => {
    return (
        <Box sx={styles.container}>
            <CardMedia
                component="img"
                image={searchnotfound}
                alt="No results found"
                sx={styles.image}
            />
            <Typography variant="h4" sx={styles.title}>
                No results found
            </Typography>
            <Typography variant="body1" sx={styles.subtitle}>
                Please try again.
            </Typography>
        </Box>
    );
};


export default NoProductFound;
