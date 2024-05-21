import {Component} from 'react';

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true,
            error: null
        };
    }

    async componentDidMount() {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            this.setState({posts: data, isLoading: false});
        } catch (error) {
            this.setState({error, isLoading: false});
        }
    }

    render() {
        const {posts, isLoading, error} = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <div className="posts">
                <ul className="posts__list">
                    {posts.map(post => (
                        <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                            <h3 className="posts__post-title">{post.title}</h3>
                            <p className="posts__post-description">{post.body}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default PostCatalog;
