export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',  // Управление направлением
        padding: '16px', // Отступы
    },
    header: {
        color: '#6200ea', // Основной цвет
        marginBottom: '16px', // Отступ внизу
        fontSize: '1.5rem', // Размер шрифта
        fontWeight: 'bold', // Жирный шрифт
    },
    item: {
        marginBottom: '16px', // Отступ внизу
        padding: '8px', // Внутренний отступ
        border: '1px solid #e0e0e0', // Граница
        borderRadius: '8px', // Радиус границ
    },
    removeButton: {
        backgroundColor: '#d32f2f', // Цвет кнопки удаления (ошибка)
        color: '#ffffff', // Цвет текста на кнопке
        '&:hover': {
            backgroundColor: '#b71c1c', // Цвет кнопки при наведении
        },
    },
    totalContainer: {
        marginTop: '16px', // Отступ сверху
        padding: '8px', // Внутренний отступ
        borderTop: '1px solid #e0e0e0', // Граница сверху
    },
};

export default styles;
