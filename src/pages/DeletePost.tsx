import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../graphql/mutations";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

interface DeletePostProps {
    postId: string;
}

const DeletePost= ({ postId }: DeletePostProps) => {
    const [deletePost] = useMutation(DELETE_POST);
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deletePost({ variables: { id: postId } });
            navigate("/posts");
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <>
            <Button className="d-flex justify-content-center" variant="danger" onClick={() => setShowModal(true)}>
                Delete Post
            </Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Post Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeletePost;