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

import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import styles from "./NotFound.module.css"; // Импортируем CSS модуль
import notFoundImage from "../../assets/404.svg";

function NotFound() {
    return (
        <Container className={styles.container}>
            <Box className={styles.imageContainer}>
                <img
                    className={styles.image}
                    src={notFoundImage}
                    alt="Page not found"
                />
            </Box>
            <Typography variant="h1" className={styles.errorText}>
                404
            </Typography>
            <Typography variant="body1" className={styles.message}>
                {`Oops! The page you're looking for can't be found.`}
            </Typography>
        </Container>
    );
}

export default NotFound;
