import theme from "../../styles/theme.js";

export const styles = {
    container: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.default,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
    },
    header: {
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary,
    },
};
