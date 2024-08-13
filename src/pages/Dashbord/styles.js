import theme from "../../styles/theme.js";

export const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.gray[300],
        [theme.breakpoints.up('xl')]: {
            flexDirection: 'row',
        },
    },
    aside: {
        width: '100%',
        minWidth: 'max-content',
        padding: theme.spacing(7),
        backgroundColor: theme.palette.gray[100],
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.up('xl')]: {
            width: '25%',
        },
    },
    list: {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: theme.typography.h6.fontSize,
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderColor: theme.palette.gray[200],
    },
    content: {
        width: '100%',
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.gray[100],
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.up('xl')]: {
            width: '75%',
            marginLeft: theme.spacing(5),
            padding: theme.spacing(4),
            marginTop: 0,
        },
    },
    userName: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightBold,
    },
};

export default theme;