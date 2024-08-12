import theme from "../../styles/theme.js";

export const styles = {
    container: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: theme.spacing(2),
        width: '100%',
    },
    loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
};
