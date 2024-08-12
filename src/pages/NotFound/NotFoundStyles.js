import {makeStyles} from "@mui/styles";

export const useNotFoundStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
    },
    imageContainer: {
        marginBottom: theme.spacing(2),
    },
    image: {
        width: "100%",
        maxWidth: "500px",
    },
    errorText: {
        fontSize: "3rem",
        fontWeight: "bold",
        color: theme.palette.text.primary,
    },
    message: {
        fontSize: "1.25rem",
        color: theme.palette.text.secondary,
    },
}));
