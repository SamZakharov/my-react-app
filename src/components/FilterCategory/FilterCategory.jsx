import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useSearchParams} from 'react-router-dom';
import {TbCategoryPlus} from 'react-icons/tb';
import {Box, IconButton, List, ListItem, Typography} from '@mui/material';
import {styles} from './styles';
import {useGetAllCategoriesQuery} from '../../redux/productsApi/productsApi.js';

function FilterCategory({query, setQuery}) {
    const [selectedCat, setSelectedCat] = useState('0'); // Default value as string
    const [searchParams, setSearchParams] = useSearchParams();
    const [showCat, setShowCat] = useState(true);

    const {data: catList = [], isLoading} = useGetAllCategoriesQuery();

    useEffect(() => {
        const category = searchParams.get('category');

        if (category) {
            setQuery({...query, category});
            setSelectedCat(category);
        } else {

            setQuery({...query, category: '0'});
            setSelectedCat('0');
        }
    }, []);

    const categoryHandler = (e) => {
        const catId = e.target.id.toString();

        setSelectedCat(catId);

        if (query.search === '') {
            setSearchParams({category: catId});
            setQuery({category: catId});
        } else {
            setQuery({...query, category: catId});
            setSearchParams({...query, category: catId});
        }

        if (catId === '0') {
            searchParams.delete('category');
            setSearchParams(searchParams);
        }
    };

    return (
        <>
            <Box sx={styles.container(showCat)}>
                <Typography variant="h6" sx={styles.title}>
                    <TbCategoryPlus className="icon"/>
                    Categories:
                </Typography>

                <List>
                    <ListItem
                        sx={styles.listItem(selectedCat === '0')}
                        onClick={categoryHandler}
                        id="0"
                    >
                        All
                    </ListItem>
                    {catList.map(({id, name}) => {
                        if (id > 5) return null;
                        return (
                            <ListItem
                                key={id}
                                sx={styles.listItem(selectedCat === id.toString())}
                                onClick={categoryHandler}
                                id={id.toString()}
                            >
                                {name}
                            </ListItem>
                        );
                    })}
                </List>

            </Box>
            <IconButton onClick={() => setShowCat((prev) => !prev)} sx={styles.toggleButton}>
                <TbCategoryPlus className="icon"/>
                Categories
            </IconButton>
        </>
    );
}

FilterCategory.propTypes = {
    query: PropTypes.shape({
        search: PropTypes.string,
        category: PropTypes.string.isRequired,
    }).isRequired,
    setQuery: PropTypes.func.isRequired,
};

export default FilterCategory;
