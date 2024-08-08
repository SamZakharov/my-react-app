import React from 'react';
import {Container, Typography} from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Typography variant="body2" color="textSecondary" align="center">
                    © {new Date().getFullYear()} Your Company
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
