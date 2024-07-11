import Collections from "../data/SocialLookBook";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Card,Row} from 'react-bootstrap';


export default function Slider() {
    const [index, setIndex] = useState(0);
  const visibleCards = 3; 
  const handleNext = () => {
    if (index < Collections.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const handleBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  return (
   <>
    <h2 className="mt-5">Trending Clothes</h2>
    <div className="gallery-wrap">
    <FontAwesomeIcon icon={ faArrowLeft } className="icon" id="backbtn" onClick={handleBack}/>
    
      <div className="outerContainer">
     <Row className="outerCard" style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}>
      {Collections.map((item,i) => (
        <div key={i}  className="imagecard">
          <Card  key={i} className="imagecard">
          <Card.Img variant="top" src={item.imageUrl} className='cardimage'/>
          <Card.Body>
            <Card.Text>
              {item.name}
            </Card.Text>
          </Card.Body>
        </Card>
          </div>
      ))}
    
    </Row>
    </div>
    <FontAwesomeIcon icon={ faArrowRight } className="icon" id="nextbtn" onClick={handleNext}/>
      </div>
     
   
   </>
  )
}
