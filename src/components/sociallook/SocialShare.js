import './CombineCss.css';
import {Button} from 'react-bootstrap';
export default function SocialShare(){
    return (
        <div className="social-share">
      <h3>Share Your Story</h3>
      <Button variant="primary" className="social-button">
      <i class="fa fa-facebook-f" style={{ fontSize: '25px', color: 'maroon' }}></i> Facebook
      </Button>
      <Button variant="primary" className="social-button">
      <i class="fa fa-instagram" style={{ fontSize: '25px', color: 'maroon' }}></i> Instagram
      </Button>
      <Button variant="primary" className="social-button">
        <i className="fa fa-twitter" style={{ fontSize: '25px', color: 'maroon' }}></i> Twitter
      </Button>
    </div>
  
    );
  };
  