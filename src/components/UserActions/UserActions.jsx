import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Box, Button, Menu, MenuItem, Typography} from '@mui/material';
import {TbChevronDown, TbLogin2, TbLogout2, TbUser, TbUserPlus} from 'react-icons/tb';
import {CiShoppingBasket} from 'react-icons/ci';
import {useDispatch, useSelector} from 'react-redux';
import {logout, selectIsAuthenticated, selectUserInfo} from '../../redux/slices/authSlice.js';
import {selectCartState} from '../../redux/slices/cartSlice.js'; // Импортируем селектор из cartSlice
import {styles} from './styles';

const UserActions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const userInfo = useSelector(selectUserInfo);
    const ordersCount = useSelector((state) => selectCartState(state).ordersCount); // Используем селектор для получения количества товаров

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        dispatch(logout());
        handleClose();
    };

    return (
        <Box sx={styles.container}>
            {isAuthenticated ? (
                <>
                    <Box sx={styles.userButtonContainer}>
                        <Button
                            aria-controls="user-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                            endIcon={<TbChevronDown/>}
                            sx={styles.userButton}
                        >
                            <TbUser className="text-2xl"/>
                            <Typography sx={styles.welcomeText}>
                                Welcome{' '}
                                <span className="text-purpleshade-400">
                                    {userInfo.firstName}
                                </span>
                            </Typography>
                        </Button>
                        <Menu
                            id="user-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={styles.menu}
                        >
                            <MenuItem component={Link} to="/dashboard/my-account">
                                Dashboard
                            </MenuItem>
                            <MenuItem component={Link} to="/dashboard/my-orders">
                                Paid Orders
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <TbLogout2 className="mr-2"/>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Link to="/checkout" style={styles.cartLink}>
                        <Box sx={styles.cartIcon}>
                            <Typography sx={styles.cartCount}>{ordersCount}</Typography>
                            <CiShoppingBasket className="xl:text-4xl text-3xl"/>
                        </Box>
                    </Link>
                </>
            ) : (
                <Box sx={styles.boxActions}>
                    <Link
                        className="text-sm md:text-base xl:text-xl mx-2 flex items-center"
                        to="/auth/login"
                        style={styles.link}
                    >
                        <TbLogin2 className="mr-2"/>
                        Login
                    </Link>
                    <Link
                        className="text-sm md:text-base xl:text-xl mx-2 flex items-center"
                        to="/auth/signup"
                        style={styles.link}
                    >
                        <TbUserPlus className="mr-2"/>
                        Sign Up
                    </Link>
                </Box>
            )}
        </Box>
    );
};

UserActions.propTypes = {
    // No props are passed for this component
};

export default UserActions;
