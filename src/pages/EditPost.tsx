import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_POST_DETAILS } from "../graphql/queries";
import { UPDATE_POST } from "../graphql/mutations";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { loading, error, data } = useQuery(GET_POST_DETAILS, { variables: { id } });
    const [updatePost, { loading: updating, error: updateError }] = useMutation(UPDATE_POST);
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            setTitle(data.post.title || "");
            setBody(data.post.body || "");
        }
    }, [data]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!id) {
            console.error("Post ID is missing")
            return;
        }

        try {
            await updatePost({ variables: { id, input: { title, body} } });
            navigate("/posts");
        } catch (err) {
            console.error("Error updating post:", err);
        }
    };

    return (
        <Container className="mt-5">
            <h1>Edit Post</h1>

            {updateError && <Alert variant="danger">{updateError.message}</Alert>}
            {loading && <p>Loading post...</p>}
            {error && <Alert variant="danger">{error.message}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="postTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="postBody">
                    <Form.Label>Content</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={5}
                        placeholder="Enter Post Content"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={updating}>
                    {updating ? "Updating..." : "Update Post"}
                </Button>
            </Form>
        </Container>
    );
};

export default EditPost;