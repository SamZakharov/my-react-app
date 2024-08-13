import {Box, Button, Container} from "@mui/material";
import {useNavigate} from "react-router-dom";
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
