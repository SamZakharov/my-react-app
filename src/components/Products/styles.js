export const styles = {
    container: {
        display: 'flex',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        gap: '60px'
    },
    categoryContainer: {
        borderRadius: '10px',
        backgroundColor: 'black',
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 2fr))',
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
