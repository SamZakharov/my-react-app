export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5', // Цвет фона по умолчанию
        textAlign: 'center',
    },
    imageContainer: {
        marginBottom: '32px', // Отступ снизу
    },
    image: {
        width: 'auto',
        height: '200px',
        maxWidth: '100%',
    },
    errorText: {
        fontSize: '6rem',
        fontWeight: 600, // Жирность шрифта
        color: '#f44336', // Цвет ошибки (красный)
    },
    message: {
        fontSize: '1.5rem',
        color: '#333333', // Основной цвет текста
    },
};
