import { Col,Card,Button} from 'react-bootstrap';

function ChallengeCard({ challenge, onJoin, onLeaderboard, onReview }) {
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
                <Button variant="primary" size="sm" onClick={onJoin}>
                  Join
                </Button>
                <Button variant="secondary" size="sm" onClick={() => onLeaderboard(challenge.id)} className="ml-2">
                  Leaderboard
                </Button>
                <Button variant="info" size="sm" onClick={() => onReview(challenge.id)} className="ml-2">
                  Review
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  export default ChallengeCard;
