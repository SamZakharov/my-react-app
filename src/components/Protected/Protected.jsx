import React from 'react';
import PropTypes from 'prop-types';
import {Outlet, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Box, CircularProgress, Typography} from '@mui/material';
import {selectIsAuthenticated} from '../../store/slices/authSlice.js';
import {styles} from "./styles.js";

const Protected = ({children}) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth/login');
        }
    }, [isAuthenticated, navigate]);

    if (isAuthenticated === null) { // Check if authentication status is still loading
        return (
            <Box sx={styles.loadingContainer}>
                <CircularProgress/>
                <Typography sx={styles.loadingText}>Checking authentication...</Typography>
            </Box>
        );
    }

    return (
        <>
            {children}
            <Outlet/>
        </>
    );
};

Protected.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Protected;
