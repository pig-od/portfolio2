import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './styles.css'

const Contact = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState(null);

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };

  const sendEmail = event => {
    event.preventDefault();
    axios
     .post('https://portfolio2-3r05.onrender.com/contact/send', { ...state })
     .then(response => {
       setResult(response.data);
       setState({ name: '', email: '', subject: '', message: '' });
     })
     .catch((error) => {
       setResult({ success: false, message: 'Something went wrong. Try again later'});
   });
  }

  return (
    <div className="landing-page">
      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}
      <h1>Contact me with this form!</h1>
      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Name"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Email"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Subject: </Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Subject"
            onChange={onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message: </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Message"
            onChange={onInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
