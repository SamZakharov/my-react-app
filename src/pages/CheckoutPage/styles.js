import theme from "../../styles/theme.js";

export const styles = {
    wrapper: {
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.default,
    },
    gridContainer: {
        margin: 0,
        padding: 0,
    },
    cartDetails: {
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
    },
    cartHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    cartHeaderText: {
        fontWeight: theme.typography.fontWeightBold,
    },
    cartItem: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: theme.spacing(1, 0),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    cartItemText: {
        flex: 1,
        textAlign: 'center',
    },
    summary: {
        padding: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
    },
    summaryItem: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    checkoutButtonWrapper: {
        marginTop: theme.spacing(2),
    },
};
