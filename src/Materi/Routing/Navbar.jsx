import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Menu = ( ) => {
    return (
        <div className='navbar'>
            <Navbar bg="dark" variant="dark" className="container-fluid bg-dark mt- mb-0">
            <Container fluid="md">
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='contact'>Contact</Link></Nav.Link>
                    <Nav.Link><Link to='about'>About</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Menu;