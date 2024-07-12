import './CombineCss.css';
import { Card,Container} from 'react-bootstrap';
export default function UserStories(){
    const stories = [
      {
        name: "Alice",
        story: "I love mixing vintage pieces with modern trends. Myntra has the best collection for that!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpK2zMPUXYsZZgm5GAac9oa42cyxHtYGO5wA&s",
      },
      {
        name: "Bob",
        story: "Myntra helped me find my style and express my true self through fashion.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpK2zMPUXYsZZgm5GAac9oa42cyxHtYGO5wA&s",
      },
    ];
  
    return (
      <Container className="user-stories-container">
        <h2 className="section-title">Fashion Stories from Our Community</h2>
        <div className="stories-grid">
          {stories.map((story, index) => (
            <Card key={index} className="story-card">
            <Card.Img className='card_image' src={story.image}/>
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
  