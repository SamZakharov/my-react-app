import PropTypes from "prop-types";

const PostCatalogListItem = ({post}) => {
    return (
        <li className="posts_single-post" data-post-id={post.id}>
            <h3 className="posts__post-title">{post.title}</h3>
            <p className="posts__post-description">{post.body}</p>
        </li>
    );
};

PostCatalogListItem.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }).isRequired,
};

export default PostCatalogListItem;
