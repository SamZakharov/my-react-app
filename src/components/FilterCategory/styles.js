export const styles = {
    container: (showCat) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#red', // Цвет фона
        padding: '16px', // Значение для theme.spacing(2)
        border: '1px solid #e0e0e0', // Цвет границы
        borderRadius: '10px', // Значение для theme.shape.borderRadius
        opacity: showCat ? 1 : 0,
        height: showCat ? '350px' : 0,
        overflow: 'hidden',
        marginTop: '64px', // Значение для theme.spacing(2)
        transition: 'all 0.3s',
    }),
    title: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        marginBottom: '16px',
        fontSize: '1.2rem',
    },
    listItem: (selected) => ({
        cursor: 'pointer',
        padding: '8px 16px', // Значение для theme.spacing(1, 2)
        backgroundColor: selected ? '#e0e0e0' : 'transparent', // Цвет фона для hover
        borderLeft: selected ? '4px solid #1976d2' : 'none', // Цвет границы для активного элемента
        transition: 'background-color 0.3s',
    }),
    toggleButton: {
        display: {xs: 'flex', md: 'none'},
        marginBottom: '16px', // Значение для theme.spacing(2)
        color: '#1976d2', // Цвет primary
        cursor: 'pointer',
        alignItems: 'center',
    },
    categoryPlus: {
        marginRight: '20px',
        backgroundColor: 'red'
    }
};
