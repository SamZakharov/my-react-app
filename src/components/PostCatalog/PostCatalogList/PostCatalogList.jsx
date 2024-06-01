import PropTypes from "prop-types";

const PostCatalogList = ({posts}) => {
    return (
        <ul className="posts__list">
            {posts.map(post => (
                <li className="posts_single-post" key={post.id}>
                    <h3 className="posts__post-title">{post.title}</h3>
                    <p className="posts__post-description">{post.body}</p>
                </li>
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
