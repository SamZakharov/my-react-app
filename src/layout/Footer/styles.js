import {theme} from "../../styles/theme.js";

export const styles = {
    container: {
        maxWidth: "6xl",
        margin: "0 auto",
        paddingX: theme.spacing(4),
        marginTop: theme.spacing(5),
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: theme.spacing(4),
        paddingY: theme.spacing(4),
        borderTop: `1px solid ${theme.palette.grey[200]}`,
    },
    block: {
        gridColumn: "span 12",
        "@media (min-width: 640px)": {
            gridColumn: "span 3",
        },
    },
    heading: {
        color: theme.palette.purple[300],
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(2),
    },
    list: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
    },
    listItem: {
        marginBottom: theme.spacing(1),
    },
    links: {
        display: "flex",
    },
    description: {
        color: theme.palette.grey[600],
        marginBottom: theme.spacing(2),
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(2),
    },
    textField: {
        width: "100%",
        backgroundColor: theme.palette.grey[100],
    },
    subscribeButton: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: theme.spacing(1),
        marginTop: theme.spacing(1),
    },
    bottom: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[200]}`,
    },
    socialLinks: {
        display: "flex",
        marginBottom: theme.spacing(2),
    },
    socialLink: {
        marginLeft: theme.spacing(2),
    },
    socialIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.grey[600],
        "&:hover": {
            color: theme.palette.grey[900],
        },
    },
    copyright: {
        fontSize: theme.typography.body2.fontSize,
        color: theme.palette.grey[600],
    },
    heart: {
        color: theme.palette.purple[300],
    },
    author: {
        color: theme.palette.purple[300],
        textDecoration: "underline",
    },
};
