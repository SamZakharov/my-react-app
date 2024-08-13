import theme from "../../styles/theme.js";

export const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
    },
    header: {
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
    formSection: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        padding: theme.spacing(1.5),
    },
    link: {
        marginTop: theme.spacing(2),
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
};
