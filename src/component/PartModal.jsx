import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./PartModal.module.css";
import { changeImg, createModel } from "@/apiService/apiParts";
import { useDispatch } from "react-redux";

export const PartModal = ({ show, handleClose, id }) => {
  const dispatch = useDispatch();

  const [partImg, setPartImg] = useState();
  const [isPart, setIsPart] = useState(true);

  console.log("partImg", partImg);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      Brand: { value: brand },
      Model: { value: model },
      Articul: { value: articul },
      Part_Name: { value: part_name },
      Description: { value: description },
      Price: { value: price },
      Img: { value: img },
      In_stock: { value: in_stock },
      Country: { value: country },
      Quantity: { value: quantity },
    } = e.currentTarget.elements;

    const newPart = {
      Brand: brand,
      Model: model.split(", "),
      Articul: articul,
      Part_Name: part_name,
      Description: description,
      Price: price,
      img:
        partImg ||
        "https://dummyimage.com/640x480/2a2a2a/ffffff&text=%D0%A4%D0%BE%D1%82%D0%BE+%D0%BE%D1%87%D1%96%D0%BA%D1%83%D1%94%D1%82%D1%8C%D1%81%D1%8F",
      In_stock: in_stock || "&",
      Country: country || "China",
      Quantity: quantity || "1",
    };

    console.log("newPart", formData);
    dispatch(createModel(newPart));
    handleClose();
  };

  const {
    Brand,
    Model,
    Articul,
    Part_Name,
    Description,
    Price,
    Img,
    In_stock,
    Country,
    Quantity,
  } = { ...id[0] };

  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    // const reader = new FileReader();
    // reader.readAsDataURL(file);
    formData.append("img", file);
    // reader.onloadend = (e) => {
    setPartImg(formData);
    // };
  };

  const handleChangeImgBtn = (e) => {
    e.preventDefault();
    console.log("first");
    const partId = id[0]._id;
    // const formData = new FormData();
    const data = { id: partId, img: partImg };
    // formData.append("img", partImg);
    dispatch(changeImg(data));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Button
            onClick={() => {
              setIsPart(!isPart);
            }}
          >
            {isPart ? "Part" : "IMG"}
          </Button>

          <Form onSubmit={handleSubmit}>
            {isPart ? (
              <>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="Brand"
                >
                  <Form.Label className={css.label}>Brand</Form.Label>
                  <Form.Control type="text" name="Brand" defaultValue={Brand} />
                </Form.Group>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="Model"
                >
                  <Form.Label className={css.label}>Model</Form.Label>
                  <Form.Control type="text" name="Model" defaultValue={Model} />
                </Form.Group>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="Articul"
                >
                  <Form.Label className={css.label}>Articul</Form.Label>
                  <Form.Control
                    type="text"
                    name="Articul"
                    defaultValue={Articul}
                  />
                </Form.Group>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="Part_Name"
                >
                  <Form.Label className={css.label}>Part_Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="Part_Name"
                    defaultValue={Part_Name}
                  />
                </Form.Group>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="Description"
                >
                  <Form.Label className={css.label}>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="Description"
                    defaultValue={Description}
                  />
                </Form.Group>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="Price"
                >
                  <Form.Label className={css.label}>Price</Form.Label>
                  <Form.Control type="text" name="Price" defaultValue={Price} />
                </Form.Group>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="In_stock"
                >
                  <Form.Label className={css.label}>In_stock</Form.Label>
                  <Form.Control
                    type="text"
                    name="In_stock"
                    defaultValue={In_stock}
                  />
                </Form.Group>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="Country"
                >
                  <Form.Label className={css.label}>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="Country"
                    defaultValue={Country}
                  />
                </Form.Group>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="Quantity"
                >
                  <Form.Label className={css.label}>Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    name="Quantity"
                    defaultValue={Quantity}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Створити
                </Button>
              </>
            ) : (
              <>
                <Form.Group
                  style={{ display: "flex" }}
                  className="mb-3"
                  controlId="Img"
                >
                  <Form.Label className={css.label}>Img</Form.Label>
                  <Form.Control
                    type="file"
                    name="Img"
                    onChange={handleChangeImg}
                  />
                </Form.Group>
                <Button
                  onClick={handleChangeImgBtn}
                  variant="primary"
                  type="submit"
                >
                  Змінити фото
                </Button>
              </>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
