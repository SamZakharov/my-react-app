import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {IconButton, InputBase, Paper} from '@mui/material';
import {CiSearch} from 'react-icons/ci';
import {styles} from './styles';

const Search = ({query: {query, setQuery}}) => {
    const [searchString, setSearchString] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const search = searchParams.get('search');
        if (search) {
            setQuery({...query, search});
            setSearchString(search);
        }
    }, [searchParams, query, setQuery]);

    const searchDataHandler = (e) => {
        setSearchString(e.target.value.toLowerCase());
    };

    const searchHandler = () => {
        if (searchString === '') {
            searchParams.delete('search');
            setSearchParams(searchParams);
            setQuery({...query, search: ''});
        } else {
            setQuery({...query, search: searchString});
            setSearchParams({...query, search: searchString});
        }
    };

    return (
        <Paper component="form" sx={styles.searchContainer}>
            <IconButton onClick={searchHandler} sx={styles.searchIcon}>
                <CiSearch/>
            </IconButton>
            <InputBase
                onChange={searchDataHandler}
                value={searchString}
                sx={styles.input}
                placeholder="Search ..."
            />
        </Paper>
    );
};

Search.propTypes = {
    query: PropTypes.shape({
        query: PropTypes.object.isRequired,
        setQuery: PropTypes.func.isRequired,
    }).isRequired,
};

export default Search;
