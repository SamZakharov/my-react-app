import React from 'react';
import PropTypes from 'prop-types';
import {Outlet, useNavigate} from 'react-router-dom';
import {useAuth} from '../../context/AuthenticateProvider';
import {Box} from '@mui/material';

function AuthProtected({children}) {
    const navigate = useNavigate();
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        return (
            <Box>
                {children}
                <Outlet/>
            </Box>
        );
    } else {
        navigate('/');
        return null;
    }
}

AuthProtected.propTypes = {
    children: PropTypes.node,
};

export default AuthProtected;
