import React from "react";
import { Card, Button, Container, Form } from "react-bootstrap";
import Slider from "./Slider.js";
import "./SocialLookBook.css";
import UserStories from "./sociallook/UserStories.js";
import SocialShare from "./sociallook/SocialShare.js";
import Recommendation from "./sociallook/Recommendation.js";
import Comments from "./sociallook/Comments.js";
import Header from '../components/common/Header.js'

const SocialLookbook = () => {
  const comments = [
    { user: "John", text: "Great outfit!" },
    { user: "Jane", text: "Love this style!" },
  ];

  const recommendations = [
    {
      image: "path_to_image",
      title: "Summer Dress",
      description: "Perfect for the sunny days.",
    },
    {
      image: "path_to_image",
      title: "Casual Jacket",
      description: "Stay stylish in any weather.",
    },
  ];

  return (
    <>
    <Header/>
      <Container className="social-lookbook-container">
        <Card
          className="text-center"
          style={{ width: "100%", maxWidth: "1250px" }}
        >
          <Card.Body>
            <Card.Title as="h1" className="section-title">
              Share Your Fashion Story
            </Card.Title>
            <Card.Text className="card-text">
              <strong>
                "Fashion is more than just clothing it's a powerful form of
                self-expression that tells your unique story."
              </strong>
              <br />
              Share your fashion journey with our vibrant community and inspire
              others with your style. Whether it's a daring new look, a beloved
              wardrobe staple, or a creative mix of trends, your fashion story
              has the power to ignite inspiration. Let's celebrate individuality
              and creativity together, one outfit at a time. Your style is your
              voice—let it be heard.
            </Card.Text>
            <Button variant="primary" className="button-primary">
              Share Your Story
            </Button>
          </Card.Body>
        </Card>
      </Container>
      <Slider />
      <UserStories />
      <Recommendation recommendations={recommendations} />
      <Comments comments={comments} />
      <SocialShare />
    </>
  );
};

export default SocialLookbook;
