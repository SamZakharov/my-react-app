import theme from "../../styles/theme.js";

export const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    thumbnailContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing(1),
    },
    thumbnail: {
        borderRadius: theme.shape.borderRadius,
        width: 60,
        height: 60,
        padding: theme.spacing(0.5),
    },
    thumbnailImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    mainImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexGrow: 1,
    },
    mainImage: {
        maxWidth: '100%',
        borderRadius: theme.shape.borderRadius,
        objectFit: 'cover',
    },
};
