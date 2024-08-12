import theme from "../../../styles/theme.js";

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        gap: theme.spacing(2),
    },
    form: {
        width: '100%',
        maxWidth: 600,
    },
    heading: {
        marginBottom: theme.spacing(4),
    },
    formSection: {
        marginBottom: theme.spacing(2),
    },
    submitSection: {
        display: 'flex',
        justifyContent: 'center',
    },
    submitButton: {
        padding: theme.spacing(1.5, 3),
    },
};
