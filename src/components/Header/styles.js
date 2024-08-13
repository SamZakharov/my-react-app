// styles.js

export const styles = {
    appBar: {
        zIndex: 100,
        backgroundColor: '#f5f5f5', // Цвет фона по умолчанию
        borderBottom: '1px solid #e0e0e0', // Цвет разделителя
        transition: 'all 0.3s ease-in-out',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px', // 2 * 8px (spacing)
    },
    menuButton: {
        display: {xs: 'block', xl: 'none'},
        color: '#6200ea', // Основной цвет
        fontSize: '2rem',
    },
    logoBox: {
        marginLeft: '20px',
    },

    title: {
        fontWeight: 700, // fontWeightBold
        textDecoration: 'none',
        color: '#333333', // Основной цвет текста
    },

    navLinks: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        gap: '25px',
        '@media (min-width: 1280px)': { // соответствие theme.breakpoints.up("xl")
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 0,
        },
    },
    navButton: {
        color: '#333333', // Основной цвет текста
        textTransform: 'none',
        fontWeight: 700, // fontWeightBold
        fontSize: '1rem', // fontSize из theme.typography.h6.fontSize
    },
    actions: {
        display: 'flex',
        gap: '15px',
        marginTop: '16px', // spacing
        '@media (min-width: 1280px)': { // соответствие theme.breakpoints.up("xl")
            marginTop: 0,
        },
    },
    githubButton: {
        fontSize: '1.5rem',
        marginLeft: '16px', // spacing
    },
};
