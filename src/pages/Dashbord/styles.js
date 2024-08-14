export const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ced4da', // theme.palette.gray[300]
        '@media (min-width: 1200px)': { // theme.breakpoints.up('xl')
            flexDirection: 'row',
        },
    },
    aside: {
        width: '100%',
        minWidth: 'max-content',
        padding: '56px', // theme.spacing(7) * 8px
        backgroundColor: '#e9ecef', // theme.palette.gray[100]
        borderRadius: '8px', // theme.shape.borderRadius
        '@media (min-width: 1200px)': { // theme.breakpoints.up('xl')
            width: '25%',
        },
    },
    list: {
        fontWeight: 600, // theme.typography.fontWeightBold
        fontSize: '1.25rem', // theme.typography.h6.fontSize
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    divider: {
        marginTop: '16px', // theme.spacing(2) * 8px
        marginBottom: '16px', // theme.spacing(2) * 8px
        borderColor: '#dee2e6', // theme.palette.gray[200]
    },
    content: {
        width: '100%',
        marginTop: '16px', // theme.spacing(2) * 8px
        padding: '16px', // theme.spacing(2) * 8px
        backgroundColor: '#e9ecef', // theme.palette.gray[100]
        borderRadius: '8px', // theme.shape.borderRadius
        '@media (min-width: 1200px)': { // theme.breakpoints.up('xl')
            width: '75%',
            marginLeft: '40px', // theme.spacing(5) * 8px
            padding: '32px', // theme.spacing(4) * 8px
            marginTop: 0,
        },
    },
    userName: {
        color: '#6200ea', // theme.palette.primary.main
        fontWeight: 600, // theme.typography.fontWeightBold
    },
};
