import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import './CombineCss.css'; // Import your custom CSS file here

export default function Recommendation({ recommendations }) {
  return (
    <Container className="recommendations-container">
      <h2 className="section-title">Recommended For You</h2>
      <div className="recommendations-grid">
        {recommendations.map((item, index) => (
          <Card key={index} className="recommendation-card">
            <Card.Img className='card-image' src={item.image}/>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}
