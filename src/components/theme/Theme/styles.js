import theme from "../../../styles/theme.js";

export const styles = {
    listItem: {
        my: 1,
        px: 2,
        borderRadius: theme.shape.borderRadius,
        '&.Mui-selected': {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.action.selected,
        },
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    },
};
