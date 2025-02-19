import { useQuery } from "@apollo/client";
import { GET_TODO } from "../graphql/queries";
import { Spinner, Alert, Container, Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";


const Todo = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(GET_TODO, {
    variables: { id },
  });

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Error: {error.message}</Alert>
      </Container>
    );
  }

  const todo = data.todo;

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="shadow-lg p-4" style={{ width: "400px" }}>
        <Card.Body>
          <Card.Title className="text-center mb-3">Todo Details</Card.Title>
          <hr />
          <Card.Text>
            <strong>Title:</strong> {todo.title}
          </Card.Text>
          <Card.Text>
            <strong>Status:</strong> {todo.completed ? "Completed" : "Incomplete"}
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="text-center mt-3">
            <Link to="/">
                <Button variant="primary">Back to Profile</Button>
            </Link>
        </div>
    </Container>
  );
};

export default Todo;
