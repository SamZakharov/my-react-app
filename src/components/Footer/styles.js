// export const styles = {
//     container: {
//         maxWidth: "6xl",
//         margin: "0 auto",
//         paddingX: "32px", // theme.spacing(4) -> 4 * 8px = 32px
//         marginTop: "40px", // theme.spacing(5) -> 5 * 8px = 40px
//     },
//     grid: {
//         display: "grid",
//         gridTemplateColumns: "repeat(12, 1fr)",
//         gap: "32px", // theme.spacing(4) -> 4 * 8px = 32px
//         paddingY: "32px", // theme.spacing(4) -> 4 * 8px = 32px
//         borderTop: "1px solid #dee2e6", // theme.palette.gray[200]
//     },
//     block: {
//         gridColumn: "span 12",
//         "@media (min-width: 640px)": {
//             gridColumn: "span 3",
//         },
//     },
//     heading: {
//         color: "#7c4dff", // theme.palette.purple[400]
//         fontWeight: 600, // theme.typography.fontWeightBold
//         marginBottom: "16px", // theme.spacing(2) -> 2 * 8px = 16px
//     },
//     list: {
//         listStyleType: "none",
//         padding: 0,
//         margin: 0,
//     },
//     listItem: {
//         marginBottom: "8px", // theme.spacing(1) -> 1 * 8px = 8px
//     },
//     links: {
//         display: "flex",
//     },
//     description: {
//         color: "#6c757d", // theme.palette.gray[500]
//         marginBottom: "16px", // theme.spacing(2) -> 2 * 8px = 16px
//     },
//     formGroup: {
//         display: "flex",
//         flexDirection: "column",
//         gap: "16px", // theme.spacing(2) -> 2 * 8px = 16px
//     },
//     textField: {
//         width: "100%",
//         backgroundColor: "#e9ecef", // theme.palette.gray[100]
//     },
//     subscribeButton: {
//         backgroundColor: "#6200ea", // theme.palette.primary.main
//         color: "#ffffff", // theme.palette.common.white
//         padding: "8px", // theme.spacing(1) -> 1 * 8px = 8px
//         marginTop: "8px", // theme.spacing(1) -> 1 * 8px = 8px
//     },
//     bottom: {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         paddingY: "16px", // theme.spacing(2) -> 2 * 8px = 16px
//         borderTop: "1px solid #dee2e6", // theme.palette.gray[200]
//     },
//     socialLinks: {
//         display: "flex",
//         marginBottom: "16px", // theme.spacing(2) -> 2 * 8px = 16px
//     },
//     socialLink: {
//         marginLeft: "16px", // theme.spacing(2) -> 2 * 8px = 16px
//     },
//     socialIcon: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         color: "#6c757d", // theme.palette.gray[500]
//         "&:hover": {
//             color: "#333333", // theme.palette.text.primary
//         },
//     },
//     copyright: {
//         fontSize: "0.875rem", // theme.typography.body2.fontSize
//         color: "#6c757d", // theme.palette.gray[500]
//     },
//     heart: {
//         color: "#7c4dff", // theme.palette.purple[400]
//     },
//     author: {
//         color: "#7c4dff", // theme.palette.purple[400]
//         textDecoration: "underline",
//     },
// };
export const styles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        backgroundColor: '#f5f5f5',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '40px',
    },
    block: {
        textAlign: 'left',
    },
    links: {
        marginBottom: '16px',
    },
    heading: {
        color: '#7c4dff',
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '12px',
    },
    description: {
        fontSize: '14px',
        color: '#666',
        marginBottom: '20px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    textField: {
        width: '100%',
    },
    subscribeButton: {
        backgroundColor: '#6200ea',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#4b0596',
        },
    },
    list: {
        padding: 0,
        listStyle: 'none',
    },
    listItem: {
        padding: '8px 0',
    },
    link: {
        color: '#757575',
        textDecoration: 'none',
        '&:hover': {
            color: '#212121',
            textDecoration: 'underline',
        },
    },
};
