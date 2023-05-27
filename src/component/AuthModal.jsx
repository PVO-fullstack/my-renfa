import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { login, register } from "@/authService/auth";

export const AuthModal = ({ show, handleClose }) => {
  const [signUp, setSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUp === false) {
      const name = formBasicName.value;
      const email = formBasicEmail.value;
      const password = formBasicPassword.value;
      const data = await register({ name, email, password });
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("avatar", JSON.stringify(data.user.avatar));
      handleClose(name);
      return;
    }
    const email = formBasicEmail.value;
    const password = formBasicPassword.value;
    const data = await login({ email, password });
    const {
      user: { name },
    } = data;
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("avatar", JSON.stringify(data.user.avatar));
    handleClose(name);
  };

  const handleChangeLoginForm = () => {
    setSignUp(true);
  };

  const handleChangeRegisterForm = () => {
    setSignUp(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Зареєструйтесь</Modal.Title> */}
          <Button onClick={handleChangeRegisterForm}>Зареєструватись</Button>
          Або
          <Button onClick={handleChangeLoginForm}>Увійти</Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {signUp === false ? (
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
            ) : (
              ""
            )}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
