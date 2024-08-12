// // src/theme.js
// import {createTheme} from '@mui/material/styles';
//
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#6200ea', // Пример цвета
//         },
//         secondary: {
//             main: '#03dac6', // Пример цвета
//         },
//         grayshade: {
//             50: '#f8f9fa',
//             100: '#e9ecef',
//             200: '#dee2e6',
//             300: '#ced4da',
//             400: '#adb5bd',
//             500: '#6c757d',
//         },
//         purpleshade: {
//             400: '#7c4dff',
//         },
//         lightColor: {
//             300: '#f1f1f1',
//         },
//     },
//     typography: {
//         fontFamily: 'Urbanist, sans-serif',
//     },
// });
//
// export default theme;
//
//
// /*
// import {createTheme} from '@mui/material/styles';
//
// // Создание кастомной темы
// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#1976d2',
//         },
//         secondary: {
//             main: '#dc004e',
//         },
//         background: {
//             default: '#f5f5f5',
//         },
//         text: {
//             primary: '#333',
//         },
//     },
//     typography: {
//         fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//         fontSize: 14,
//     },
// });
//
// export default theme;*/

// src/theme.js
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6200ea', // Основной цвет
        },
        secondary: {
            main: '#03dac6', // Второстепенный цвет
        },
        background: {
            default: '#f5f5f5', // Цвет фона по умолчанию
            paper: '#ffffff', // Цвет фона для элементов (например, карточек)
        },
        text: {
            primary: '#333333', // Основной цвет текста
            secondary: '#666666', // Второстепенный цвет текста
        },
        grayshade: {
            50: '#f8f9fa',
            100: '#e9ecef',
            200: '#dee2e6',
            300: '#ced4da',
            400: '#adb5bd',
            500: '#6c757d',
        },
        purpleshade: {
            400: '#7c4dff',
        },
        lightColor: {
            300: '#f1f1f1',
        },
    },
    typography: {
        fontFamily: 'Urbanist, sans-serif',
        fontSize: 14, // Размер шрифта по умолчанию
        h1: {
            fontSize: '2.25rem', // Размер шрифта для заголовков уровня 1
            fontWeight: 600,
        },
        h2: {
            fontSize: '2rem', // Размер шрифта для заголовков уровня 2
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.75rem', // Размер шрифта для заголовков уровня 3
            fontWeight: 600,
        },
        // Добавьте другие стили для заголовков и текста, если необходимо
    },
    shape: {
        borderRadius: 8, // Радиус скругления для элементов
    },
    spacing: 8, // Базовое значение для отступов
});

export const styles = {
    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
    },
    image: {
        width: "100%",
        height: 200,
        objectFit: "cover",
        borderRadius: theme.shape.borderRadius,
    },
    title: {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(1),
    },
    description: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(1),
    },
    readMore: {
        fontWeight: theme.typography.fontWeightBold,
        marginLeft: theme.spacing(1),
        textDecoration: "none",
        color: theme.palette.primary.main,
    },
    category: {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(2),
    },
    priceContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    price: {
        fontWeight: theme.typography.fontWeightBold,
    },
    button: {
        backgroundColor: theme.palette.primary.main,
        padding: "16px 20px",
    },
};

export {theme};

export default theme;