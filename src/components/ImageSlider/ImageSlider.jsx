import PropTypes from 'prop-types';
import {Box, CardMedia, IconButton} from '@mui/material';
import {styles} from './styles';

const ImageSlider = ({imageList, setImgIndex, imgIndex}) => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.thumbnailContainer}>
                {imageList.map((image, index) => (
                    <IconButton
                        key={index}
                        sx={{
                            ...styles.thumbnail,
                            opacity: imgIndex === index ? 0.3 : 1,
                        }}
                        onClick={() => setImgIndex(index)}
                    >
                        <CardMedia
                            component="img"
                            image={image}
                            alt=""
                            sx={styles.thumbnailImage}
                        />
                    </IconButton>
                ))}
            </Box>
            <Box sx={styles.mainImageContainer}>
                <CardMedia
                    component="img"
                    image={imageList[imgIndex]}
                    alt=""
                    sx={styles.mainImage}
                />
            </Box>
        </Box>
    );
};

ImageSlider.propTypes = {
    imageList: PropTypes.arrayOf(PropTypes.string).isRequired,
    setImgIndex: PropTypes.func.isRequired,
    imgIndex: PropTypes.number.isRequired,
};

export default ImageSlider;
