import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { login, register } from "@/authService/auth";
import css from "./PartModal.module.css";

export const PartModal = ({ show, handleClose }) => {
  // const [signUp, setSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (signUp === false) {
    //   const name = formBasicName.value;
    //   const email = formBasicEmail.value;
    //   const password = formBasicPassword.value;
    //   const data = await register({ name, email, password });
    //   localStorage.setItem("token", JSON.stringify(data.token));
    //   localStorage.setItem("avatar", JSON.stringify(data.user.avatar));
    handleClose();
    //   return;
    // }
    // const email = formBasicEmail.value;
    // const password = formBasicPassword.value;
    // const data = await login({ email, password });
    // const {
    //   user: { name },
    // } = data;
    // localStorage.setItem("token", JSON.stringify(data.token));
    // localStorage.setItem("avatar", JSON.stringify(data.user.avatar));
    // handleClose(name);
  };

  // const handleChangeLoginForm = () => {
  //   setSignUp(true);
  // };

  // const handleChangeRegisterForm = () => {
  //   setSignUp(false);
  // };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Brand"
            >
              <Form.Label className={css.label}>Brand</Form.Label>
              <Form.Control type="text" name="Brand" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Model"
            >
              <Form.Label className={css.label}>Model</Form.Label>
              <Form.Control type="text" name="Model" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Articul"
            >
              <Form.Label className={css.label}>Articul</Form.Label>
              <Form.Control type="text" name="Articule" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Part_Name"
            >
              <Form.Label className={css.label}>Part_Name</Form.Label>
              <Form.Control type="text" name="Part_Name" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Description"
            >
              <Form.Label className={css.label}>Description</Form.Label>
              <Form.Control type="text" name="Description" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Price"
            >
              <Form.Label className={css.label}>Price</Form.Label>
              <Form.Control type="text" name="Price" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Img"
            >
              <Form.Label className={css.label}>Img</Form.Label>
              <Form.Control type="file" name="Img" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="In_stock"
            >
              <Form.Label className={css.label}>In_stock</Form.Label>
              <Form.Control type="text" name="In_stock" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Country"
            >
              <Form.Label className={css.label}>Country</Form.Label>
              <Form.Control type="text" name="Country" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Quantity"
            >
              <Form.Label className={css.label}>Quantity</Form.Label>
              <Form.Control type="text" name="Quantity" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Створити
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
