import {makeStyles} from "@mui/styles";

export const useCheckoutPageStyles = makeStyles((theme) => ({
    wrapper: {
        padding: theme.spacing(2),
    },
    gridContainer: {
        gap: theme.spacing(2),
    },
    cartDetails: {
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
    },
    cartHeader: {
        display: "flex",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.palette.divider}`,
        paddingBottom: theme.spacing(1),
    },
    cartHeaderText: {
        flex: 1,
        textAlign: "center",
    },
    cartItem: {
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(1, 0),
    },
    cartItemText: {
        flex: 1,
        textAlign: "center",
    },
    summary: {
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
        background: `url('../assets/AbstractDesign.svg') no-repeat center center`,
        backgroundSize: "cover",
    },
    summaryItem: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(1),
    },
    checkoutButtonWrapper: {
        textAlign: "center",
        marginTop: theme.spacing(2),
    },
}));
