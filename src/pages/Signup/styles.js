import theme from '../../styles/theme.js'

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
    formContainer: {
        width: '100%',
        maxWidth: 500,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[5],
    },
    title: {
        marginBottom: theme.spacing(2),
    },
    form: {
        width: '100%', // Fix IE11 issue.
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    link: {
        marginTop: theme.spacing(2),
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
};