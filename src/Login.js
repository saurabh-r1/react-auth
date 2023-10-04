import React from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';

const Login = ({ onLogin }) => {
  const cardStyle = {
    backgroundColor: '#4B0082',
    padding: '20px',
    width: '400px',
    margin: '0 auto', 
    borderRadius: '10px',
    textAlign:'center',
  };

  const formGroupStyle = {
    marginBottom: '15px', 
  };

  return (
    <Container className="login-container">
      <div style={cardStyle}>
        <Card.Body>
          <Card.Title style={{ color: 'white',  marginBottom:'20px' }}>Sign Up</Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail" style={formGroupStyle}>
              <Form.Label style={{ color: 'white' }}>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" style={formGroupStyle}>
              <Form.Label style={{ color: 'white' }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className='bg-transparent border-light m-3 ' onClick={onLogin}>
              Sign Up
            </Button>
          </Form>
          <p style={{ color: 'white', marginTop:'15px' }}>Login with an existing account.</p>
        </Card.Body>
      </div>
    </Container>
  );
};

export default Login;
