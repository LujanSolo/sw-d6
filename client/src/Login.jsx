import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    //todo: handle form submission (send login request to backend)
  };

  return (
    <div className="container">
      <h2>LOGIN FORM</h2>
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Login name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>

  );
}

export default LoginForm;