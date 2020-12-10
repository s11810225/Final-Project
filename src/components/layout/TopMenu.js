import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const TopMenu = () => {
    return(
        <Navbar bg="primary" variant="dark">
            <Link to="/">
                <Navbar.Brand> <h4>React TMDB App</h4> </Navbar.Brand>
            </Link>
            
          <Nav className="mr-auto">
          <Nav.Link as={Link} to="/"> Home </Nav.Link>
          <Nav.Link as={Link} to="/about"> About </Nav.Link>
          </Nav>
      </Navbar>
    )
}

export default TopMenu;
