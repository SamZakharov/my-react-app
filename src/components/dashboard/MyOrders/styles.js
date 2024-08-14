export const styles = {
    container: {
        marginTop: '48px', // Отступ сверху
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: '16px', // Внутренний отступ
        marginBottom: '16px', // Отступ снизу
        width: '100%',
        maxWidth: '800px', // Максимальная ширина
        borderRadius: '8px', // Радиус скругления углов
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Тень
    },
    productRow: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', // Колонки
        padding: '8px', // Внутренний отступ
        borderBottom: '1px solid #e0e0e0', // Цвет границы
    },
    productTitle: {
        fontWeight: 'bold', // Жирный текст
    },
    productPrice: {
        textAlign: 'center',
    },
    productQuantity: {
        textAlign: 'center',
    },
    orderSummary: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '16px', // Отступ сверху
        fontWeight: 'bold', // Жирный текст
    },
    orderTotal: {
        fontWeight: 'bold', // Жирный текст
    },
};

export default styles;
