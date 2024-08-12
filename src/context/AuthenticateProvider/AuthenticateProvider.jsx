import React, {createContext, useContext, useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import {api} from '../../services/axiosConfig.js';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Box, Typography} from '@mui/material';
import {styles} from './styles';

const AuthContext = createContext();

function AuthenticateProvider({children}) {
    const [userInfo, setUserInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        _id: '',
    });
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const [isAuthenticated, setIsAuthenticated] = useState(!!cookies.token);
    const navigate = useNavigate();

    const logOut = () => {
        api.get('/auth/logout').then(() => {
            removeCookie('token', {path: '/'});
            setUserInfo({
                firstName: '',
                lastName: '',
                email: '',
                _id: '',
            });
            setIsAuthenticated(false);
            navigate(1);
        });
    };

    useEffect(() => {
        api.get('/', {withCredentials: true}).then(({data}) => {
            const {status, userInfo} = data;
            setUserInfo(userInfo);
            if (!status) logOut();
            else setIsAuthenticated(true);
        });
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{logOut, isAuthenticated, setIsAuthenticated, userInfo}}>
            <Box sx={styles.container}>
                <Typography variant="h6" sx={styles.header}>
                    Welcome, {userInfo.firstName || 'Guest'}
                </Typography>
                {children}
            </Box>
        </AuthContext.Provider>
    );
}

AuthenticateProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthenticateProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
};
