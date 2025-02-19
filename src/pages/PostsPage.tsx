import { useQuery } from "@apollo/client";
import { GET_USER_POSTS } from "../graphql/queries";
import { Container, ListGroup, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const PostsPage = () => {

    const { loading, error, data } = useQuery(GET_USER_POSTS, {
        variables: {id: "1"},
    });

    if (loading)
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    
    if (error) 
        return (
            <Container className="mt-5">
                <Alert variant="danger">Error: {error.message}</Alert>
            </Container>
        );

    const posts = data.user.posts.data;

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">User Posts</h1>

            <div className="text-center mt-3">
                <Link to='/' className="btn btn-primary mb-3">
                    User Profile
                </Link>
            </div>

            <div className="text-center mt-3">
                <Link to='/posts/create' className="btn btn-secondary mb-3">
                    Create Post
                </Link>
            </div>

            <ListGroup>
                {posts.map((post: { id: string; title: string}) => (
                    <ListGroup.Item key={post.id}>
                        <Link to={`/posts/${post.id}`} className="text-decoration-none">
                            {post.title}
                        </Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default PostsPage;