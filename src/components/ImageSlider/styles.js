export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    thumbnailContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '8px', // Размер интервала между миниатюрами
    },
    thumbnail: {
        borderRadius: '8px', // Радиус скругления углов
        width: '60px', // Ширина миниатюры
        height: '60px', // Высота миниатюры
        padding: '4px', // Отступ вокруг изображения
    },
    thumbnailImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    mainImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexGrow: 1,
    },
    mainImage: {
        maxWidth: '100%',
        borderRadius: '8px', // Радиус скругления углов
        objectFit: 'cover',
    },
};

export default styles;
