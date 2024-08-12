import theme from "../../styles/theme.js";

export const styles = {
    appBar: {
        zIndex: 100,
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
        transition: "all 0.3s ease-in-out",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: theme.spacing(2),
    },
    menuButton: {
        display: {xs: "block", xl: "none"},
        color: theme.palette.primary.main,
        fontSize: "2rem",
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        textDecoration: "none",
        color: theme.palette.text.primary,
    },
    navOpen: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 98,
    },
    navClosed: {
        display: {xs: "none", xl: "flex"},
        flexDirection: "row",
        alignItems: "center",
    },
    navLinks: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: theme.spacing(2),
        "& > *": {
            margin: theme.spacing(1, 0),
        },
        [theme.breakpoints.up("xl")]: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 0,
        },
    },
    navButton: {
        color: theme.palette.text.primary,
        textTransform: "none",
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.h6.fontSize,
    },
    actions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: theme.spacing(2),
        [theme.breakpoints.up("xl")]: {
            marginTop: 0,
        },
    },
    githubButton: {
        fontSize: "1.5rem",
        marginLeft: theme.spacing(2),
    },
};
