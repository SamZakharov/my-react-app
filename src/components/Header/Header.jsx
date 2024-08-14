import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import ThemeSwitcher from '../theme/ThemeSwitcher/index.js';
import UserActions from "../UserActions/index.js";
import {styles} from "./styles.js";
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

                <Box sx={styles.logoBox}>
                    <Typography variant="h4" component={Link} to="/" sx={styles.title}>
                        React Shop
                    </Typography>
                </Box>


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
