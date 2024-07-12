import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import './SocialChallenge.css';
import challengesData from '../data/Challenges.js'; 
import Header from '../components/common/Header.js'
import ChallengeCard from '../components/challenges/ChallengeCard.js';
import Leaderboard from '../components/challenges/Leaderboard.js'
import Review from '../components/challenges/Review.js'


export default function SocialChallenge() {
  const [filteredChallenges, setFilteredChallenges] = useState(challengesData);
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false); // State for leaderboard modal
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleFilterChange = (event) => {
    const category = event.target.value;
    if (category === 'All') {
      setFilteredChallenges(challengesData);
    } else {
      const filtered = challengesData.filter(challenge => challenge.category === category);
      setFilteredChallenges(filtered);
    }
  };

  const handleJoinChallenge = (challenge) => {
    setSelectedChallenge(challenge);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedChallenge(null);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    handleModalClose();
  };

  const handleLeaderboardClick = () => {
    setShowLeaderboard(true);
  };

  const handleLeaderboardClose = () => {
    setShowLeaderboard(false);
  };

  const handleReviewClick = (challenge) => {
    setSelectedChallenge(challenge);
    setShowReview(true);
  };

  const handleReviewClose = () => {
    setShowReview(false);
    setSelectedChallenge(null);
  };


  return (
    <>
      <Header />
      <div className="socialChallengesContainer">
        <h1 className="pageTitle">Join Fashion Challenges</h1>

        <div className="filters">
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Filter by Category:</Form.Label>
              <Form.Control as="select" onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="Men's Fashion">Men's Fashion</option>
                <option value="Women's Fashion">Women's Fashion</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </div>

        <Row xs={1} md={2} lg={3} className="challengeRow">
          {filteredChallenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              challenge={challenge}
              onJoin={() => handleJoinChallenge(challenge)}
              onLeaderboard={handleLeaderboardClick}
              onReview={handleReviewClick}
            />
          ))}
        </Row>

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Join Challenge</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedChallenge && (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group controlId="formReason">
                  <Form.Label>Why do you want to join this challenge?</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Describe your reason" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Modal.Body>
        </Modal>

        <Leaderboard show={showLeaderboard} onHide={handleLeaderboardClose} />
        <Review show={showReview} onHide={handleReviewClose} challengeId={selectedChallenge?.id} />
      </div>
    </>
  );
}

