import {makeStyles} from "@mui/styles";

export const useSignupStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
    },
    formContainer: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(4),
        boxShadow: theme.shadows[5],
        maxWidth: 600,
        width: "100%",
    },
    title: {
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(3),
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(2),
    },
    link: {
        marginTop: theme.spacing(2),
        textDecoration: "none",
        color: theme.palette.primary.main,
    },
}));
