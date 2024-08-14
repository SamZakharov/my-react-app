// import {Box, Container, Typography} from "@mui/material";
// import {useNotFoundStyles} from "./NotFoundStyles";
// import notFoundImage from "../../assets/404.svg";
//
// function NotFound() {
//     const classes = useNotFoundStyles();
//
//     return (
//         <Container className={classes.container}>
//             <Box className={classes.imageContainer}>
//                 <img
//                     className={classes.image}
//                     src={notFoundImage}
//                     alt="Page not found"
//                 />
//             </Box>
//             <Typography variant="h1" className={classes.errorText}>
//                 404
//             </Typography>
//             <Typography variant="body1" className={classes.message}>
//                 {`Oops! The page you're looking for can't be found.`}
//             </Typography>
//         </Container>
//     );
// }
//
// export default NotFound;


import {Box, Container, Typography} from '@mui/material';
import {styles} from './styles';
import img from '../../assets/image/404/404.svg'

const NotFound = () => {
    return (
        <Container sx={styles.container}>
            <Box sx={styles.imageContainer}>
                <img
                    sx={styles.image}
                    src={img}
                    alt="Page not found"
                />
            </Box>
            <Typography variant="h1" sx={styles.errorText}>
                404
            </Typography>
            <Typography variant="body1" sx={styles.message}>
                {`Oops! The page you're looking for can't be found.`}
            </Typography>
        </Container>
    );
};


export default NotFound;
