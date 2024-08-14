export const styles = {

    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '300px',
        padding: '8px',
        borderRadius: '8px',
        backgroundColor: 'white',
        marginBottom: '20px',
    },
    searchIcon: {
        backgroundColor: '#660db9',
        height: '24px',
        width: '24px',
        color: '#3e1d5d', // Второстепенный цвет текста
    },
    input: {
        fontSize: '14px',
        color: '#333333', // Основной цвет текста
        '& .MuiInputBase-input': {
            paddingLeft: '16px',
        },
    },
};
