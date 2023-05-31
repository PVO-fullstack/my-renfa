import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { login, register } from "@/authService/auth";
import css from "./PartModal.module.css";

export const ContactsForm = ({ show, handleClose }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Name"
            >
              <Form.Label className={css.label}>Імя та Прізвище</Form.Label>
              <Form.Control type="text" name="Brand" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="Phone"
            >
              <Form.Label className={css.label}>Номер телефону</Form.Label>
              <Form.Control type="text" name="Phone" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="City"
            >
              <Form.Label className={css.label}>Місто</Form.Label>
              <Form.Control type="text" name="City" />
            </Form.Group>
            <Form.Group
              style={{ display: "flex" }}
              className="mb-3"
              controlId="NP"
            >
              <Form.Label className={css.label}>Номер відділення НП</Form.Label>
              <Form.Control type="text" name="NP" />
            </Form.Group>
            {/* <Form.Group
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
            </Form.Group> */}
            <Button variant="primary" type="submit">
              Підтвердити
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
