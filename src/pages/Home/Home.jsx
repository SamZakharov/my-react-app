// import {Button, Container} from "@mui/material";
// import {useHomeStyles} from "./HomeStyles";
// import {useNavigate} from "react-router-dom";
//
// const Home = () => {
//     const classes = useHomeStyles();
//     const navigate = useNavigate();
//
//     const handleButtonClick = () => {
//         navigate('/products'); // Здесь укажите маршрут для страницы магазина
//     };
//
//     return (
//         <main>
//             <Container className={classes.container}>
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={handleButtonClick}
//                     className={classes.button}
//                 >
//                     Let’s Start Shopping
//                 </Button>
//             </Container>
//         </main>
//     );
// };
//
// export default Home;

import {Box, Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
// import styles from "./Home.module.css"; // Импортируем стили как CSS Module
import {styles} from './styles';

const Home = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/products'); // Здесь укажите маршрут для страницы магазина
    };

    return (
        <Box sx={styles.main}>
            <Container sx={styles.container}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleButtonClick}
                >
                    Let’s Start Shopping
                </Button>
            </Container>
        </Box>
    );
};

export default Home;
