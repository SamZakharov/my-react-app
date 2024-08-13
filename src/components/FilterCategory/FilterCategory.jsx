import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useSearchParams} from 'react-router-dom';
import {TbCategoryPlus} from 'react-icons/tb';
import {ThreeDots} from 'react-loader-spinner';
import {Box, IconButton, List, ListItem, Typography} from '@mui/material';
import {styles} from './styles';
import {useGetAllCategoriesQuery} from '../../redux/productsApi/productsApi.js';

function FilterCategory({query, setQuery}) {
    const [selectedCat, setSelectedCat] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const [showCat, setShowCat] = useState(true);

    // Используем RTK Query для получения списка категорий
    const {data: catList = [], isLoading} = useGetAllCategoriesQuery();

    useEffect(() => {
        if (searchParams.get('category')) {
            setQuery({...query, category: searchParams.get('category')});
            setSelectedCat(searchParams.get('category'));
        }
    }, [query, searchParams, setQuery]);

    const categoryHandler = (e) => {
        const catId = e.target.id;

        setSelectedCat(catId);

        if (query.search === '') {
            setSearchParams({category: catId});
            setQuery({category: catId});
        } else {
            setQuery({...query, category: catId});
            setSearchParams({...query, category: catId});
        }

        if (catId === 0) {
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
                {isLoading ? (
                    <ThreeDots
                        visible={true}
                        height="30"
                        width="30"
                        color="#703BF7"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClass="loader"
                    />
                ) : (
                    <List>
                        <ListItem
                            sx={styles.listItem(selectedCat === 0)}
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
                                    sx={styles.listItem(selectedCat === id)}
                                    onClick={categoryHandler}
                                    id={id}
                                >
                                    {name}
                                </ListItem>
                            );
                        })}
                    </List>
                )}
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
        search: PropTypes.string,  // Проп search, если он есть в query
        category: PropTypes.string, // Проп category, если он есть в query
    }).isRequired,
    setQuery: PropTypes.func.isRequired,
};

export default FilterCategory;
