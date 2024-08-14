export const styles = {
    homeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: '0 16px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        height: '100vh',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0',
        maxWidth: 'sm',
    },
    title: {
        fontWeight: 600,
        marginBottom: '16px',
    },
    button: {
        backgroundColor: '#6200ea',
        padding: '16px 20px',
        color: '#ffffff',
        '&:hover': {
            backgroundColor: '#3700b3',
        },
        marginBottom: '24px',
    },
    productsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        justifyContent: 'center',
    },
    productBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#ffffff',
    },
    productImage: {
        width: '250px',
        height: '250px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '8px',
    },
    productTitle: {
        fontWeight: 500,
        color: '#333333',
    },
    productPrice: {
        fontWeight: 'bold', // Жирный шрифт
    },
};
