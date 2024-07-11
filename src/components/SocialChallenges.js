import React, { useState } from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import './SocialChallenge.css';
import challengesData from '../data/Challenges.js'; 
import Header from '../components/common/Header.js'

export default function SocialChallenge() {
  const [filteredChallenges, setFilteredChallenges] = useState(challengesData);
  
  const handleFilterChange = (event) => {
    const category = event.target.value;
    if (category === 'All') {
      setFilteredChallenges(challengesData);
    } else {
      const filtered = challengesData.filter(challenge => challenge.category === category);
      setFilteredChallenges(filtered);
    }
  };

  const handleJoinChallenge = (challengeId) => {
    console.log(`Joined challenge with ID ${challengeId}`);
  };

  return (
    <>
    <Header/>
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
          <ChallengeCard key={index} challenge={challenge} onJoin={handleJoinChallenge} />
        ))}
      </Row>
    </div>
    </>
  );
}

function ChallengeCard({ challenge, onJoin }) {
  const handleJoinClick = () => {
    onJoin(challenge.id);
  };

  return (
    <Col className="mb-3">
      <Card className="challengeCard">
        <div className="imgContainer">
          <Card.Img variant="top" src={challenge.image} className="imgTag" />
        </div>
        <Card.Body className="cardBody">
          <p className="challengeTitle">{challenge.title}</p>
          <p className="challengeDescription">{challenge.description.substring(0, 100)}...</p>
          <div className="challengeDetails">
            <div>
              <p>{`Ends on: ${challenge.endDate}`}</p>
            </div>
            <div className="challengeActions">
              <Button variant="primary" onClick={handleJoinClick}>
                Join Challenge
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
