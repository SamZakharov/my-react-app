import React from 'react';
import PropTypes from 'prop-types';
import {Outlet, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Box} from '@mui/material';

function AuthProtected({children}) {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    React.useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
        return (
            <Box>
                {children}
                <Outlet/>
            </Box>
        );
    } else {
        return null;
    }
}

AuthProtected.propTypes = {
    children: PropTypes.node,
};

export default AuthProtected;
