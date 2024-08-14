export const styles = {
    container: {
        maxWidth: '1200px',
        margin: 'auto',
        padding: '20px',
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
        marginBottom: '10px',
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
        padding: '4px 0',
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
