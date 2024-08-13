import theme from '../../styles/theme.js';

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        textAlign: 'center',
    },
    imageContainer: {
        marginBottom: theme.spacing(4),
    },
    image: {
        width: 'auto',
        height: 200,
        maxWidth: '100%',
    },
    errorText: {
        fontSize: '6rem',
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.error.main,
    },
    message: {
        fontSize: '1.5rem',
        color: theme.palette.text.primary,
    },
};