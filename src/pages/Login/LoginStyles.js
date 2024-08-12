import {makeStyles} from "@mui/styles";

export const useLoginStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
    },
    formContainer: {
        backgroundColor: theme.palette.background.paper,
        border: `4px solid ${theme.palette.divider}`,
        borderRadius: "8px",
        padding: theme.spacing(4),
        width: "100%",
        maxWidth: "500px",
        boxShadow: theme.shadows[5],
    },
    header: {
        textAlign: "center",
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(3),
    },
    formSection: {
        marginBottom: theme.spacing(2),
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(2),
    },
    button: {
        marginBottom: theme.spacing(1),
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary.main,
        fontWeight: "bold",
    },
}));
