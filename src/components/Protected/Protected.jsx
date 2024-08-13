import React from 'react';
import PropTypes from 'prop-types';
import {Outlet, useNavigate} from 'react-router-dom';
import {Box, CircularProgress, Typography} from '@mui/material';
import {getCookie} from '../../utils/cookies'; // Функция для получения куков
import {styles} from './styles.js';

const Protected = ({children}) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = React.useState(null);

    React.useEffect(() => {
        const token = getCookie('authToken'); // Предполагается, что кука хранит токен аутентификации
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
            navigate('/auth/login');
        }
    }, [navigate]);

    if (isAuthenticated === null) { // Пока идет проверка аутентификации
        return (
            <Box sx={styles.loadingContainer}>
                <CircularProgress/>
                <Typography sx={styles.loadingText}>Checking authentication...</Typography>
            </Box>
        );
    }

    // Если аутентифицирован, рендерим детей, если они есть, или Outlet
    return (
        <>
            {isAuthenticated ? (children ? children : <Outlet/>) : null}
        </>
    );
};

Protected.propTypes = {
    children: PropTypes.node, // Измените на необязательный
};

export default Protected;
