export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        padding: '16px', // Отступы вокруг контейнера
    },
    image: {
        width: '100%', // Ширина изображения будет автоматически изменяться по ширине контейнера
        maxWidth: {
            xs: '192px', // Для маленьких экранов
            sm: '320px', // Для средних экранов
            md: '320px', // Для средних экранов
            lg: '384px', // Для больших экранов
        },
        height: 'auto',
        marginBottom: '16px', // Отступ снизу
    },
    title: {
        fontWeight: 'bold', // Жирный шрифт
        marginBottom: '8px', // Отступ снизу
    },
    subtitle: {
        color: '#666666', // Цвет текста для подзаголовка
    },
};

export default styles;
