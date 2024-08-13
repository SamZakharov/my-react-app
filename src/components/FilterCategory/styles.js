// import theme from "../../styles/theme.js";
//
// export const styles = {
//     container: (showCat) => ({
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         backgroundColor: theme.palette.background.default,
//         padding: theme.spacing(2),
//         border: `1px solid ${theme.palette.divider}`,
//         borderRadius: theme.shape.borderRadius,
//         opacity: showCat ? 1 : 0,
//         height: showCat ? 'auto' : 0,
//         overflow: 'hidden',
//         marginBottom: theme.spacing(2),
//         transition: 'all 0.3s',
//     }),
//     title: {
//         display: 'flex',
//         alignItems: 'center',
//         fontWeight: theme.typography.fontWeightBold,
//         marginBottom: theme.spacing(2),
//         fontSize: '1.2rem',
//     },
//     listItem: (selected) => ({
//         cursor: 'pointer',
//         padding: theme.spacing(1, 2),
//         backgroundColor: selected ? theme.palette.action.hover : 'transparent',
//         borderLeft: selected ? `4px solid ${theme.palette.primary.main}` : 'none',
//         transition: 'background-color 0.3s',
//     }),
//     toggleButton: {
//         display: {xs: 'flex', md: 'none'},
//         marginBottom: theme.spacing(2),
//         color: theme.palette.primary.main,
//         cursor: 'pointer',
//         alignItems: 'center',
//     },
// };

export const styles = {
    container: (showCat) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#red', // Цвет фона
        padding: '16px', // Значение для theme.spacing(2)
        border: '1px solid #e0e0e0', // Цвет границы
        borderRadius: '4px', // Значение для theme.shape.borderRadius
        opacity: showCat ? 1 : 0,
        height: showCat ? 'auto' : 0,
        overflow: 'hidden',
        marginBottom: '16px', // Значение для theme.spacing(2)
        transition: 'all 0.3s',
    }),
    title: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold', // Значение для theme.typography.fontWeightBold
        marginBottom: '16px', // Значение для theme.spacing(2)
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
};
