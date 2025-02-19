import { useQuery } from "@apollo/client";
import { GET_ALBUM } from "../graphql/queries";
import { Container, Spinner, Alert, Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";


const GetAlbum = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(GET_ALBUM, {
    variables: { id },
  });

  if (loading) return (
    <Container className="text-center mt-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );

  if (error) return (
    <Container className="mt-5">
      <Alert variant="danger">Error: {error.message}</Alert>
    </Container>
  );

  const album = data.album;

  return (
    <Container className="mt-5">
        <Card className="shadow-lg p-4" style={{ width: "400px" }}>
            <Card.Body>
                <Card.Title className="text-center mb-3">Album Details</Card.Title>
                <hr />
                <Card.Text>
                    <strong>Album ID:</strong> {album.id}
                </Card.Text>
                <Card.Text>
                    <strong>Title:</strong> {album.title}
                </Card.Text>
            </Card.Body>
        </Card>

        <div className="text-center mt-3">
            <Link to="/">
                <Button variant="secondary">Back to Profile</Button>
            </Link>
        </div>

    </Container>
  );
};

export default GetAlbum;
