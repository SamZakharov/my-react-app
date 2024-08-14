export const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Цвет фона по умолчанию
        padding: '16px', // 2 * 8px
    },
    loaderWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Цвет фона для элементов
        padding: '32px', // 4 * 8px
        borderRadius: '8px', // Радиус границ
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '16px', // 2 * 8px
    },
    title: {
        fontWeight: 600, // Жирность шрифта
        marginBottom: '8px', // 1 * 8px
    },
    category: {
        color: '#666666', // Второстепенный цвет текста
        marginBottom: '8px', // 1 * 8px
    },
    description: {
        textAlign: 'center',
        color: '#333333', // Основной цвет текста
        marginBottom: '16px', // 2 * 8px
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: '16px', // 2 * 8px
    },
    priceLabel: {
        color: '#666666', // Второстепенный цвет текста
    },
    price: {
        fontWeight: 600, // Жирность шрифта
    },
};
