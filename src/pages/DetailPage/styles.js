import theme from '../../styles/theme.js';

export const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
    },
    loaderWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1),
    },
    category: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1),
    },
    description: {
        textAlign: 'center',
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(2),
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: theme.spacing(2),
    },
    priceLabel: {
        color: theme.palette.text.secondary,
    },
    price: {
        fontWeight: theme.typography.fontWeightBold,
    },
};
