// src/components/UserProfile.jsx
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUserInfo, logOut} from '../../redux/slices/authSlice.js';
import {Box, Button, Typography} from '@mui/material';

function UserProfile() {
    const dispatch = useDispatch();
    const {userInfo, isAuthenticated, status, error} = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(fetchUserInfo());
        }
    }, [dispatch, isAuthenticated]);

    const handleLogout = () => {
        dispatch(logOut());
    };

    if (status === 'loading') return <Typography>Loading...</Typography>;
    if (status === 'failed') return <Typography>Error: {error}</Typography>;

    return (
        <Box>
            <Typography variant="h6">
                Welcome, {userInfo.firstName || 'Guest'}
            </Typography>
            {isAuthenticated && (
                <Button onClick={handleLogout}>Log Out</Button>
            )}
        </Box>
    );
}

export default UserProfile;
