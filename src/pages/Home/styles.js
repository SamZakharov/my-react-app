import theme from "../../styles/theme.js";

export const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(0, 2),
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "lg",
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
    },
};
