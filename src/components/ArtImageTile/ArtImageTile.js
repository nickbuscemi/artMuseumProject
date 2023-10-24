/*import React from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


function ArtImageTile({ art, galleryId }) {

    const imageStyle = {
        width: '100%',     // Make image fill the container
        height: '400px',   // Set height to 400px
        objectFit: 'cover' // Cover the container without stretching
    };

    return (
      <Col md={4}>
        <Card style={{ width: '400px', height: '600px' }} className="mb-4">
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
          <Card.Img variant="top" src={art.images[0].baseimageurl} alt={art.title} style={imageStyle} />
        </Link>
        <Card.Body>
          <Card.Title>{art.title}</Card.Title>
          <Card.Text>
            {art.description ? art.description.slice(0, 100) : 'No description available.'}...
          </Card.Text>
          <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <Button variant="primary">View Artwork</Button>
          </Link>
        </Card.Body>
        </Card>
      </Col>
    );
  }
  
export default ArtImageTile;*/
  
  
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';


function ArtImageTile({ art, galleryId }) {
  const [open, setOpen] = useState(false);

  const imageStyle = {
    width: '100%',     
    height: '400px',   
    objectFit: 'cover' 
  };

  const toggleDescription = () => {
    setOpen(!open);
  };

  return (
    <Col md={4}>
      <Card style={{ width: '400px', height: '600px' }} className="mb-4">
        <Link to={`/galleries/${galleryId}/art/${art.id}`}>
          <Card.Img variant="top" src={art.images[0].baseimageurl} alt={art.title} style={imageStyle} />
        </Link>
        <Card.Body>
          <Card.Title>{art.title}</Card.Title>
          <Button
            onClick={toggleDescription}
            aria-controls="collapse-description"
            aria-expanded={open}
            variant="link"
          >
            {open ? 'Hide Description' : 'Show Description'}
          </Button>
          <Collapse in={open}>
            <div id="collapse-description">
              <Card.Text>
                {art.description || 'No description available.'}
              </Card.Text>
            </div>
          </Collapse>
          <Link to={`/galleries/${galleryId}/art/${art.id}`}>
            <Button variant="primary">View Artwork</Button>
          </Link>
        </Card.Body>
      </Card> 
    </Col>
  );
}

export default ArtImageTile;

  
  
  