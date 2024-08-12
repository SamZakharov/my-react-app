import theme from "../../../styles/theme.js";

export const styles = {
    container: {
        marginTop: theme.spacing(6),
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: '100%',
        maxWidth: 800,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
    },
    productRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        padding: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    productTitle: {
        fontWeight: theme.typography.fontWeightBold,
    },
    productPrice: {
        textAlign: 'center',
    },
    productQuantity: {
        textAlign: 'center',
    },
    orderSummary: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
    orderTotal: {
        fontWeight: theme.typography.fontWeightBold,
    },
};
