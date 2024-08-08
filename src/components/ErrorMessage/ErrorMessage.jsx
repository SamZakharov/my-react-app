import React from 'react';
import {Typography} from '@mui/material';
import PropTypes from 'prop-types';

const ErrorMessage = ({message}) => {
    return <Typography color="error">{message}</Typography>;
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;
