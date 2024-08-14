// // styles.js
// export const styles = {
//     main: {
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         backgroundColor: 'rgba(221,221,221,0.28)', // Цвет фона по умолчанию
//         padding: '16px', // 2 * 8px (spacing)
//         border: '1px solid #e0e0e0', // Цвет разделителя
//         borderRadius: '8px',
//     },
//     image: {
//         width: '100%',
//         height: '200px',
//         objectFit: 'cover',
//         borderRadius: '8px',
//     },
//     title: {
//         fontWeight: 600,
//         marginBottom: '8px', // spacing
//     },
//     description: {
//         color: '#666666', // Второстепенный цвет текста
//         marginBottom: '8px', // spacing
//     },
//     readMore: {
//         fontWeight: 600,
//         marginLeft: '8px', // spacing
//         textDecoration: 'none',
//         color: '#6200ea', // Основной цвет
//     },
//     category: {
//         color: '#666666', // Второстепенный цвет текста
//         marginBottom: '16px', // spacing
//     },
//     priceContainer: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '16px', // spacing
//     },
//     price: {
//         fontWeight: 600,
//     },
//     button: {
//         backgroundColor: '#6200ea', // Основной цвет
//         padding: '16px 20px',
//         color: '#ffffff',
//         '&:hover': {
//             backgroundColor: '#3700b3', // Тёмный цвет при наведении
//         },
//     },
//
//     listItem: {
//         '&.Mui-selected': {
//             backgroundColor: '#e0e0e0', // Цвет фона для выбранного элемента
//         },
//         '&.Mui-selected:hover': {
//             backgroundColor: '#d5d5d5', // Цвет фона для выбранного элемента при наведении
//         },
//         '&:hover': {
//             backgroundColor: '#f0f0f0', // Цвет фона при наведении на невыбранный элемент
//         },
//     },
//     listItemIcon: {
//         color: '#6200ea', // Основной цвет для иконок
//     },
// };
//
// theme.js
import {createTheme} from '@mui/material/styles';

const commonStyles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px', // 2 * 8px (spacing)
        border: '1px solid',
        borderRadius: '8px',
    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
    },
    title: {
        fontWeight: 600,
        marginBottom: '8px', // spacing
    },
    description: {
        marginBottom: '8px', // spacing
    },
    readMore: {
        fontWeight: 600,
        marginLeft: '8px', // spacing
        textDecoration: 'none',
    },
    category: {
        marginBottom: '16px', // spacing
    },
    priceContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px', // spacing
    },
    price: {
        fontWeight: 600,
    },
    button: {
        padding: '16px 20px',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#3700b3', // Тёмный цвет при наведении
        },
    },

    listItem: {
        '&.Mui-selected': {
            backgroundColor: '#e0e0e0', // Цвет фона для выбранного элемента
        },
        '&.Mui-selected:hover': {
            backgroundColor: '#d5d5d5', // Цвет фона для выбранного элемента при наведении
        },
        '&:hover': {
            backgroundColor: '#f0f0f0', // Цвет фона при наведении на невыбранный элемент
        },
    },
    listItemIcon: {
        color: '#6200ea', // Основной цвет для иконок
    },
};

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6200ea',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
        },
        text: {
            primary: '#000000',
            secondary: '#555555',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
        // Применяем общие стили
        MuiButton: {
            styleOverrides: {
                root: commonStyles.button,
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: commonStyles.listItem,
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: commonStyles.listItemIcon,
            },
        },
    },
    spacing: 8, // Устанавливаем значение для единицы отступа
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#90caf9',
        },
        secondary: {
            main: '#f48fb1',
        },
        background: {
            default: '#121212',
            paper: '#1d1d1d',
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
        // Применяем общие стили
        MuiButton: {
            styleOverrides: {
                root: commonStyles.button,
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: commonStyles.listItem,
            },
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: commonStyles.listItemIcon,
            },
        },
    },
    spacing: 8, // Устанавливаем значение для единицы отступа
});
