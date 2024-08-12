import theme from "../../../styles/theme.js";

export const styles = {
    container: {
        position: 'relative',
        textAlign: 'center',
    },
    iconButton: {
        color: theme.palette.primary.main,
    },
    menu: {
        top: '60px',
        right: 0,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[4],
        backgroundColor: theme.palette.background.paper,
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1, 2),
    },
    menuItemIcon: {
        marginRight: theme.spacing(1),
    },
};
