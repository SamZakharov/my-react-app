import theme from "../../styles/theme.js";

export const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    quantityControls: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: theme.shape.borderRadius,
        margin: theme.spacing(0.5),
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    addButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    removeButton: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        borderRadius: theme.shape.borderRadius,
        margin: theme.spacing(0.5),
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
        },
    },
    quantity: {
        backgroundColor: theme.palette.grey[200],
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(0.5, 1),
        margin: theme.spacing(0, 1),
        textAlign: 'center',
    },
};
