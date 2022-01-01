import React from 'react';
import emailjs from 'emailjs-com';
import { Col, Container, Form, Row } from 'react-bootstrap';
import email from '../image/email.png'
import './Login.css'

const Login = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1lpiuja', 'template_xnud51k', e.target, 'user_vWN9dCZGYlxSxnVJbdFyT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="mt-5 bottom">
           <Container>
           <Row>
              <Col sm={6}>
              <img className="img-fluid img-thumbnail size" src={email} alt="" />
              </Col>
              <Col sm={6}>
             
              <Form onSubmit={sendEmail}>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="name" name="subject"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" name="email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Example textarea</Form.Label>
    <Form.Control as="textarea" rows={3} name="message" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Control type="submit"  value="send Message" />
  </Form.Group>
 
</Form>
              </Col>
            </Row>
           </Container>
           
        </div>
    );
};

export default Login;