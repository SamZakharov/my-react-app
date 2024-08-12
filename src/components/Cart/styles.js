import theme from '../../styles/theme.js';

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',  // Добавлено для управления направлением
        padding: theme.spacing(2),
    },
    header: {
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2),
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    item: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1),
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
    },
    removeButton: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
        },
    },
    totalContainer: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(1),
        borderTop: `1px solid ${theme.palette.divider}`,
    },
};
