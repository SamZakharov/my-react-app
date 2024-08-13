export const styles = {
    container: {
        display: 'flex',
        padding: '16px',
        backgroundColor: '#f5f5f5',
    },
    categoryContainer: {
        borderRadius: '0',
        backgroundColor: 'black'
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '16px',
        width: '100%',
    },
    loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
};
