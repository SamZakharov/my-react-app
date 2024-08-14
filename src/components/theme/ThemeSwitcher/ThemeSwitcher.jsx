import {useDispatch, useSelector} from 'react-redux';
import {IconButton} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {toggleTheme} from '../../../redux/slices/themeSlice';

function ThemeSwitcher() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode);

    const handleThemeChange = () => {
        dispatch(toggleTheme());
        localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    };

    return (
        <IconButton onClick={handleThemeChange}>
            {theme === 'light' ? <LightModeIcon/> : <DarkModeIcon/>}
        </IconButton>
    );
}

export default ThemeSwitcher;
