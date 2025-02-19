import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { GET_POST_DETAILS } from "../graphql/queries";
import { Container, Card, Spinner, Alert, Button } from "react-bootstrap";
import DeletePost from "./DeletePost";

const PostDetailsPage = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_POST_DETAILS, {
        variables: { id },
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

    const post = data.post;

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card className="shadow-lg p-4" style={{ width: "600px" }}>
                <Card.Body>
                    <Card.Title className="text-center mb-3">{post.title}</Card.Title>
                    <hr />
                    <Card.Text>{post.body}</Card.Text>
                    <hr />
                    <div className="text-center mt-3">
                        <Link to="/posts">
                            <Button variant="secondary">Back to Posts</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>

            <div className="text-center mt-3">
                <Link to='/posts/:id/edit' className="btn btn-primary mb-3">
                    Edit Post
                </Link>
                <DeletePost postId={post.id} />
            </div>

        </Container>
    );
};

export default PostDetailsPage;