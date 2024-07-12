import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function Review({ show, onHide, challengeId }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Challenge ID: ${challengeId}, Rating: ${rating}, Comment: ${comment}`);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Submit Your Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formRating">
            <Form.Label>Rating</Form.Label>
            <Form.Control as="select" value={rating} onChange={handleRatingChange} required>
              <option value={0}>Select Rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} value={comment} onChange={handleCommentChange} required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Review
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
