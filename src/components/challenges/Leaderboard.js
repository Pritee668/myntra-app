import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const randomNames = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis", "Dana White", "Eve Adams", "Frank Green"];
const generateLeaderboardData = () => {
  return randomNames.map(name => ({
    name,
    likes: Math.floor(Math.random() * 1000)
  })).sort((a, b) => b.likes - a.likes);
};

export default function Leaderboard({ show, onHide }) {
  const leaderboardData = generateLeaderboardData();

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Leaderboard</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.likes}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
