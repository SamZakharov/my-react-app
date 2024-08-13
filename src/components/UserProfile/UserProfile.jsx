import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    logout,
    selectAuthError,
    selectAuthStatus,
    selectIsAuthenticated,
    selectUserInfo
} from '../../redux/slices/authSlice.js'; // Импортируйте необходимые селекторы
import {Box, Button, Typography} from '@mui/material';

function UserProfile() {
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const status = useSelector(selectAuthStatus); // Селектор для статуса загрузки
    const error = useSelector(selectAuthError); // Селектор для ошибок

    useEffect(() => {
        // Если необходимо обновить информацию о пользователе при аутентификации, добавьте логику здесь
    }, [dispatch, isAuthenticated]);

    const handleLogout = () => {
        dispatch(logout());
    };

    if (status === 'loading') return <Typography>Loading...</Typography>;
    if (status === 'failed') return <Typography>Error: {error}</Typography>;

    return (
        <Box>
            <Typography variant="h6">
                Welcome, {userInfo?.firstName || 'Guest'}
            </Typography>
            {isAuthenticated && (
                <Button onClick={handleLogout}>Log Out</Button>
            )}
        </Box>
    );
}

export default UserProfile;
