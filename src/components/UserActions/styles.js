// styles.js

export const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        zIndex: 20,
    },
    userButtonContainer: {
        position: 'relative',
    },
    userButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px', // 1 * 8px
        color: '#333333', // Основной цвет текста
    },
    welcomeText: {
        marginLeft: '8px', // 1 * 8px
        display: {xs: 'none', xl: 'block'},
    },
    menu: {
        marginTop: '16px', // 2 * 8px
    },
    cartLink: {
        position: 'relative',
        marginLeft: '16px', // 2 * 8px
        marginRight: '16px', // 2 * 8px
        textDecoration: 'none',
    },
    cartIcon: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
    },
    cartCount: {
        position: 'absolute',
        top: -8,
        right: -8,
        backgroundColor: '#6200ea', // Основной цвет
        color: '#ffffff', // Белый цвет
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem', // fontSize из theme.typography.body2.fontSize
    },
    link: {
        textDecoration: 'none',
        color: '#333333', // Основной цвет текста
        display: 'flex',
        alignItems: 'center',
    },

    boxActions: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
    }
};
