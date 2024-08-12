import React from 'react';
import PropTypes from 'prop-types';
import {ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {styles} from './styles.js';

const Theme = ({Icon, mode, setTheme}) => {
    const selectThemeHandler = () => {
        localStorage.theme = `${mode}`;
        setTheme({Icon, mode});
    };

    return (
        <ListItem
            button
            sx={styles.listItem}
            selected={localStorage.theme === mode}
            onClick={selectThemeHandler}
        >
            <ListItemIcon>
                <Icon/>
            </ListItemIcon>
            <ListItemText primary={mode}/>
        </ListItem>
    );
};

Theme.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    mode: PropTypes.string.isRequired,
    setTheme: PropTypes.func.isRequired,
};

export default Theme;
