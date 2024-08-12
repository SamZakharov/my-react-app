import {makeStyles} from "@mui/styles";

export const useDashbordStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme.palette.grey[300],
        [theme.breakpoints.up('xl')]: {
            flexDirection: "row",
        },
    },
    aside: {
        width: "100%",
        minWidth: "max-content",
        padding: theme.spacing(7),
        backgroundColor: theme.palette.grey[100],
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.up('xl')]: {
            width: "25%",
        },
    },
    list: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.h6.fontSize,
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderColor: theme.palette.grey[200],
    },
    content: {
        width: "100%",
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[100],
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.up('xl')]: {
            width: "75%",
            marginLeft: theme.spacing(5),
            padding: theme.spacing(4),
            marginTop: 0,
        },
    },
    userName: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold,
    },
}));
