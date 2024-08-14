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
    formContainer: {
        width: '100%',
        maxWidth: '500px',
        padding: '24px', // Паддинг
        backgroundColor: '#ffffff', // Цвет фона для элементов
        borderRadius: '8px', // Радиус границы
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Тень
    },
    title: {
        marginBottom: '16px', // Отступ снизу
    },
    form: {
        width: '100%', // Fix IE11 issue
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '16px', // Отступ сверху
    },
    link: {
        marginTop: '16px', // Отступ сверху
        textDecoration: 'none',
        color: '#6200ea', // Основной цвет
    },
};
