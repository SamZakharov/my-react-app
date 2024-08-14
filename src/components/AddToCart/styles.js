export const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    quantityControls: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#6200ea', // Основной цвет
        color: '#ffffff', // Цвет текста
        borderRadius: '8px', // Радиус границ
        margin: '4px', // Отступы
        '&:hover': {
            backgroundColor: '#3700b3', // Цвет при наведении
        },
    },
    addButton: {
        backgroundColor: '#6200ea', // Основной цвет
        color: '#ffffff', // Цвет текста
        borderRadius: '8px', // Радиус границ
        '&:hover': {
            backgroundColor: '#3700b3', // Цвет при наведении
        },
    },
    removeButton: {
        backgroundColor: '#d32f2f', // Цвет ошибки
        color: '#ffffff', // Контрастный цвет текста
        borderRadius: '8px', // Радиус границ
        margin: '4px', // Отступы
        '&:hover': {
            backgroundColor: '#9a0007', // Цвет при наведении
        },
    },
    quantity: {
        backgroundColor: '#eeeeee', // Светло-серый фон
        color: '#333333', // Основной цвет текста
        border: '1px solid #e0e0e0', // Граница
        borderRadius: '8px', // Радиус границ
        padding: '4px 8px', // Отступы
        margin: '0 8px', // Отступы по бокам
        textAlign: 'center',
    },
};

export default styles;
