import theme from "../../styles/theme.js";

export const styles = {
    container: (showCat) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        opacity: showCat ? 1 : 0,
        height: showCat ? 'auto' : 0,
        overflow: 'hidden',
        marginBottom: theme.spacing(2),
        transition: 'all 0.3s',
    }),
    title: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(2),
        fontSize: '1.2rem',
    },
    listItem: (selected) => ({
        cursor: 'pointer',
        padding: theme.spacing(1, 2),
        backgroundColor: selected ? theme.palette.action.hover : 'transparent',
        borderLeft: selected ? `4px solid ${theme.palette.primary.main}` : 'none',
        transition: 'background-color 0.3s',
    }),
    toggleButton: {
        display: {xs: 'flex', md: 'none'},
        marginBottom: theme.spacing(2),
        color: theme.palette.primary.main,
        cursor: 'pointer',
        alignItems: 'center',
    },
};
