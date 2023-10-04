// MyNavbar.js
import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './MyNavbar.css';

const MyNavbar = ({ isLoggedIn, onLogout }) => {
  const navLinkStyle = {
    color: 'white', // Set text color to white
  };

  return (
    <Navbar className="my-navbar">
      <Container>
      <Navbar.Brand className='text-light'>
        <h1>React Auth</h1>
      </Navbar.Brand>
      
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      
      
        <Nav className='fw-semibold gap-4'>
          <Nav.Link as={NavLink} to="/login" style={navLinkStyle} >
            Login
          </Nav.Link>
          {isLoggedIn && (
          <Nav.Link as={NavLink} to="/profile" style={navLinkStyle}>
            Profile
          </Nav.Link>
          )} 
          {isLoggedIn && (
            <Button className="bg-transparent border-light px-4 fw-semibold" onClick={onLogout}>
              Logout
            </Button>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
