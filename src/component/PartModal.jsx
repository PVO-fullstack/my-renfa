import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { login, register } from "@/authService/auth";

export const PartModal = ({ show, handleClose }) => {
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
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Articul</Form.Label>
              <Form.Control type="text" name="Articule" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Part_Name</Form.Label>
              <Form.Control type="text" name="Part_Name" />
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
