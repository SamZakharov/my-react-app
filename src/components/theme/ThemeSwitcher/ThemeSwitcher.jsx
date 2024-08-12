import React, {useRef, useState} from 'react';
import {IconButton, Menu, MenuItem} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {styles} from './styles'; // Импортируйте стили

const themes = [
    {id: 'light', mode: 'light', Icon: LightModeIcon},
    {id: 'dark', mode: 'dark', Icon: DarkModeIcon},
];

function ThemeSwitcher() {
    const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState(themes[0]); // По умолчанию первая тема
    const [anchorEl, setAnchorEl] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsSwitcherOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setIsSwitcherOpen(false);
    };

    const handleChangeTheme = (theme) => {
        setSelectedTheme(theme);
        localStorage.setItem('theme', theme.mode);
        document.documentElement.classList.toggle('dark', theme.mode === 'dark');
        handleClose();
    };

    // Выбираем текущую иконку
    const CurrentIcon = selectedTheme.Icon;

    return (
        <div ref={ref} style={styles.container}>
            <IconButton onClick={handleClick} style={styles.iconButton}>
                <CurrentIcon style={styles.menuItemIcon}/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={styles.menu}
            >
                {themes.map((theme) => (
                    <MenuItem
                        key={theme.id}
                        onClick={() => handleChangeTheme(theme)}
                        style={styles.menuItem}
                    >
                        <theme.Icon style={styles.menuItemIcon}/>
                        {theme.mode}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default ThemeSwitcher;
