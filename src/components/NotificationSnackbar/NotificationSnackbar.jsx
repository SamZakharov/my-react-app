import React from 'react';
import {Alert, Snackbar} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import {closeNotification} from '../../store/notificationSlice';

const NotificationSnackbar = () => {
    const dispatch = useDispatch();
    const {open, message, severity} = useSelector((state) => state.notification);

    const handleClose = () => {
        dispatch(closeNotification());
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default NotificationSnackbar;
