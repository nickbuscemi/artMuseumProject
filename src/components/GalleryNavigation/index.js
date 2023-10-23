/*import { NavLink } from 'react-router-dom';

function GalleryNavigation({ galleries }) {

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">Home</NavLink>
            {galleries.map(gallery => (
            <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
                {gallery.name}
            </NavLink>
        ))}
        </nav>
    )
    
}

export default GalleryNavigation*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function GalleryNavigation({ galleries }) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Harvard Art Museum</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Galleries" id="basic-nav-dropdown">
              {galleries.map(gallery => (
                <NavDropdown.Item as={Link} to={`/galleries/${gallery.id}`} key={gallery.id}>
                  {gallery.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default GalleryNavigation;
  