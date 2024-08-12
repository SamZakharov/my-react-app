import theme from "../../styles/theme.js";

export const styles = {
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: 600,
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.background.paper,
    },
    searchIcon: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    input: {
        flex: 1,
        padding: theme.spacing(1),
        fontSize: theme.typography.fontSize,
        color: theme.palette.text.primary,
        '& .MuiInputBase-input': {
            paddingLeft: theme.spacing(2),
        },
    },
};
