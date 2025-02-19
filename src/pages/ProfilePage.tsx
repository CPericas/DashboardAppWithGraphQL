import { Container, Card, Spinner, Alert } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_USER_PROFILE } from "../graphql/queries";
import { Link } from "react-router-dom";

const ProfilePage = () => {
    const { loading, error, data } = useQuery(GET_USER_PROFILE, {
        variables: { id: "1" },
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

    const user = data.user;

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card className="shadow-lg p-4" style={{ width: "400px" }}>
                <Card.Body>
                    <Card.Title className="text-center mb-3">User Profile</Card.Title>
                    <hr />
                    <Card.Text>
                        <strong>UserName:</strong> {user.username}
                    </Card.Text>
                    <Card.Text>
                        <strong>Email:</strong> {user.email}
                    </Card.Text>
                    <Card.Text>
                        <strong>Location:</strong>
                        <br />
                        Latitude: {user.address.geo.lat},
                        <br />
                        Longitude: {user.address.geo.lng}
                    </Card.Text>
                    <hr />
                    <div className="text-center mt-3">
                        <Link to='/posts' className="btn btn-primary">
                            User Posts
                        </Link>
                    </div>

                    <div className="text-center mt-3">
                        <Link to="/album/1" className="btn btn-secondary">
                            View Album
                        </Link>
                    </div>

                    <div className="text-center mt-3">
                        <Link to="/todo/:id" className="btn btn-secondary">
                            Todo
                        </Link>
                    </div>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProfilePage;