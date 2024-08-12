import theme from "../../styles/theme.js";

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        padding: theme.spacing(2),
    },
    image: {
        width: {
            xs: 192, // small screens
            sm: 320, // medium screens
            md: 320, // medium screens
            lg: 384, // large screens
        },
        height: 'auto',
        marginBottom: theme.spacing(2),
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1),
    },
    subtitle: {
        color: theme.palette.text.secondary,
    },
};
