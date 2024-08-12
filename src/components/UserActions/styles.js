import theme from "../../styles/theme.js";

export const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        zIndex: 20,
    },
    userButtonContainer: {
        position: 'relative',
    },
    userButton: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1),
        color: theme.palette.text.primary,
    },
    welcomeText: {
        marginLeft: theme.spacing(1),
        display: {xs: 'none', xl: 'block'},
    },
    menu: {
        mt: theme.spacing(2),
    },
    cartLink: {
        position: 'relative',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        textDecoration: 'none',
    },
    cartIcon: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    cartCount: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderRadius: '50%',
        width: 20,
        height: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: theme.typography.body2.fontSize,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        display: 'flex',
        alignItems: 'center',
    },
};
