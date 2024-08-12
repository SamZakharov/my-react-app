import {makeStyles} from "@mui/styles";

export const useDetailPageStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        justifyContent: "center",
        padding: theme.spacing(4),
        maxWidth: "7xl",
        margin: "auto",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.grey[100],
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(4),
        maxWidth: "lg",
        marginTop: theme.spacing(2),
        position: "relative",
        [theme.breakpoints.up('lg')]: {
            flexDirection: "row",
            padding: theme.spacing(8),
        },
    },
    backLink: {
        position: "absolute",
        top: theme.spacing(1),
        right: theme.spacing(2),
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.grey[200],
        border: `1px solid ${theme.palette.grey[300]}`,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1, 2),
        textDecoration: "none",
        color: theme.palette.text.primary,
        fontSize: theme.typography.pxToRem(14),
        [theme.breakpoints.up('lg')]: {
            fontSize: theme.typography.pxToRem(16),
        },
    },
    backIcon: {
        marginRight: theme.spacing(1),
    },
    details: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            marginTop: 0,
            marginLeft: theme.spacing(4),
        },
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(2),
    },
    category: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(2),
    },
    description: {
        marginBottom: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    priceContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: theme.spacing(2),
    },
    priceLabel: {
        color: theme.palette.text.secondary,
    },
    price: {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.text.primary,
    },
}));
