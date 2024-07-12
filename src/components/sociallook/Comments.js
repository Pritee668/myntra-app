import './CombineCss.css';
import {Button,Form} from 'react-bootstrap';

export default function Comments({ comments }){
    return (
      <div className="comment-section">
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <strong>{comment.user}</strong>: {comment.text}
          </div>
        ))}
        <Form>
          <Form.Group controlId="formComment">
            <Form.Control type="text" placeholder="Add a comment" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </div>
    );
  };
  
