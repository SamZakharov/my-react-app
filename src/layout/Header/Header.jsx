import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";
import {FaGithub} from "react-icons/fa";
import {RiMenu3Fill} from "react-icons/ri";
import ThemeSwitcher from '../../components/theme/ThemeSwitcher';
import UserActions from "../../components/UserActions";
import {styles} from "./styles";
import PropTypes from "prop-types";

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const [stickNav, setStickNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setStickNav(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleNav = () => {
        setNavOpen((prev) => !prev);
    };

    return (
        <AppBar position={stickNav ? "fixed" : "static"} sx={styles.appBar}>
            <Toolbar sx={styles.toolbar}>
                <IconButton edge="start" color="inherit" onClick={toggleNav} sx={styles.menuButton}>
                    <RiMenu3Fill/>
                </IconButton>
                <Typography variant="h4" component={Link} to="/" sx={styles.title}>
                    React Shop
                </Typography>
                <Box sx={isNavOpen ? styles.navOpen : styles.navClosed}>
                    <Box sx={styles.navLinks}>
                        <Button component={Link} to="/" onClick={toggleNav} sx={styles.navButton}>
                            Home
                        </Button>
                        <Button component={Link} to="/products" onClick={toggleNav} sx={styles.navButton}>
                            Products
                        </Button>
                        <Button component={Link} to="/about" onClick={toggleNav} sx={styles.navButton}>
                            About
                        </Button>
                    </Box>
                    <Box sx={styles.actions}>
                        <UserActions/>
                        <ThemeSwitcher/>
                        <IconButton
                            component={Link}
                            to="https://github.com/Siza36/react-shop"
                            target="_blank"
                            color="inherit"
                            sx={styles.githubButton}
                        >
                            <FaGithub/>
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    isNavOpen: PropTypes.bool,
    stickNav: PropTypes.bool,
};

export default Header;
