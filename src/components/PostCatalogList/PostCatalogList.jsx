import PostCatalogListItem from '../PostCatalogListItem';
import PropTypes from "prop-types";

const PostCatalogList = ({posts}) => {
    return (
        <ul className="posts__list">
            {posts.map(post => (
                <PostCatalogListItem key={post.id} post={post}/>
            ))}
        </ul>
    );
};

PostCatalogList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default PostCatalogList;
