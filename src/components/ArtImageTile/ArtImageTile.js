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
  
  
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';




function ArtImageTile({ art, galleryId }) {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    const imageStyle = {
      width: '100%',
      height: '600px',
      objectFit: 'cover',
    };
  
    return (
      <Col md={4}>
        <Card 
          style={{ width: '400px' }} 
          className="mb-4" 
          ref={target} 
          onMouseOver={() => setShow(true)} 
          onMouseOut={() => setShow(false)}
        >
          {art.images && art.images.length > 0 ? (
            <Link to={`/galleries/${galleryId}/art/${art.id}`}>
              <Card.Img variant="top" src={art.images[0].baseimageurl} alt={art.title} style={imageStyle} />
            </Link>
          ) : (
            <div style={imageStyle}>Image not available</div>
          )}
          <Card.Body>
            <Card.Title>{art.title}</Card.Title>
            <Link to={`/galleries/${galleryId}/art/${art.id}`}>
              <Button variant="primary">View Artwork</Button>
            </Link>
          </Card.Body>
        </Card>
        <Overlay target={target.current} show={show} placement='right'>
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {art.description || 'No description available.'}
            </Tooltip>
          )}
        </Overlay>
      </Col>
    );
  }
  
  export default ArtImageTile;
  

  
  
  