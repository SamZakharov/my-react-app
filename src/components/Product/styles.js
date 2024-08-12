import theme from "../../styles/theme.js";

export const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
    },
    image: {
        width: '100%',
        height: 200,
        objectFit: 'cover',
        borderRadius: theme.shape.borderRadius,
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1),
    },
    description: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1),
    },
    readMore: {
        fontWeight: theme.typography.fontWeightBold,
        marginLeft: theme.spacing(1),
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
    category: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(2),
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
    },
    price: {
        fontWeight: theme.typography.fontWeightBold,
    },
    button: {
        backgroundColor: 'blue',
        padding: '16px 20px'
    }
};
