import './CombineCss.css';
import { Card,Container} from 'react-bootstrap';
export default function UserStories(){
    const stories = [
      {
        name: "Alice",
        story: "I love mixing vintage pieces with modern trends. Myntra has the best collection for that!",
        image: "path_to_image",
      },
      {
        name: "Bob",
        story: "Myntra helped me find my style and express my true self through fashion.",
        image: "path_to_image",
      },
    ];
  
    return (
      <Container className="user-stories-container">
        <h2 className="section-title">Fashion Stories from Our Community</h2>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <Card key={index} className="story-card">
            <Card.Img className='card_image'/>
              <Card.Body>
                <Card.Title>{story.name}</Card.Title>
                <Card.Text>{story.story}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    );
  };
  