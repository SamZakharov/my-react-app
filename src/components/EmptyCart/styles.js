import theme from '../../styles/theme.js';

export const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: theme.spacing(3), // Assuming spacing is already in pixels
    },
    title: {
        fontSize: '32px', // 2rem equivalent in pixels
        fontWeight: 'bold',
        margin: theme.spacing(2, 0), // Assuming spacing is already in pixels
    },
    subTitle: {
        fontSize: '16px', // 1rem equivalent in pixels
        color: theme.palette.text.secondary,
    },
};
