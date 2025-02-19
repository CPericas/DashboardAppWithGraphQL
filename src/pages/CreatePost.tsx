import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../graphql/mutations";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [createPost, { loading, error }] = useMutation(CREATE_POST);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createPost({ variables: { input: { title, body } } });
            navigate("/posts");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container className="mt-5">
            <h1>Create New Post</h1>

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
                    <Form.Label>Post Content</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Enter COntent"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" disabled={loading}>
                    {loading ? "Creating..." : "Create Post"}
                </Button>
            </Form>
        </Container>
    );
};

export default CreatePost;