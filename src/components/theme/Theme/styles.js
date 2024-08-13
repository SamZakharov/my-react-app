// styles.js
export const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Цвет фона по умолчанию
        padding: '16px', // 2 * 8px (spacing)
        border: '1px solid #e0e0e0', // Цвет разделителя
        borderRadius: '8px',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    title: {
        fontWeight: 600,
        marginBottom: '8px', // spacing
    },
    description: {
        color: '#666666', // Второстепенный цвет текста
        marginBottom: '8px', // spacing
    },
    readMore: {
        fontWeight: 600,
        marginLeft: '8px', // spacing
        textDecoration: 'none',
        color: '#6200ea', // Основной цвет
    },
    category: {
        color: '#666666', // Второстепенный цвет текста
        marginBottom: '16px', // spacing
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px', // spacing
    },
    price: {
        fontWeight: 600,
    },
    button: {
        backgroundColor: '#6200ea', // Основной цвет
        padding: '16px 20px',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#3700b3', // Тёмный цвет при наведении
        },
    },
};
