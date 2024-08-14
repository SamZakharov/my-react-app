import PropTypes from 'prop-types';
import {ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import {styles} from './styles.js';

const Theme = ({Icon, mode, setTheme}) => {
    const selectThemeHandler = () => {
        localStorage.theme = `${mode}`;
        setTheme({Icon, mode});
    };

    return (
        <ListItem disablePadding>
            <ListItemButton
                sx={styles.listItem}
                selected={localStorage.theme === mode}
                onClick={selectThemeHandler}
            >
                <ListItemIcon sx={styles.listItemIcon}>
                    <Icon/>
                </ListItemIcon>
                <ListItemText primary={mode}/>
            </ListItemButton>
        </ListItem>
    );
};

Theme.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    mode: PropTypes.string.isRequired,
    setTheme: PropTypes.func.isRequired,
};

export default Theme;
